import React, { useEffect, useRef } from 'react';

export interface BurnTransitionProps {
  color?: string;
  transitionColor?: string;
  noiseScale?: number;
  noiseIntensity?: number;
  scrollSensitivity?: number;
  baseAnimationSpeed?: number;
  edgeSoftness?: number;
  bloomIntensity?: number;
  bloomRadius?: number;
  parallaxEnabled?: boolean;
  inverted?: boolean;
  movement?: {
    horizontal?: 'left' | 'center' | 'right';
    vertical?: number;
  };
  style?: React.CSSProperties;
  className?: string;
}

// Color parsing utility functions
function parseColorToRgba(input?: string): { r: number; g: number; b: number; a: number } {
  if (!input || input.trim() === '') return { r: 1, g: 1, b: 1, a: 1 };
  const str = input.trim();

  // rgba(r, g, b, a)
  const rgbaMatch = str.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i
  );
  if (rgbaMatch) {
    const r = Math.max(0, Math.min(255, parseFloat(rgbaMatch[1]))) / 255;
    const g = Math.max(0, Math.min(255, parseFloat(rgbaMatch[2]))) / 255;
    const b = Math.max(0, Math.min(255, parseFloat(rgbaMatch[3]))) / 255;
    const a = rgbaMatch[4] !== undefined ? Math.max(0, Math.min(1, parseFloat(rgbaMatch[4]))) : 1;
    return { r, g, b, a };
  }

  // hex
  const hex = str.replace(/^#/, '');
  if (hex.length === 8) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
      a: parseInt(hex.slice(6, 8), 16) / 255,
    };
  }
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
      a: 1,
    };
  }
  if (hex.length === 3) {
    return {
      r: parseInt(hex[0] + hex[0], 16) / 255,
      g: parseInt(hex[1] + hex[1], 16) / 255,
      b: parseInt(hex[2] + hex[2], 16) / 255,
      a: 1,
    };
  }
  return { r: 1, g: 1, b: 1, a: 1 };
}

function mapLinear(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  if (inMax === inMin) return outMin;
  const t = (value - inMin) / (inMax - inMin);
  return outMin + t * (outMax - outMin);
}

function mapNoiseScale(ui: number) {
  if (ui >= 1) return ui;
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0.15, 3.5);
}
function mapNoiseIntensity(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0, 0.85);
}
function mapScrollSensitivity(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0, 0.01);
}
function mapBaseAnimationSpeed(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0, 0.1);
}
function mapEdgeSoftness(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0.015, 0.08);
}
function mapBloomRadius(ui: number) {
  return mapLinear(Math.max(0, Math.min(1, ui)), 0, 1, 0.02, 0.18);
}

