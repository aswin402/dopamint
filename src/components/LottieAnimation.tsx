import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
}

// Handle Vite ESM/CommonJS default export wrapper mismatch
const LottieComponent = (Lottie as any).default || Lottie;

export function LottieAnimation({ src, className, loop = true }: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch Lottie JSON: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setAnimationData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load Lottie animation from URL:', src, err);
        setIsLoading(false);
      });
  }, [src]);

  if (isLoading || !animationData) {
    return (
      <div 
        className={`w-full h-full min-h-[200px] flex items-center justify-center rounded-2xl bg-muted/20 animate-pulse ${className || ''}`} 
      />
    );
  }

  return (
    <div className={className}>
      <LottieComponent animationData={animationData} loop={loop} />
    </div>
  );
}

