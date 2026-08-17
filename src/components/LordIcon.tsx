import { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';
import { useThemeStore } from '@/store/useThemeStore';

interface LordIconProps {
  src: string;
  size?: number;
  trigger?: 'hover' | 'click' | 'loop';
  colors?: string; // e.g. "primary:currentColor,secondary:var(--color-primary)"
  className?: string;
  delay?: number;
}

// Convert any browser-resolved CSS color string (oklch, color(), hsl, rgb) to hex format using a 1x1 canvas
function resolveToHex(colorStr: string, container: HTMLElement): string {
  // 1. Let the browser resolve the color (handles currentColor and CSS variables)
  const temp = document.createElement('div');
  temp.style.color = colorStr;
  container.appendChild(temp);
  const computedColor = window.getComputedStyle(temp).color;
  container.removeChild(temp);

  // 2. Use a canvas to convert the resolved color value to sRGB
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '#000000';

  ctx.fillStyle = computedColor;
  ctx.fillRect(0, 0, 1, 1);

  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;

  // 3. Format as Hex
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function LordIcon({ 
  src, 
  size = 32, 
  trigger = 'hover', 
  colors = 'primary:currentColor,secondary:var(--color-primary)', 
  className, 
  delay = 0 
}: LordIconProps) {
  const playerRef = useRef<Player>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [iconData, setIconData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [resolvedColors, setResolvedColors] = useState<string | undefined>(undefined);
  
  // Hook into theme store to trigger re-renders on theme toggle
  const { theme } = useThemeStore();

  useEffect(() => {
    setIsLoading(true);
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setIconData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load lordicon from url:', src, err);
        setIsLoading(false);
      });
  }, [src]);

  // Resolve CSS color variables and currentColors dynamically to HEX
  useEffect(() => {
    if (!colors || isLoading || !containerRef.current) {
      setResolvedColors(colors);
      return;
    }

    const container = containerRef.current;
    
    // We add a tiny delay to ensure ThemeProvider has updated the HTML class list and variables in the DOM tree
    const timer = setTimeout(() => {
      const parts = colors.split(',');
      const resolvedParts = parts.map((part) => {
        const [key, value] = part.split(':');
        if (!key || !value) return part;

        const hexColor = resolveToHex(value.trim(), container);
        return `${key}:${hexColor}`;
      });

      setResolvedColors(resolvedParts.join(','));
    }, 50); // 50ms delay is enough to let the DOM class rewrite commit

    return () => clearTimeout(timer);
  }, [colors, isLoading, theme]);

  useEffect(() => {
    if (!isLoading && iconData && trigger === 'loop') {
      const timer = setTimeout(() => {
        playerRef.current?.play();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isLoading, iconData, trigger, delay]);

  const handleMouseEnter = () => {
    if (trigger === 'hover' && !isLoading && playerRef.current) {
      playerRef.current.playFromBeginning();
    }
  };

  const handleClick = () => {
    if (trigger === 'click' && !isLoading && playerRef.current) {
      playerRef.current.playFromBeginning();
    }
  };

  if (isLoading || !iconData) {
    return (
      <div 
        style={{ width: size, height: size }} 
        className={`inline-flex items-center justify-center rounded-full bg-muted/20 animate-pulse ${className || ''}`} 
      />
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 ${className || ''}`}
    >
      <Player
        ref={playerRef}
        icon={iconData}
        size={size}
        colors={resolvedColors}
        onComplete={() => {
          if (trigger === 'loop' && playerRef.current) {
            playerRef.current.play();
          }
        }}
      />
    </div>
  );
}
