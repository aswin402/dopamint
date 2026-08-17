import React from "react";
import { motion } from "framer-motion";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn: React.FC<{
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}> = ({ className = '', testimonials, duration = 12 }) => {
  return (
    <div className={`overflow-hidden h-[480px] ${className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 sm:p-8 rounded-3xl border border-neutral-300/80 bg-white shadow-sm hover:shadow-md transition-shadow max-w-sm w-full text-left"
                  key={i}
                >
                  <div className="text-xs text-neutral-800 leading-relaxed font-sans font-medium">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-neutral-200">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border border-neutral-300"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight text-xs text-black font-sans">
                        {name}
                      </div>
                      <div className="text-[10px] text-neutral-500 font-mono">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