export const BurnTransition: React.FC<BurnTransitionProps> = ({
  color = '#D9D6CA',
  transitionColor = '#FFFFFF',
  noiseScale = 2.5,
  noiseIntensity = 0.52,
  scrollSensitivity = 0.015,
  baseAnimationSpeed = 0.08,
  edgeSoftness = 0.38,
  bloomIntensity = 0.75,
  bloomRadius = 0.35,
  parallaxEnabled = true,
  inverted = false,
  movement = { horizontal: 'center', vertical: 0.5 },
  style,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isVisibleRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);

  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const bufferRef = useRef<WebGLBuffer | null>(null);

  const colorRgba = parseColorToRgba(color);
  const transitionColorRgba = parseColorToRgba(transitionColor || color);

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
  const bloomIntensityRef = useRef(bloomIntensity);
  const bloomRadiusRef = useRef(mapBloomRadius(bloomRadius));
  const parallaxEnabledRef = useRef(parallaxEnabled);

  const horizontalMovementValue =
    movement?.horizontal === 'left' ? 1 : movement?.horizontal === 'right' ? -1 : 0;
  const movementHorizontalRef = useRef(horizontalMovementValue);
  const movementVerticalRef = useRef(movement?.vertical ?? 0.5);
  const invertedRef = useRef(inverted);

  const scrollOffsetRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const baseTimeRef = useRef(0);
  const startTimeRef = useRef(0);
  const parallaxOffsetRef = useRef(0);
  const canvasSizeRef = useRef({ width: 0, height: 0 });

  // Bloom framebuffers & programs
  const extractProgramRef = useRef<WebGLProgram | null>(null);
  const blurProgramRef = useRef<WebGLProgram | null>(null);
  const compositeProgramRef = useRef<WebGLProgram | null>(null);
  const framebufferRef = useRef<WebGLFramebuffer | null>(null);
  const sceneTextureRef = useRef<WebGLTexture | null>(null);
  const extractFramebufferRef = useRef<WebGLFramebuffer | null>(null);
  const extractTextureRef = useRef<WebGLTexture | null>(null);
  const blurFramebuffer1Ref = useRef<WebGLFramebuffer | null>(null);
  const blurTexture1Ref = useRef<WebGLTexture | null>(null);
  const blurFramebuffer2Ref = useRef<WebGLFramebuffer | null>(null);
  const blurTexture2Ref = useRef<WebGLTexture | null>(null);
  const bloomDownsampleRef = useRef(2);

  // Update dynamic values when props change
  useEffect(() => {
    const c = parseColorToRgba(color);
    colorRef.current = [c.r, c.g, c.b];
  }, [color]);

  useEffect(() => {
    const tc = parseColorToRgba(transitionColor || color);
    transitionColorRef.current = [tc.r, tc.g, tc.b];
  }, [transitionColor, color]);

  useEffect(() => {
    invertedRef.current = inverted;
    noiseScaleRef.current = mapNoiseScale(noiseScale);
    noiseIntensityRef.current = mapNoiseIntensity(noiseIntensity);
    scrollSensitivityRef.current = mapScrollSensitivity(scrollSensitivity);
    baseAnimationSpeedRef.current = mapBaseAnimationSpeed(baseAnimationSpeed);
    edgeSoftnessRef.current = mapEdgeSoftness(edgeSoftness);
    bloomIntensityRef.current = bloomIntensity;
    bloomRadiusRef.current = mapBloomRadius(bloomRadius);
    parallaxEnabledRef.current = parallaxEnabled;
    movementHorizontalRef.current =
      movement?.horizontal === 'left' ? 1 : movement?.horizontal === 'right' ? -1 : 0;
    movementVerticalRef.current = movement?.vertical ?? 0.5;
  }, [
    inverted,
    noiseScale,
    noiseIntensity,
    scrollSensitivity,
    baseAnimationSpeed,
    edgeSoftness,
    bloomIntensity,
    bloomRadius,
    parallaxEnabled,
    movement,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    if (!gl) return;
    glRef.current = gl;

    // Helper functions
    const createShader = (glCtx: WebGLRenderingContext, type: number, source: string) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
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
        glCtx.deleteProgram(program);
        return null;
      }
      return program;
    };

    const createFramebufferTexture = (
      glCtx: WebGLRenderingContext,
      width: number,
      height: number
    ) => {
      const texture = glCtx.createTexture();
      if (!texture) return { framebuffer: null, texture: null };
      glCtx.bindTexture(glCtx.TEXTURE_2D, texture);
      glCtx.texImage2D(
        glCtx.TEXTURE_2D,
        0,
        glCtx.RGBA,
        width,
        height,
        0,
        glCtx.RGBA,
        glCtx.UNSIGNED_BYTE,
        null
      );
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MIN_FILTER, glCtx.LINEAR);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MAG_FILTER, glCtx.LINEAR);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_S, glCtx.CLAMP_TO_EDGE);
      glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_T, glCtx.CLAMP_TO_EDGE);

      const framebuffer = glCtx.createFramebuffer();
      if (!framebuffer) return { framebuffer: null, texture };
      glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, framebuffer);
      glCtx.framebufferTexture2D(
        glCtx.FRAMEBUFFER,
        glCtx.COLOR_ATTACHMENT0,
        glCtx.TEXTURE_2D,
        texture,
        0
      );
      glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, null);
      return { framebuffer, texture };
    };

    // Shaders definition
    const vertexShader = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = 0.5 * (a_position + 1.0);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      varying vec2 v_uv;
      uniform vec3 u_color;
      uniform vec3 u_transition_color;
      uniform float u_noise_scale;
      uniform float u_noise_intensity;
      uniform float u_scroll_offset;
      uniform float u_edge_softness;
      uniform float u_grain_scale;
      uniform float u_movement_horizontal;
      uniform float u_movement_vertical;
      uniform float u_parallax_offset;
      uniform float u_aspect_ratio;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      float turbulence(vec2 st) {
        float value = 0.0;
        float amplitude = 0.55;
        for (int i = 0; i < 5; i++) {
          value += amplitude * abs(noise(st) * 2.0 - 1.0);
          st *= 2.15;
          amplitude *= 0.52;
        }
        return value;
      }

      float detailedNoise(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amplitude * noise(st);
          st *= 2.2;
          amplitude *= 0.45;
        }
        return value;
      }

      void main() {
        float baseLine = 0.5 + u_parallax_offset;
        float horizontalOffset = u_scroll_offset * u_movement_horizontal;
        float verticalOffset = u_scroll_offset * u_movement_vertical;

        vec2 noiseCoord = vec2(
          v_uv.x * u_aspect_ratio * u_noise_scale + horizontalOffset,
          v_uv.y * 2.5 + verticalOffset * 0.6
        );
        float edgeFbm = fbm(noiseCoord);
        float edgeTurb = turbulence(noiseCoord * 1.2);
        float edgeNoise = mix(edgeFbm, edgeTurb, 0.38);
        float mainEdge = baseLine + (edgeNoise - 0.5) * u_noise_intensity * 1.05;

        vec2 thicknessNoiseCoord = vec2(
          v_uv.x * u_aspect_ratio * u_noise_scale * 2.3 + horizontalOffset * 0.7,
          v_uv.y * 2.0 + verticalOffset * 0.4 + 100.0
        );
        float thicknessNoise = fbm(thicknessNoiseCoord);
        float minThickness = u_edge_softness * 0.35;
        float maxThickness = u_edge_softness * 1.0;
        float localThickness = mix(minThickness, maxThickness, thicknessNoise);

        float lowerBound = mainEdge - localThickness * 0.4;
        float upperBound = mainEdge + localThickness * 0.6;

        vec2 grainCoord = vec2(
          v_uv.x * u_aspect_ratio * u_grain_scale * 3.0 + horizontalOffset * 0.5,
          v_uv.y * u_grain_scale * 3.0 + verticalOffset * 0.3
        );
        float grain = detailedNoise(grainCoord);

        vec2 fiberCoord = vec2(
          v_uv.x * u_aspect_ratio * u_grain_scale * 8.0 + horizontalOffset * 0.3,
          v_uv.y * u_grain_scale * 2.0 + verticalOffset * 0.2
        );
        float fiberNoise = noise(fiberCoord);
        float combinedGrain = grain * 0.6 + fiberNoise * 0.4;

        float rimWidth = max(localThickness * 2.0, 0.035);
        float lowerBound = mainEdge - rimWidth * 0.55;
        float upperBound = mainEdge + rimWidth * 0.45;

        if (v_uv.y < lowerBound) {
          gl_FragColor = vec4(u_color, 1.0);
        } else if (v_uv.y < upperBound) {
          float t = (v_uv.y - lowerBound) / max(upperBound - lowerBound, 0.0001);
          float fiberAlpha = 1.0 - smoothstep(0.35 + combinedGrain * 0.28, 0.95, t);
          vec3 edgeCol = mix(u_color, u_transition_color, smoothstep(0.0, 0.5, t));
          gl_FragColor = vec4(edgeCol, fiberAlpha);
        } else {
          discard;
        }
      }
    `;

    const extractFragmentShader = `
      precision mediump float;
      varying vec2 v_uv;
      uniform sampler2D u_texture;
      uniform vec3 u_transition_color;
      uniform vec3 u_base_color;
      void main() {
        vec4 pixel = texture2D(u_texture, v_uv);
        float distToTransition = length(pixel.rgb - u_transition_color);
        float distToBase = length(pixel.rgb - u_base_color);
        float isTransition = 1.0 - smoothstep(0.0, 0.5, distToTransition);
        float notBase = smoothstep(0.0, 0.3, distToBase);
        float mask = pow(isTransition * notBase * pixel.a, 0.8);
        gl_FragColor = vec4(1.0, 1.0, 1.0, mask);
      }
    `;

    const blurFragmentShader = `
      precision mediump float;
      varying vec2 v_uv;
      uniform sampler2D u_texture;
      uniform vec2 u_direction;
      uniform vec2 u_resolution;
      uniform float u_radius;
      void main() {
        float blur_size = u_radius * 12.0;
        float alpha = 0.0;
        float totalWeight = 0.0;
        for (int i = -6; i <= 6; i++) {
          float offset = float(i);
          float weight = exp(-0.5 * (offset * offset) / 4.0);
          vec2 sampleOffset = u_direction * (offset * blur_size) / u_resolution;
          float sampleAlpha = texture2D(u_texture, v_uv + sampleOffset).a;
          alpha += sampleAlpha * weight;
          totalWeight += weight;
        }
        alpha = totalWeight > 0.0 ? alpha / totalWeight : 0.0;
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
      }
    `;

    const compositeFragmentShader = `
      precision mediump float;
      varying vec2 v_uv;
      uniform sampler2D u_scene;
      uniform sampler2D u_bloom;
      uniform float u_bloom_intensity;
      uniform vec3 u_transition_color;
      void main() {
        vec4 scene = texture2D(u_scene, v_uv);
        vec4 bloom = texture2D(u_bloom, v_uv);
        float bloomStrength = bloom.a * u_bloom_intensity;
        vec3 bloomColor = u_transition_color * bloomStrength * 2.0;

        if (scene.a < 0.001) {
          float glowAlpha = bloomStrength * 1.5;
          gl_FragColor = vec4(u_transition_color, glowAlpha);
        } else {
          vec3 result = min(scene.rgb + bloomColor, vec3(1.0));
          gl_FragColor = vec4(result, scene.a);
        }
      }
    `;

    const vShaderObj = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fShaderObj = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vShaderObj || !fShaderObj) return;

    const prog = createProgram(gl, vShaderObj, fShaderObj);
    if (!prog) return;
    programRef.current = prog;

    const extFShaderObj = createShader(gl, gl.FRAGMENT_SHADER, extractFragmentShader);
    if (extFShaderObj) {
      extractProgramRef.current = createProgram(gl, vShaderObj, extFShaderObj);
    }

    const blurFShaderObj = createShader(gl, gl.FRAGMENT_SHADER, blurFragmentShader);
    if (blurFShaderObj) {
      blurProgramRef.current = createProgram(gl, vShaderObj, blurFShaderObj);
    }

    const compFShaderObj = createShader(gl, gl.FRAGMENT_SHADER, compositeFragmentShader);
    if (compFShaderObj) {
      compositeProgramRef.current = createProgram(gl, vShaderObj, compFShaderObj);
    }

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    if (!buffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    bufferRef.current = buffer;

    // Create initial framebuffers
    const initialWidth = 256;
    const initialHeight = 256;
    const { framebuffer: fb1, texture: tex1 } = createFramebufferTexture(gl, initialWidth, initialHeight);
    framebufferRef.current = fb1;
    sceneTextureRef.current = tex1;

    const { framebuffer: fbExtract, texture: texExtract } = createFramebufferTexture(gl, initialWidth, initialHeight);
    extractFramebufferRef.current = fbExtract;
    extractTextureRef.current = texExtract;

    const { framebuffer: fb2, texture: tex2 } = createFramebufferTexture(gl, initialWidth, initialHeight);
    blurFramebuffer1Ref.current = fb2;
    blurTexture1Ref.current = tex2;

    const { framebuffer: fb3, texture: tex3 } = createFramebufferTexture(gl, initialWidth, initialHeight);
    blurFramebuffer2Ref.current = fb3;
    blurTexture2Ref.current = tex3;

    startTimeRef.current = performance.now();

    const resizeCanvas = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
      const newWidth = Math.max(1, Math.floor(rect.width * dpr));
      const newHeight = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width === newWidth && canvas.height === newHeight) return;
      canvas.width = newWidth;
      canvas.height = newHeight;
      canvasSizeRef.current = { width: newWidth, height: newHeight };

      if (gl) {
        gl.viewport(0, 0, newWidth, newHeight);
        const downsample = bloomDownsampleRef.current;
        const bloomWidth = Math.floor(newWidth / downsample);
        const bloomHeight = Math.floor(newHeight / downsample);

        if (sceneTextureRef.current) {
          gl.bindTexture(gl.TEXTURE_2D, sceneTextureRef.current);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, newWidth, newHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        if (extractTextureRef.current) {
          gl.bindTexture(gl.TEXTURE_2D, extractTextureRef.current);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, bloomWidth, bloomHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        if (blurTexture1Ref.current) {
          gl.bindTexture(gl.TEXTURE_2D, blurTexture1Ref.current);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, bloomWidth, bloomHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        if (blurTexture2Ref.current) {
          gl.bindTexture(gl.TEXTURE_2D, blurTexture2Ref.current);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, bloomWidth, bloomHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
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
      const rawOffset = 1 - progress - 0.5;
      parallaxOffsetRef.current = invertedRef.current ? -rawOffset : rawOffset;
    };

    const renderScene = (targetFramebuffer: WebGLFramebuffer | null) => {
      const glCtx = glRef.current;
      const prog = programRef.current;
      const buf = bufferRef.current;
      if (!glCtx || !prog || !buf) return;

      glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, targetFramebuffer);
      glCtx.viewport(0, 0, canvasSizeRef.current.width, canvasSizeRef.current.height);
      glCtx.useProgram(prog);
      glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);

      const posLoc = glCtx.getAttribLocation(prog, 'a_position');
      glCtx.enableVertexAttribArray(posLoc);
      glCtx.vertexAttribPointer(posLoc, 2, glCtx.FLOAT, false, 0, 0);

      const colorLoc = glCtx.getUniformLocation(prog, 'u_color');
      const [r, g, b] = colorRef.current;
      glCtx.uniform3f(colorLoc, r, g, b);

      const trLoc = glCtx.getUniformLocation(prog, 'u_transition_color');
      if (trLoc) {
        const [tr, tg, tb] = transitionColorRef.current;
        glCtx.uniform3f(trLoc, tr, tg, tb);
      }

      const nsLoc = glCtx.getUniformLocation(prog, 'u_noise_scale');
      if (nsLoc) glCtx.uniform1f(nsLoc, noiseScaleRef.current);

      const niLoc = glCtx.getUniformLocation(prog, 'u_noise_intensity');
      if (niLoc) glCtx.uniform1f(niLoc, noiseIntensityRef.current);

      const currentTime = performance.now();
      const elapsedSeconds = (currentTime - startTimeRef.current) / 1000;
      baseTimeRef.current = elapsedSeconds * baseAnimationSpeedRef.current;

      const soLoc = glCtx.getUniformLocation(prog, 'u_scroll_offset');
      if (soLoc) glCtx.uniform1f(soLoc, baseTimeRef.current + scrollOffsetRef.current);

      const esLoc = glCtx.getUniformLocation(prog, 'u_edge_softness');
      if (esLoc) glCtx.uniform1f(esLoc, edgeSoftnessRef.current);

      const gsLoc = glCtx.getUniformLocation(prog, 'u_grain_scale');
      if (gsLoc) glCtx.uniform1f(gsLoc, 80.0);

      const mhLoc = glCtx.getUniformLocation(prog, 'u_movement_horizontal');
      if (mhLoc) glCtx.uniform1f(mhLoc, movementHorizontalRef.current);

      const mvLoc = glCtx.getUniformLocation(prog, 'u_movement_vertical');
      if (mvLoc) glCtx.uniform1f(mvLoc, movementVerticalRef.current);

      const poLoc = glCtx.getUniformLocation(prog, 'u_parallax_offset');
      if (poLoc) glCtx.uniform1f(poLoc, parallaxOffsetRef.current);

      const arLoc = glCtx.getUniformLocation(prog, 'u_aspect_ratio');
      if (arLoc) {
        const w = canvasSizeRef.current.width;
        const h = canvasSizeRef.current.height;
        glCtx.uniform1f(arLoc, h > 0 ? w / h : 1);
      }

      glCtx.clearColor(0, 0, 0, 0);
      glCtx.clear(glCtx.COLOR_BUFFER_BIT);
      glCtx.enable(glCtx.BLEND);
      glCtx.blendFunc(glCtx.SRC_ALPHA, glCtx.ONE_MINUS_SRC_ALPHA);
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
    };

    const renderExtract = (sourceTex: WebGLTexture, targetFb: WebGLFramebuffer) => {
      const glCtx = glRef.current;
      const prog = extractProgramRef.current;
      const buf = bufferRef.current;
      if (!glCtx || !prog || !buf) return;

      const downsample = bloomDownsampleRef.current;
      const bloomWidth = Math.floor(canvasSizeRef.current.width / downsample);
      const bloomHeight = Math.floor(canvasSizeRef.current.height / downsample);

      glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, targetFb);
      glCtx.viewport(0, 0, bloomWidth, bloomHeight);
      glCtx.useProgram(prog);
      glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);

      const posLoc = glCtx.getAttribLocation(prog, 'a_position');
      glCtx.enableVertexAttribArray(posLoc);
      glCtx.vertexAttribPointer(posLoc, 2, glCtx.FLOAT, false, 0, 0);

      const texLoc = glCtx.getUniformLocation(prog, 'u_texture');
      glCtx.activeTexture(glCtx.TEXTURE0);
      glCtx.bindTexture(glCtx.TEXTURE_2D, sourceTex);
      glCtx.uniform1i(texLoc, 0);

      const trLoc = glCtx.getUniformLocation(prog, 'u_transition_color');
      if (trLoc) {
        const [tr, tg, tb] = transitionColorRef.current;
        glCtx.uniform3f(trLoc, tr, tg, tb);
      }

      const baseLoc = glCtx.getUniformLocation(prog, 'u_base_color');
      if (baseLoc) {
        const [r, g, b] = colorRef.current;
        glCtx.uniform3f(baseLoc, r, g, b);
      }

      glCtx.clearColor(0, 0, 0, 0);
      glCtx.clear(glCtx.COLOR_BUFFER_BIT);
      glCtx.disable(glCtx.BLEND);
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
    };

    const renderBlur = (
      sourceTex: WebGLTexture,
      targetFb: WebGLFramebuffer,
      direction: [number, number]
    ) => {
      const glCtx = glRef.current;
      const prog = blurProgramRef.current;
      const buf = bufferRef.current;
      if (!glCtx || !prog || !buf) return;

      const downsample = bloomDownsampleRef.current;
      const bloomWidth = Math.floor(canvasSizeRef.current.width / downsample);
      const bloomHeight = Math.floor(canvasSizeRef.current.height / downsample);

      glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, targetFb);
      glCtx.viewport(0, 0, bloomWidth, bloomHeight);
      glCtx.useProgram(prog);
      glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);

      const posLoc = glCtx.getAttribLocation(prog, 'a_position');
      glCtx.enableVertexAttribArray(posLoc);
      glCtx.vertexAttribPointer(posLoc, 2, glCtx.FLOAT, false, 0, 0);

      const texLoc = glCtx.getUniformLocation(prog, 'u_texture');
      glCtx.activeTexture(glCtx.TEXTURE0);
      glCtx.bindTexture(glCtx.TEXTURE_2D, sourceTex);
      glCtx.uniform1i(texLoc, 0);

      const dirLoc = glCtx.getUniformLocation(prog, 'u_direction');
      glCtx.uniform2f(dirLoc, direction[0], direction[1]);

      const resLoc = glCtx.getUniformLocation(prog, 'u_resolution');
      glCtx.uniform2f(resLoc, bloomWidth, bloomHeight);

      const radLoc = glCtx.getUniformLocation(prog, 'u_radius');
      glCtx.uniform1f(radLoc, bloomRadiusRef.current);

      glCtx.clearColor(0, 0, 0, 0);
      glCtx.clear(glCtx.COLOR_BUFFER_BIT);
      glCtx.disable(glCtx.BLEND);
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
    };

    const renderComposite = (sceneTex: WebGLTexture, bloomTex: WebGLTexture) => {
      const glCtx = glRef.current;
      const prog = compositeProgramRef.current;
      const buf = bufferRef.current;
      if (!glCtx || !prog || !buf) return;

      glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, null);
      glCtx.viewport(0, 0, canvasSizeRef.current.width, canvasSizeRef.current.height);
      glCtx.useProgram(prog);
      glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);

      const posLoc = glCtx.getAttribLocation(prog, 'a_position');
      glCtx.enableVertexAttribArray(posLoc);
      glCtx.vertexAttribPointer(posLoc, 2, glCtx.FLOAT, false, 0, 0);

      glCtx.activeTexture(glCtx.TEXTURE0);
      glCtx.bindTexture(glCtx.TEXTURE_2D, sceneTex);
      const sceneLoc = glCtx.getUniformLocation(prog, 'u_scene');
      glCtx.uniform1i(sceneLoc, 0);

      glCtx.activeTexture(glCtx.TEXTURE1);
      glCtx.bindTexture(glCtx.TEXTURE_2D, bloomTex);
      const bloomLoc = glCtx.getUniformLocation(prog, 'u_bloom');
      glCtx.uniform1i(bloomLoc, 1);

      const intLoc = glCtx.getUniformLocation(prog, 'u_bloom_intensity');
      glCtx.uniform1f(intLoc, bloomIntensityRef.current);

      const trLoc = glCtx.getUniformLocation(prog, 'u_transition_color');
      if (trLoc) {
        const [tr, tg, tb] = transitionColorRef.current;
        glCtx.uniform3f(trLoc, tr, tg, tb);
      }

      glCtx.clearColor(0, 0, 0, 0);
      glCtx.clear(glCtx.COLOR_BUFFER_BIT);
      glCtx.enable(glCtx.BLEND);
      glCtx.blendFunc(glCtx.SRC_ALPHA, glCtx.ONE_MINUS_SRC_ALPHA);
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
    };

    const render = () => {
      const glCtx = glRef.current;
      if (!glCtx || !programRef.current) return;

      const hasBloom =
        bloomIntensityRef.current > 0 &&
        framebufferRef.current &&
        sceneTextureRef.current &&
        blurFramebuffer1Ref.current &&
        blurTexture1Ref.current &&
        blurFramebuffer2Ref.current &&
        blurTexture2Ref.current &&
        blurProgramRef.current &&
        compositeProgramRef.current &&
        extractProgramRef.current &&
        extractFramebufferRef.current &&
        extractTextureRef.current;

      if (hasBloom) {
        renderScene(framebufferRef.current);
        renderExtract(sceneTextureRef.current!, extractFramebufferRef.current!);
        renderBlur(extractTextureRef.current!, blurFramebuffer1Ref.current!, [1, 0]);
        renderBlur(blurTexture1Ref.current!, blurFramebuffer2Ref.current!, [0, 1]);
        renderComposite(sceneTextureRef.current!, blurTexture2Ref.current!);
      } else {
        renderScene(null);
      }
    };

    resizeCanvas();
    updateParallaxOffset();
    render();

    // Loop controller driven by viewport visibility to ensure zero lag & low memory
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

    // IntersectionObserver: Only render when visible in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          resizeCanvas();
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { rootMargin: '100px' }
    );
    observer.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      if (isVisibleRef.current) {
        resizeCanvas();
        render();
      }
    });
    resizeObserver.observe(container);

    const scrollHandler = () => {
      if (!isVisibleRef.current) return;
      const currentScrollY = window.scrollY || window.pageYOffset;
      const currentTime = performance.now();
      if (lastScrollTimeRef.current > 0) {
        const deltaY = currentScrollY - lastScrollYRef.current;
        const deltaTime = currentTime - lastScrollTimeRef.current;
        if (deltaTime > 0 && Math.abs(deltaY) > 0) {
          scrollOffsetRef.current += deltaY * scrollSensitivityRef.current;
        }
      }
      lastScrollYRef.current = currentScrollY;
      lastScrollTimeRef.current = currentTime;
      if (parallaxEnabledRef.current) {
        updateParallaxOffset();
      }
    };

    lastScrollYRef.current = window.scrollY || window.pageYOffset;
    lastScrollTimeRef.current = performance.now();
    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('scroll', scrollHandler);
      stopAnimation();

      if (glRef.current) {
        const glCtx = glRef.current;
        if (bufferRef.current) glCtx.deleteBuffer(bufferRef.current);
        if (programRef.current) glCtx.deleteProgram(programRef.current);
        if (extractProgramRef.current) glCtx.deleteProgram(extractProgramRef.current);
        if (blurProgramRef.current) glCtx.deleteProgram(blurProgramRef.current);
        if (compositeProgramRef.current) glCtx.deleteProgram(compositeProgramRef.current);
        if (framebufferRef.current) glCtx.deleteFramebuffer(framebufferRef.current);
        if (sceneTextureRef.current) glCtx.deleteTexture(sceneTextureRef.current);
        if (extractFramebufferRef.current) glCtx.deleteFramebuffer(extractFramebufferRef.current);
        if (extractTextureRef.current) glCtx.deleteTexture(extractTextureRef.current);
        if (blurFramebuffer1Ref.current) glCtx.deleteFramebuffer(blurFramebuffer1Ref.current);
        if (blurTexture1Ref.current) glCtx.deleteTexture(blurTexture1Ref.current);
        if (blurFramebuffer2Ref.current) glCtx.deleteFramebuffer(blurFramebuffer2Ref.current);
        if (blurTexture2Ref.current) glCtx.deleteTexture(blurTexture2Ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        ...(inverted ? { transform: 'scaleY(-1)' } : {}),
      }}
      className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};
