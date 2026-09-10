import { useEffect, useRef, type RefObject } from 'react';
import { getLenisInstance } from '@/lib/lenis';
import {
  parseColorToRgba,
  mapNoiseScale,
  mapNoiseIntensity,
  mapScrollSensitivity,
  mapBaseAnimationSpeed,
  mapEdgeSoftness,
} from './mapping';

export interface BurnEngineProps {
  color: string;
  transitionColor?: string;
  noiseScale: number;
  noiseIntensity: number;
  scrollSensitivity: number;
  baseAnimationSpeed: number;
  edgeSoftness: number;
  bloomIntensity?: number;
  bloomRadius?: number;
  parallaxEnabled: boolean;
  inverted?: boolean;
  movement?: { horizontal?: 'left' | 'center' | 'right'; vertical?: number };
  onWebGLUnsupported?: () => void;
}

/**
 * Owns the full WebGL burn-shader engine:
 * - High-precision, mobile-safe shader math (no float16 overflow, no trigonometrics in hash)
 * - Rock-solid single-pass pipeline with premultiplied alpha (no dark halos on Safari/iOS)
 * - Native inverted UV mapping inside shader (eliminates CSS transform scaleY(-1) seam bugs)
 * - Safe anchored baseline (guarantees zero cutoff or dark seam leakage on any screen size)
 * - Responsive frequency compensation for mobile and desktop screens
 * - Viewport intersection awareness to pause when scrolled out of view
 */
