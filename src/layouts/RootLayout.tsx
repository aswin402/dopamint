import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setLenisInstance } from '../lib/lenis';
import { createMotionPolicy } from '@/lib/motionPolicy';
import { Preloader } from '@/components/ui/preloader';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const motionPolicy = createMotionPolicy(prefersReducedMotion);

    if (!motionPolicy.smoothScroll) {
      setLenisInstance(null);
      return;
    }

    // Duration mode (fixed glide with expo easing) over lerp mode — lerp makes
    // the page lag far behind the wheel and crawl asymptotically, which reads
    // as heavy/unresponsive across the whole site.
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    // Synchronize ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    setLenisInstance(lenis);

    // Mount-order race guard: child effects run before parent effects, so a
    // scroll lock may already be engaged (hero dissolve animation). Pause
    // Lenis immediately so it doesn't scroll underneath the locked overlay.
    if (document.documentElement.dataset.scrollLocked === 'true') {
      lenis.stop();
    }

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#EBEAE5] text-[#141820] font-sans antialiased">
      {/* Fullscreen Initial Asset & Theme Preloader */}
      {location.pathname === '/' && <Preloader />}
      
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
