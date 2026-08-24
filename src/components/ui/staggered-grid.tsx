'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import { cn } from '../../lib/utils';
import { FaGithub, FaSlack, FaTwitter, FaDiscord, FaTelegramPlane } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export interface BentoItem {
  id: number | string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
  image?: string;
}

export interface StaggeredGridProps {
  images?: string[];
  bentoItems?: BentoItem[];
  centerText?: string;
  credits?: {
    madeBy: { text: string; href: string };
    moreDemos: { text: string; href: string };
  };
  className?: string;
  showFooter?: boolean;
  scroller?: string | Element | Window | null;
}

export function StaggeredGrid({
  images = [],
  bentoItems = [],
  centerText = "DOPAMINT",
  credits = {
    madeBy: { text: "@dopamint", href: "https://x.com/dopamint" },
    moreDemos: { text: "Documentation", href: "#docs" }
  },
  className,
  showFooter = false,
  scroller
}: StaggeredGridProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const gridFullRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Bento Grid State
  const [activeBento, setActiveBento] = useState<number>(0);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block" style={{ willChange: 'transform' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    const imgs = document.querySelectorAll('.grid__item-img');
    if (imgs.length > 0) {
      imagesLoaded(imgs, { background: true }, handleLoad);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      // Animate Text Element
      if (textRef.current) {
        const chars = textRef.current.querySelectorAll('.char');
        gsap.timeline({
          scrollTrigger: {
            trigger: textRef.current,
            scroller: scroller || undefined,
            start: 'top bottom-=50px',
            end: 'center center-=20%',
            scrub: 1,
          }
        }).from(chars, {
          ease: 'sine.out',
          yPercent: 300,
          autoAlpha: 0,
          stagger: {
            each: 0.05,
            from: 'center'
          }
        });
      }

      // Animate Full Grid
      if (gridFullRef.current) {
        const gridFullItems = gridFullRef.current.querySelectorAll('.grid__item');
        const numColumns = getComputedStyle(gridFullRef.current).getPropertyValue('grid-template-columns').split(' ').length || 7;
        const middleColumnIndex = Math.floor(numColumns / 2);

        const columns: Element[][] = Array.from({ length: numColumns }, () => []);
        gridFullItems.forEach((item: Element) => {
          const colAttr = item.getAttribute('data-col');
          const columnIndex = colAttr !== null ? parseInt(colAttr, 10) : 0;
          if (columns[columnIndex]) {
            columns[columnIndex].push(item);
          }
        });

        columns.forEach((columnItems, columnIndex) => {
          const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.2;

          gsap.timeline({
            scrollTrigger: {
              trigger: gridFullRef.current,
              scroller: scroller || undefined,
              start: 'top bottom',
              end: 'center center',
              scrub: 1.5,
            }
          })
            .from(columnItems, {
              yPercent: 450,
              autoAlpha: 0,
              delay: delayFactor,
              ease: 'sine.out',
            })
            .from(columnItems.map(item => item.querySelector('.grid__item-img')).filter(Boolean), {
              transformOrigin: '50% 0%',
              ease: 'sine.out',
            }, 0);
        });

        // Specific animation for Bento Container
        const bentoContainer = gridFullRef.current.querySelector('.bento-container');

        if (bentoContainer) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: gridFullRef.current,
              scroller: scroller || undefined,
              start: 'top top+=15%',
              end: 'bottom center',
              scrub: 1,
              invalidateOnRefresh: true,
            }
          });

          tl.to(bentoContainer, {
            y: window.innerHeight * 0.1,
            scale: 1.25,
            zIndex: 100,
            ease: 'power2.out',
            duration: 1,
            force3D: true
          }, 0);
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded, scroller]);

  // Fallback images if none provided
  const displayImages = images.length > 0 ? images : Array.from({ length: 21 }, () => '');

  // Prepare grid items: fill up to the end of Row 3 (21 slots)
  const mixedGridItems: (string | 'BENTO_GROUP')[] = Array.from(
    { length: 21 },
    (_, i) => displayImages[i % displayImages.length]
  );

  mixedGridItems[16] = 'BENTO_GROUP';

  const defaultBentoItems: BentoItem[] = bentoItems.length > 0 ? bentoItems : [
    {
      id: 1,
      title: 'Sovereign Agents',
      subtitle: 'Self-governing AI',
      description: 'Autonomous trading and research companion agents.',
      icon: <span className="font-serif italic font-bold">01</span>,
    },
    {
      id: 2,
      title: 'Onchain Execution',
      subtitle: 'Signed and Settled',
      description: 'Trust layer execution within predefined policy caps.',
      icon: <span className="font-serif italic font-bold">02</span>,
    },
    {
      id: 3,
      title: 'Memory Provenance',
      subtitle: 'Cryptographic Logs',
      description: 'Every interaction backed by immutable proof.',
      icon: <span className="font-serif italic font-bold">03</span>,
    }
  ];

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden w-full py-12 sm:py-16 bg-[#141210] text-[#f7f2ea]", className)}
      style={{
        '--grid-item-translate': '0px',
      } as React.CSSProperties}
    >
      <section className="grid place-items-center w-full relative my-8 sm:my-12">
        <div 
          ref={textRef} 
          className="text font-serif italic uppercase flex content-center text-[clamp(2.5rem,10vw,7.5rem)] font-bold tracking-tight text-[#dfc28d] leading-[0.9]"
        >
          {splitText(centerText)}
        </div>
      </section>

      <section className="grid place-items-center w-full relative max-w-7xl mx-auto px-4">
        <div 
          ref={gridFullRef} 
          className="grid--full relative w-full my-6 sm:my-10 h-auto aspect-[1.1] max-w-none p-2 sm:p-4 grid gap-2 sm:gap-4 grid-cols-7 grid-rows-5"
        >
          <div className="grid-overlay absolute inset-0 z-[15] pointer-events-none opacity-0 bg-black/80 rounded-lg transition-opacity duration-500" />
          
          {mixedGridItems.map((item, i) => {
            if (item === 'BENTO_GROUP') {
              return (
                <div 
                  key="bento-group" 
                  data-col={2} 
                  className="grid__item bento-container col-span-3 row-span-1 relative z-20 flex items-center justify-center gap-2 h-full w-full will-change-transform"
                >
                  {defaultBentoItems.map((bentoItem, index) => {
                    const isActive = activeBento === index;
                    return (
                      <div
                        key={bentoItem.id}
                        className={cn(
                          "relative cursor-pointer overflow-hidden rounded-2xl h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                          isActive
                            ? "bg-[#1e1a15] shadow-2xl border border-[#d4af37]/60"
                            : "bg-[#171411] border border-[#c4a978]/30 hover:border-[#dfc28d]/60"
                        )}
                        style={{ width: isActive ? "60%" : "20%" }}
                        onMouseEnter={() => setActiveBento(index)}
                        onClick={() => setActiveBento(index)}
                      >
                        <div className="relative z-10 w-full h-full flex flex-col p-3 sm:p-4 justify-between">
                          {/* Active State */}
                          <div className={cn(
                            "absolute inset-0 p-3 sm:p-4 flex flex-col justify-between transition-all duration-500 ease-in-out",
                            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                          )}>
                            <div className="flex justify-between items-start">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#dfc28d]">
                                {bentoItem.subtitle}
                              </span>
                              <div className="text-[#dfc28d]">
                                {bentoItem.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-serif font-bold text-[#f7f2ea] leading-tight">
                                {bentoItem.title}
                              </h3>
                              <p className="text-xs text-[#c7baa4] font-serif italic line-clamp-2 mt-1">
                                {bentoItem.description}
                              </p>
                            </div>
                          </div>

                          {/* Inactive State */}
                          <div className={cn(
                            "absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500",
                            isActive ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
                          )}>
                            <div className="text-[#dfc28d]/70 group-hover:text-[#dfc28d] transition-colors">
                              {bentoItem.icon}
                            </div>
                            <span className="text-[10px] font-mono font-medium text-[#c7baa4] uppercase tracking-wider text-center px-1">
                              {bentoItem.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }

            if (i === 17 || i === 18) return null;

            const iconIndex = i % 5;
            const Icon = iconIndex === 0 ? FaGithub : iconIndex === 1 ? FaTwitter : iconIndex === 2 ? FaDiscord : iconIndex === 3 ? FaTelegramPlane : FaSlack;
            const label = iconIndex === 0 ? "Github" : iconIndex === 1 ? "Twitter" : iconIndex === 2 ? "Discord" : iconIndex === 3 ? "Telegram" : "Network";

            return (
              <figure 
                key={`img-${i}`} 
                data-col={i % 7} 
                className="grid__item m-0 relative z-10 [perspective:800px] will-change-[transform,opacity] group cursor-pointer"
              >
                <div className="grid__item-img w-full h-full [backface-visibility:hidden] will-change-transform rounded-xl overflow-hidden shadow-xs border border-[#c4a978]/25 bg-[#171411]/90 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-[#dfc28d]/60">
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-2 text-center">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#dfc28d]/80 transition-all duration-300 group-hover:text-[#f0dcba] group-hover:scale-110" />
                    <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="block text-[9px] font-mono font-medium text-[#c7baa4] uppercase tracking-wider">Connect</span>
                      <span className="block text-xs font-serif font-bold text-[#f7f2ea] tracking-tight">{label}</span>
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </section>

      {showFooter && (
        <footer className="w-full p-8 flex justify-between items-center relative z-50 text-[#c7baa4] uppercase font-medium text-xs tracking-wider border-t border-[#c4a978]/20">
          <a href={credits.madeBy.href} className="hover:text-white transition-colors">{credits.madeBy.text}</a>
          <a href={credits.moreDemos.href} className="hover:text-white transition-colors">{credits.moreDemos.text}</a>
        </footer>
      )}
    </div>
  );
}

export default StaggeredGrid;