export function useBurnAnimation(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  containerRef: RefObject<HTMLDivElement | null>,
  props: BurnEngineProps
): void {
  const {
    color,
    transitionColor,
    noiseScale,
    noiseIntensity,
    scrollSensitivity,
    baseAnimationSpeed,
    edgeSoftness,
    parallaxEnabled,
    inverted = false,
    movement,
    onWebGLUnsupported,
  } = props;

  // Initialize as true so animation loop runs immediately upon mount
  const isVisibleRef = useRef<boolean>(true);
  const animationFrameRef = useRef<number | null>(null);

  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const bufferRef = useRef<WebGLBuffer | null>(null);

  const colorRgba = parseColorToRgba(color);
  const transitionColorRgba = parseColorToRgba(transitionColor || '#dfc28d');

  const colorRef = useRef<[number, number, number]>([colorRgba.r, colorRgba.g, colorRgba.b]);
  const transitionColorRef = useRef<[number, number, number]>([
    transitionColorRgba.r,
    transitionColorRgba.g,
    transitionColorRgba.b,
  ]);

  const noiseScaleRef = useRef(mapNoiseScale(noiseScale));
  const noiseIntensityRef = useRef(mapNoiseIntensity(noiseIntensity));
  const scrollSensitivityRef = useRef(mapScrollSensitivity(scrollSensitivity));
  const baseAnimationSpeedRef = useRef(mapBaseAnimationSpeed(baseAnimationSpeed));
  const edgeSoftnessRef = useRef(mapEdgeSoftness(edgeSoftness));
  const parallaxEnabledRef = useRef(parallaxEnabled);
  const invertedRef = useRef(inverted);

  const horizontalMovementValue =
    movement?.horizontal === 'left' ? 1 : movement?.horizontal === 'right' ? -1 : 0;
  const movementHorizontalRef = useRef(horizontalMovementValue);
  const movementVerticalRef = useRef(movement?.vertical ?? 0.5);

  const scrollOffsetRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const startTimeRef = useRef(0);
  const parallaxOffsetRef = useRef(0);
  const canvasSizeRef = useRef({ width: 0, height: 0 });

  // Update dynamic values when props change
  useEffect(() => {
    const c = parseColorToRgba(color);
    colorRef.current = [c.r, c.g, c.b];
  }, [color]);

  useEffect(() => {
    const tc = parseColorToRgba(transitionColor || '#dfc28d');
    transitionColorRef.current = [tc.r, tc.g, tc.b];
  }, [transitionColor]);

  useEffect(() => {
    noiseScaleRef.current = mapNoiseScale(noiseScale);
    noiseIntensityRef.current = mapNoiseIntensity(noiseIntensity);
    scrollSensitivityRef.current = mapScrollSensitivity(scrollSensitivity);
    baseAnimationSpeedRef.current = mapBaseAnimationSpeed(baseAnimationSpeed);
    edgeSoftnessRef.current = mapEdgeSoftness(edgeSoftness);
    parallaxEnabledRef.current = parallaxEnabled;
    invertedRef.current = inverted;
    movementHorizontalRef.current =
      movement?.horizontal === 'left' ? 1 : movement?.horizontal === 'right' ? -1 : 0;
    movementVerticalRef.current = movement?.vertical ?? 0.5;
  }, [
    noiseScale,
    noiseIntensity,
    scrollSensitivity,
    baseAnimationSpeed,
    edgeSoftness,
    parallaxEnabled,
    inverted,
    movement,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Use premultipliedAlpha: true for standard, artifact-free WebKit and Blink compositing
    const gl =
      canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: true }) ||
      (canvas.getContext('experimental-webgl', {
        alpha: true,
        premultipliedAlpha: true,
        antialias: true,
      }) as WebGLRenderingContext | null);

    if (!gl) {
      onWebGLUnsupported?.();
      return;
    }
    glRef.current = gl;

    const createShader = (glCtx: WebGLRenderingContext, type: number, source: string) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn('Burn shader compile failed:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const createProgram = (
      glCtx: WebGLRenderingContext,
      vShader: WebGLShader,
      fShader: WebGLShader
    ) => {
      const program = glCtx.createProgram();
      if (!program) return null;
      glCtx.attachShader(program, vShader);
      glCtx.attachShader(program, fShader);
      glCtx.linkProgram(program);
      if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
        console.warn('Burn program link failed:', glCtx.getProgramInfoLog(program));
        glCtx.deleteProgram(program);
        return null;
      }
      return program;
    };

    const vertexShader = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      uniform float u_inverted;
      void main() {
        vec2 uv = 0.5 * (a_position + 1.0);
        if (u_inverted > 0.5) {
          uv.y = 1.0 - uv.y;
        }
        v_uv = uv;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
      #else
        precision mediump float;
      #endif

      varying vec2 v_uv;
      uniform vec3 u_color;
      uniform vec3 u_transition_color;
      uniform float u_noise_scale;
      uniform float u_noise_intensity;
      uniform float u_time;
      uniform float u_scroll_offset;
      uniform float u_edge_softness;
      uniform float u_movement_horizontal;
      uniform float u_movement_vertical;
      uniform float u_parallax_offset;
      uniform float u_aspect_ratio;
      uniform float u_is_mobile;

      // Mobile-safe deterministic hash without sin() to prevent float16 overflow
      float hash(vec2 p) {
        vec2 q = fract(p * vec2(123.34, 456.21));
        q += dot(q, q + 45.32);
        return fract(q.x * q.y);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 5; i++) {
          value += amplitude * noise(st);
          st *= 2.02;
          amplitude *= 0.5;
        }
        return value;
      }

      // Sharp creases and ragged paper tears
      float turbulence(vec2 st) {
        float value = 0.0;
        float amplitude = 0.55;
        for (int i = 0; i < 5; i++) {
          value += amplitude * abs(noise(st) * 2.0 - 1.0);
          st *= 2.15;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        // Living breathing wave along the tear edge (ensures organic motion at rest)
        float wave = sin(u_time * 1.5 + v_uv.x * 6.5) * 0.012 + cos(u_time * 1.0 + v_uv.x * 12.0) * 0.008;

        // Safe baseline: anchored around 0.60 with subtle clamped parallax + living wave
        float baseLine = 0.60 + clamp(u_parallax_offset * 0.12, -0.05, 0.05) + wave;

        // Responsive scroll movement offsets
        float horizontalOffset = u_scroll_offset * (u_movement_horizontal != 0.0 ? u_movement_horizontal : 0.35);
        float verticalOffset = u_scroll_offset * u_movement_vertical;

        // Balanced frequency scaling across mobile and desktop
        float hScale = u_is_mobile > 0.5 ? 4.6 : u_aspect_ratio * 1.55;
        vec2 noiseCoord = vec2(
          v_uv.x * hScale * u_noise_scale * 0.38 + horizontalOffset + u_time * 0.03,
          v_uv.y * 2.0 + verticalOffset
        );

        // Domain warping for organic paper tearing
        vec2 warp = vec2(
          fbm(noiseCoord + vec2(1.7, 9.2)),
          fbm(noiseCoord + vec2(8.3, 2.8))
        );

        float edgeFbm = fbm(noiseCoord + warp * 0.5);
        float edgeTurb = turbulence(noiseCoord * 1.5 + warp * 0.35);
        float macroNoise = mix(edgeFbm, edgeTurb, 0.45);

        // Macro edge with deep organic rips
        float macroEdge = baseLine - (macroNoise - 0.45) * (u_noise_intensity * 0.62);

        // Micro jagged teeth and paper fibers
        vec2 fiberCoord = vec2(v_uv.x * hScale * 6.0, v_uv.y * 10.0);
        float fiber1 = abs(noise(fiberCoord + vec2(u_time * 0.02, 0.0)) * 2.0 - 1.0);
        float fiber2 = noise(fiberCoord * 3.0 + vec2(17.4, 31.8));
        float fiber3 = abs(noise(vec2(v_uv.x * hScale * 20.0, v_uv.y * 12.0)) * 2.0 - 1.0);

        // Sharp jagged micro-teeth
        float jagged = -(fiber1 * 0.50 + fiber2 * 0.25 + fiber3 * 0.35 - 0.50) * 0.10;

        // Final torn edge contour strictly clamped within safe canvas bounds
        float tornEdge = clamp(macroEdge + jagged, 0.10, 0.90);

        // Crisp cutoff (1-2px sub-pixel anti-aliasing matching Image 2)
        float aa = u_is_mobile > 0.5 ? 0.012 : 0.007;
        float dist = v_uv.y - tornEdge;

        if (dist < 0.0) {
          // 100% solid cream paper (#f3f2e6), completely seamless with previous/next section
          gl_FragColor = vec4(u_color, 1.0);
        } else if (dist < aa) {
          // Clean 1-pixel subpixel anti-aliasing (no color bleeding, no glowing golden blur)
          float alpha = 1.0 - (dist / aa);
          gl_FragColor = vec4(u_color * alpha, alpha);
        } else {
          // Transparent void revealing dark architecture section
          discard;
        }
      }
    `;

    const vShaderObj = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fShaderObj = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vShaderObj || !fShaderObj) {
      onWebGLUnsupported?.();
      return;
    }

    const prog = createProgram(gl, vShaderObj, fShaderObj);
    if (!prog) {
      onWebGLUnsupported?.();
      return;
    }
    programRef.current = prog;

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    if (!buffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    bufferRef.current = buffer;

    startTimeRef.current = performance.now();

    const resizeCanvas = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const newWidth = Math.max(1, Math.floor(rect.width * dpr));
      const newHeight = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== newWidth || canvas.height !== newHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        canvasSizeRef.current = { width: newWidth, height: newHeight };
      }

      if (gl) {
        gl.viewport(0, 0, newWidth, newHeight);
      }
    };

    const updateParallaxOffset = () => {
      if (!parallaxEnabledRef.current || !container) {
        parallaxOffsetRef.current = 0;
        return;
      }
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 800;
      const componentTop = rect.top;
      const componentHeight = rect.height;

      let progress: number;
      if (componentTop >= viewportHeight) {
        progress = 1;
      } else if (rect.bottom <= 0) {
        progress = 0;
      } else {
        progress = 1 - (viewportHeight - componentTop) / (viewportHeight + componentHeight);
        progress = Math.max(0, Math.min(1, progress));
      }
      parallaxOffsetRef.current = 1 - progress - 0.5;
    };

    const render = () => {
      const glCtx = glRef.current;
      const progActive = programRef.current;
      const buf = bufferRef.current;
      if (!glCtx || !progActive || !buf) return;

      glCtx.viewport(0, 0, canvasSizeRef.current.width, canvasSizeRef.current.height);
      glCtx.useProgram(progActive);
      glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);

      const posLoc = glCtx.getAttribLocation(progActive, 'a_position');
      glCtx.enableVertexAttribArray(posLoc);
      glCtx.vertexAttribPointer(posLoc, 2, glCtx.FLOAT, false, 0, 0);

      const colorLoc = glCtx.getUniformLocation(progActive, 'u_color');
      const [r, g, b] = colorRef.current;
      glCtx.uniform3f(colorLoc, r, g, b);

      const trLoc = glCtx.getUniformLocation(progActive, 'u_transition_color');
      if (trLoc) {
        const [tr, tg, tb] = transitionColorRef.current;
        glCtx.uniform3f(trLoc, tr, tg, tb);
      }

      const nsLoc = glCtx.getUniformLocation(progActive, 'u_noise_scale');
      if (nsLoc) glCtx.uniform1f(nsLoc, noiseScaleRef.current);

      const niLoc = glCtx.getUniformLocation(progActive, 'u_noise_intensity');
      if (niLoc) glCtx.uniform1f(niLoc, noiseIntensityRef.current);

      const currentTime = performance.now();
      const elapsedSeconds = (currentTime - startTimeRef.current) / 1000;
      const timeVal = elapsedSeconds * baseAnimationSpeedRef.current;

      const timeLoc = glCtx.getUniformLocation(progActive, 'u_time');
      if (timeLoc) glCtx.uniform1f(timeLoc, timeVal);

      const soLoc = glCtx.getUniformLocation(progActive, 'u_scroll_offset');
      if (soLoc) glCtx.uniform1f(soLoc, scrollOffsetRef.current % 10.0);

      const esLoc = glCtx.getUniformLocation(progActive, 'u_edge_softness');
      if (esLoc) glCtx.uniform1f(esLoc, edgeSoftnessRef.current);

      const mhLoc = glCtx.getUniformLocation(progActive, 'u_movement_horizontal');
      if (mhLoc) glCtx.uniform1f(mhLoc, movementHorizontalRef.current);

      const mvLoc = glCtx.getUniformLocation(progActive, 'u_movement_vertical');
      if (mvLoc) glCtx.uniform1f(mvLoc, movementVerticalRef.current);

      const poLoc = glCtx.getUniformLocation(progActive, 'u_parallax_offset');
      if (poLoc) glCtx.uniform1f(poLoc, parallaxOffsetRef.current);

      const arLoc = glCtx.getUniformLocation(progActive, 'u_aspect_ratio');
      if (arLoc) {
        const w = canvasSizeRef.current.width;
        const h = canvasSizeRef.current.height;
        glCtx.uniform1f(arLoc, h > 0 ? w / h : 1);
      }

      const isMobLoc = glCtx.getUniformLocation(progActive, 'u_is_mobile');
      if (isMobLoc) {
        const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
        glCtx.uniform1f(isMobLoc, isMob ? 1.0 : 0.0);
      }

      const invLoc = glCtx.getUniformLocation(progActive, 'u_inverted');
      if (invLoc) {
        glCtx.uniform1f(invLoc, invertedRef.current ? 1.0 : 0.0);
      }

      glCtx.clearColor(0, 0, 0, 0);
      glCtx.clear(glCtx.COLOR_BUFFER_BIT);
      glCtx.enable(glCtx.BLEND);
      // Premultiplied alpha blending: gl.ONE, gl.ONE_MINUS_SRC_ALPHA
      glCtx.blendFunc(glCtx.ONE, glCtx.ONE_MINUS_SRC_ALPHA);
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
    };

    resizeCanvas();
    updateParallaxOffset();
    render();

    // Loop controller driven by viewport visibility to guarantee smooth 60fps & low battery drain
    const loop = () => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = null;
        return;
      }
      if (parallaxEnabledRef.current) {
        updateParallaxOffset();
      }
      render();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    const startAnimation = () => {
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(loop);
      }
    };

    const stopAnimation = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    // Start animation loop immediately upon initialization
    startAnimation();

    // IntersectionObserver: Pause rendering when scrolled far out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          resizeCanvas();
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { rootMargin: '250px' }
    );
    observer.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      if (isVisibleRef.current) {
        resizeCanvas();
        render();
      }
    });
    resizeObserver.observe(container);

    const onScrollUpdate = (scrollY: number) => {
      if (!isVisibleRef.current) return;
      const currentTime = performance.now();
      if (lastScrollTimeRef.current > 0) {
        const deltaY = scrollY - lastScrollYRef.current;
        if (Math.abs(deltaY) > 0) {
          scrollOffsetRef.current =
            (scrollOffsetRef.current + deltaY * scrollSensitivityRef.current) % 20.0;
        }
      }
      lastScrollYRef.current = scrollY;
      lastScrollTimeRef.current = currentTime;
      if (parallaxEnabledRef.current) {
        updateParallaxOffset();
      }
    };

    const scrollHandler = () => {
      onScrollUpdate(window.scrollY || window.pageYOffset || 0);
    };

    const lenisScrollHandler = (e: { scroll: number }) => {
      onScrollUpdate(e.scroll);
    };

    lastScrollYRef.current = window.scrollY || window.pageYOffset || 0;
    lastScrollTimeRef.current = performance.now();
    window.addEventListener('scroll', scrollHandler, { passive: true });

    let boundLenis: ReturnType<typeof getLenisInstance> | null = null;
    let lenisPollTimer: ReturnType<typeof setInterval> | null = null;

    const attachLenis = () => {
      const lenis = getLenisInstance();
      if (lenis && !boundLenis) {
        boundLenis = lenis;
        lenis.on('scroll', lenisScrollHandler);
        if (lenisPollTimer) {
          clearInterval(lenisPollTimer);
          lenisPollTimer = null;
        }
      }
    };

    attachLenis();
    if (!boundLenis) {
      lenisPollTimer = setInterval(attachLenis, 250);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else if (isVisibleRef.current) {
        startAnimation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Handle WebGL context lost and restored events gracefully
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      stopAnimation();
    };
    const handleContextRestored = () => {
      resizeCanvas();
      startAnimation();
    };
    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      if (lenisPollTimer) clearInterval(lenisPollTimer);
      if (boundLenis) {
        boundLenis.off('scroll', lenisScrollHandler);
      }
      window.removeEventListener('scroll', scrollHandler);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      stopAnimation();

      if (glRef.current) {
        const glCtx = glRef.current;
        if (bufferRef.current) glCtx.deleteBuffer(bufferRef.current);
        if (programRef.current) glCtx.deleteProgram(programRef.current);
      }
    };
  }, [canvasRef, containerRef, onWebGLUnsupported]);
}
