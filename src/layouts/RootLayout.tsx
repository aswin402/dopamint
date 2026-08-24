import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setLenisInstance } from '../lib/lenis';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export function RootLayout() {
  useEffect(() => {
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
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
