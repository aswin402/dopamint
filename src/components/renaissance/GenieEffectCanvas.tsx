import React, { useEffect, useRef, useState } from 'react';
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture } from 'ogl';

interface GenieEffectCanvasProps {
  isOpen: boolean;
  onToggle?: () => void;
  className?: string;
}

// Function to draw high-res 2D card texture matching our exact iMessage cards
function drawCardTexture(type: 'card1' | 'card2' | 'card3'): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const dpr = 2;
  const w = type === 'card2' ? 320 : 440;
  const h = type === 'card2' ? 140 : 210;

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  ctx.scale(dpr, dpr);

  // 1. Draw Card Background with Rounded Rect & Amber Border
  const r = 36;
  ctx.fillStyle = '#fdfbf7';
  ctx.strokeStyle = '#eedbc4';
  ctx.lineWidth = 1.5;

  ctx.beginPath();
  ctx.roundRect(1, 1, w - 2, h - 2, r);
  ctx.fill();
  ctx.stroke();

  // Helper to draw an iMessage bubble
  function drawBubble(
    text: string,
    x: number,
    y: number,
    bw: number,
    bh: number,
    side: 'left' | 'right',
    color: string,
    textColor: string
  ) {
    if (!ctx) return;
    ctx.save();
    ctx.fillStyle = color;

    // Bubble body
    const br = 20;
    ctx.beginPath();
    ctx.roundRect(x, y, bw, bh, br);
    ctx.fill();

    // Tail
    ctx.beginPath();
    if (side === 'left') {
      ctx.moveTo(x + 14, y + bh);
      ctx.bezierCurveTo(x + 14, y + bh + 4, x + 7, y + bh + 12, x - 5, y + bh + 14);
      ctx.bezierCurveTo(x + 2, y + bh + 12, x + 10, y + bh + 8, x + 18, y + bh);
    } else {
      ctx.moveTo(x + bw - 14, y + bh);
      ctx.bezierCurveTo(x + bw - 14, y + bh + 4, x + bw - 7, y + bh + 12, x + bw + 5, y + bh + 14);
      ctx.bezierCurveTo(x + bw - 2, y + bh + 12, x + bw - 10, y + bh + 8, x + bw - 18, y + bh);
    }
    ctx.closePath();
    ctx.fill();

    // Text
    ctx.fillStyle = textColor;
    ctx.font = '500 16.5px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + 18, y + bh / 2 + 1);

    ctx.restore();
  }

  // Draw Specific Card Content
  if (type === 'card1') {
    // Green prompt bubble
    drawBubble('why is BTC bid this morning, funding or spot?', 24, 28, 380, 48, 'left', '#d0e8c8', '#263725');
    // Cream reply bubble
    drawBubble('my ETH is up 34% scale.', 150, 102, 250, 44, 'right', '#f4ede4', '#4a2c18');
  } else if (type === 'card2') {
    // Green prompt bubble
    drawBubble('laddered. Stop trailing behind it.', 20, 42, 280, 48, 'left', '#d0e8c8', '#263725');
  } else if (type === 'card3') {
    // Green prompt bubble
    drawBubble('what am I paying in gas this week?', 24, 28, 320, 48, 'left', '#d0e8c8', '#263725');
    // Cream reply bubble
    drawBubble('pay this invoice in USDC.', 170, 102, 230, 44, 'right', '#f4ede4', '#4a2c18');
  }

  return canvas;
}

