import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  name: string;
  role: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

const IMG_WIDTH = 70;
const IMG_HEIGHT = 95;

function FlipCard({
  src,
  name,
  role,
  index,
  target,
}: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer group select-none"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-md bg-neutral-200 border border-neutral-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-xl bg-black flex flex-col items-center justify-center p-2 border border-neutral-700 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-[7px] font-mono font-bold text-neutral-400 uppercase tracking-widest mb-0.5">
            {role}
          </p>
          <p className="text-[10px] font-bold text-white font-sans">{name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const AGENT_CARDS = [
  { name: "Sol", role: "Trading", src: "/avatars/sarang.jpg" },
  { name: "Iris", role: "Onchain", src: "/avatars/aria.jpg" },
  { name: "Kai", role: "Finance", src: "/avatars/cody.jpg" },
  { name: "Ada", role: "Travel", src: "/avatars/aiko.jpg" },
  { name: "Eve", role: "Calendar", src: "/avatars/mia.jpg" },
  { name: "Nora", role: "Inbox", src: "/avatars/nora.jpg" },
  { name: "Zara", role: "Shopping", src: "/avatars/zara.jpg" },
  { name: "Leo", role: "Research", src: "/avatars/vale.jpg" },
  { name: "Sol Core", role: "Swaps", src: "/avatars/sarang.jpg" },
  { name: "Iris MPC", role: "Enclave", src: "/avatars/aria.jpg" },
  { name: "Kai Vault", role: "Ledger", src: "/avatars/cody.jpg" },
  { name: "Ada Flight", role: "Trips", src: "/avatars/aiko.jpg" },
];

const TOTAL_IMAGES = AGENT_CARDS.length;
const MAX_SCROLL = 2400;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export const InteractiveArcCarousel: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 800, height: 420 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width || 800,
          height: entry.contentRect.height || 420,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    setContainerSize({
      width: containerRef.current.offsetWidth || 800,
      height: containerRef.current.offsetHeight || 420,
    });

    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY * 0.8, 0), MAX_SCROLL);
      scrollRef.current = newScroll;
      virtualScroll.set(newScroll);
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 500], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  const scrollRotate = useTransform(virtualScroll, [500, MAX_SCROLL], [0, 260]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 60);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase("line"), 400);
    const timer2 = setTimeout(() => setIntroPhase("circle"), 1800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scatterPositions = useMemo(() => {
    return AGENT_CARDS.map(() => ({
      x: (Math.random() - 0.5) * 800,
      y: (Math.random() - 0.5) * 400,
      rotation: (Math.random() - 0.5) * 120,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[460px] rounded-[2.5rem] bg-[#E5E4DE] border border-neutral-300 overflow-hidden flex flex-col items-center justify-center p-6 select-none ${className}`}
    >
      {/* Intro Center Text */}
      <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-12">
        <h3 className="text-xl sm:text-2xl font-black text-black font-sans">
          Curated Squad Explorer
        </h3>
        <p className="mt-1 text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-500">
          HOVER CARDS TO REVEAL CAPABILITIES
        </p>
      </div>

      {/* Main 3D Container */}
      <div className="relative flex items-center justify-center w-full h-full">
        {AGENT_CARDS.map((agent, i) => {
          let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

          if (introPhase === "scatter") {
            target = scatterPositions[i];
          } else if (introPhase === "line") {
            const lineSpacing = 80;
            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
            const lineX = i * lineSpacing - lineTotalWidth / 2;
            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
          } else {
            const minDimension = Math.min(containerSize.width, containerSize.height);
            const circleRadius = Math.min(minDimension * 0.38, 220);

            const circleAngle = (i / TOTAL_IMAGES) * 360;
            const circleRad = (circleAngle * Math.PI) / 180;
            const circlePos = {
              x: Math.cos(circleRad) * circleRadius,
              y: Math.sin(circleRad) * circleRadius + 20,
              rotation: circleAngle + 90,
            };

            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
            const arcRadius = baseRadius * 0.9;
            const arcApexY = containerSize.height * 0.25;
            const arcCenterY = arcApexY + arcRadius;

            const spreadAngle = 120;
            const startAngle = -90 - spreadAngle / 2;
            const step = spreadAngle / (TOTAL_IMAGES - 1);

            const scrollProgress = Math.min(Math.max(rotateValue / 260, 0), 1);
            const maxRotation = spreadAngle * 0.6;
            const boundedRotation = -scrollProgress * maxRotation;

            const currentArcAngle = startAngle + i * step + boundedRotation;
            const arcRad = (currentArcAngle * Math.PI) / 180;

            const arcPos = {
              x: Math.cos(arcRad) * arcRadius + parallaxValue,
              y: Math.sin(arcRad) * arcRadius + arcCenterY,
              rotation: currentArcAngle + 90,
              scale: 1.25,
            };

            target = {
              x: lerp(circlePos.x, arcPos.x, morphValue),
              y: lerp(circlePos.y, arcPos.y, morphValue),
              rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
              scale: lerp(1, arcPos.scale, morphValue),
              opacity: 1,
            };
          }

          return (
            <FlipCard
              key={i}
              src={agent.src}
              name={agent.name}
              role={agent.role}
              index={i}
              total={TOTAL_IMAGES}
              phase={introPhase}
              target={target}
            />
          );
        })}
      </div>
    </div>
  );
};