export const GenieEffectCanvas: React.FC<GenieEffectCanvasProps> = ({
  isOpen,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animStateRef = useRef({ progress: 0, targetProgress: isOpen ? 1 : 0 });

  useEffect(() => {
    animStateRef.current.targetProgress = isOpen ? 1 : 0;
  }, [isOpen]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, dpr: window.devicePixelRatio || 2 });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    container.appendChild(gl.canvas);
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';

    const camera = new Camera(gl, { fov: 45 });
    camera.position.z = 5;
    const scene = new Transform();

    // 60x60 Grid Plane for Smooth macOS Genie Curvature
    const geometry = new Plane(gl, { width: 1, height: 1, widthSegments: 60, heightSegments: 60 });

    const vertexShader = `
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;

      uniform float uProgress; 
      uniform vec2 uStartPos;  
      uniform vec2 uStartScale;
      uniform vec2 uEndPos;    
      uniform vec2 uEndScale;
      uniform vec2 uRadius;
      uniform float uPixelsPerUnit;

      varying vec2 vUv;
      varying vec2 vUnwarpedSize;
      varying float vRadius;

      void main() {
          vUv = uv;

          vUnwarpedSize = mix(uStartScale, uEndScale, uProgress) * uPixelsPerUnit;
          vRadius = mix(uRadius.x, uRadius.y, uProgress);

          float prog = 1.0 - clamp(uProgress, 0.0, 1.0); 

          float slideT = clamp(prog / 0.5, 0.0, 1.0);
          float slideProgress = slideT * slideT * (3.0 - 2.0 * slideT); 

          float transT = clamp((prog - 0.3) / 0.7, 0.0, 1.0);
          float translateProgress = transT * transT * (3.0 - 2.0 * transT); 

          float fullTopY = uEndPos.y + uEndScale.y * 0.5;
          float fullBottomY = uEndPos.y - uEndScale.y * 0.5;
          float dockTopY = uStartPos.y + uStartScale.y * 0.5;
          float dockBottomY = uStartPos.y - uStartScale.y * 0.5;

          float verticalDist = dockTopY - fullTopY;
          float translationY = translateProgress * verticalDist;

          float curTopEdgeY = fullTopY + translationY;
          float curBottomEdgeY = max(fullBottomY + translationY, dockBottomY);

          float currentY = mix(curBottomEdgeY, curTopEdgeY, uv.y);

          float fullLeftX = uEndPos.x - uEndScale.x * 0.5;
          float fullRightX = uEndPos.x + uEndScale.x * 0.5;
          float dockLeftX = uStartPos.x - uStartScale.x * 0.5;
          float dockRightX = uStartPos.x + uStartScale.x * 0.5;

          float bezierBottomLeftX = mix(fullLeftX, dockLeftX, slideProgress);
          float bezierBottomRightX = mix(fullRightX, dockRightX, slideProgress);

          float xMin = fullLeftX;
          float xMax = fullRightX;

          if (currentY <= dockTopY) {
              xMin = bezierBottomLeftX;
              xMax = bezierBottomRightX;
          } else if (currentY < fullTopY) {
              float normalizedY = (currentY - dockTopY) / (fullTopY - dockTopY);
              float eased = normalizedY < 0.5 
                  ? 4.0 * normalizedY * normalizedY * normalizedY 
                  : 1.0 - pow(-2.0 * normalizedY + 2.0, 3.0) / 2.0;

              xMin = mix(bezierBottomLeftX, fullLeftX, eased);
              xMax = mix(bezierBottomRightX, fullRightX, eased);
          }

          float currentX = mix(xMin, xMax, uv.x);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(currentX, currentY, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform sampler2D tMap;
      uniform float uAlpha;
      uniform vec2 uImageRes;
      
      varying vec2 vUv;
      varying vec2 vUnwarpedSize;
      varying float vRadius;

      float udRoundBox(vec2 p, vec2 b, float r) {
          return length(max(abs(p) - b + r, 0.0)) - r;
      }

      void main() {
          vec2 pxPos = (vUv - 0.5) * vUnwarpedSize;
          vec2 halfSize = vUnwarpedSize * 0.5;
          float d = udRoundBox(pxPos, halfSize, vRadius);
          float alphaMask = 1.0 - smoothstep(0.0, 1.5, d);
          
          vec4 tex = texture2D(tMap, vUv);
          gl_FragColor = vec4(tex.rgb, tex.a * uAlpha * alphaMask);
      }
    `;

    // Create 3 Cards with dynamic Canvas Textures
    const cards = [
      { id: 'card1', canvas: drawCardTexture('card1'), endPosRatio: [-0.34, 0.22], endScaleRatio: [0.42, 0.35] },
      { id: 'card2', canvas: drawCardTexture('card2'), endPosRatio: [0.0, 0.34], endScaleRatio: [0.28, 0.23] },
      { id: 'card3', canvas: drawCardTexture('card3'), endPosRatio: [0.34, -0.06], endScaleRatio: [0.42, 0.35] },
    ];

    const cardMeshes = cards.map((c) => {
      const texture = new Texture(gl, { image: c.canvas, generateMipmaps: true });
      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          tMap: { value: texture },
          uAlpha: { value: 1 },
          uProgress: { value: 0 },
          uStartPos: { value: [0, 0] },
          uStartScale: { value: [0.1, 0.1] },
          uEndPos: { value: [0, 0] },
          uEndScale: { value: [1, 1] },
          uRadius: { value: [12, 34] },
          uPixelsPerUnit: { value: 1 },
          uImageRes: { value: [c.canvas.width, c.canvas.height] },
        },
        transparent: true,
      });

      const mesh = new Mesh(gl, { geometry, program });
      mesh.setParent(scene);
      return { ...c, program, mesh };
    });

    function updatePositions() {
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      renderer.setSize(cRect.width, cRect.height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });

      const fov = (45 * Math.PI) / 180;
      const wHeight = 2 * Math.tan(fov / 2) * camera.position.z;
      const wWidth = wHeight * (cRect.width / cRect.height);
      const pixelsPerUnit = cRect.height / wHeight;

      // Start Position: Bottom Center Stone Pedestal (x: 0, y: near bottom)
      const startX = 0;
      const startY = -wHeight * 0.42;
      const startScaleX = (80 / cRect.width) * wWidth;
      const startScaleY = (80 / cRect.height) * wHeight;

      cardMeshes.forEach((item) => {
        item.program.uniforms.uPixelsPerUnit.value = pixelsPerUnit;
        item.program.uniforms.uStartPos.value = [startX, startY];
        item.program.uniforms.uStartScale.value = [startScaleX, startScaleY];

        const endX = item.endPosRatio[0] * wWidth;
        const endY = item.endPosRatio[1] * wHeight;
        const endScaleX = item.endScaleRatio[0] * wWidth;
        const endScaleY = item.endScaleRatio[1] * wHeight;

        item.program.uniforms.uEndPos.value = [endX, endY];
        item.program.uniforms.uEndScale.value = [endScaleX, endScaleY];
      });
    }

    const resizeObserver = new ResizeObserver(updatePositions);
    resizeObserver.observe(container);
    updatePositions();

    let rafId: number;
    function renderLoop() {
      const state = animStateRef.current;
      const diff = state.targetProgress - state.progress;
      state.progress += diff * 0.08;

      cardMeshes.forEach((item, index) => {
        // Slight stagger for each card
        const delayFactor = index * 0.08;
        const p = Math.max(0, Math.min(1, (state.progress - delayFactor) / (1 - delayFactor)));
        item.program.uniforms.uProgress.value = p;
        item.program.uniforms.uAlpha.value = p > 0.01 ? 1 : 0;
      });

      renderer.render({ scene, camera });
      rafId = requestAnimationFrame(renderLoop);
    }

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-30 ${className}`}
    />
  );
};
