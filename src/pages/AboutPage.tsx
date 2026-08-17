import { motion } from 'framer-motion';
import { LordIcon } from '@/components/LordIcon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, Shield, Award, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-background text-foreground py-16 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20">
            <LordIcon src="https://cdn.lordicon.com/xzalkbkz.json" size={36} colors="primary:currentColor" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">About The Kinetic Stack</h1>
            <p className="text-muted-foreground font-body text-base mt-1">Unleashing high-performance motion design on the web.</p>
          </div>
        </div>

        {/* Body content */}
        <div className="space-y-12 font-body">
          {/* Mission */}
          <section className="bg-card/40 border border-border/40 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Our Creative Vision</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe websites should feel alive, responsive, and tactile. By combining the industry standards of animation, we create high-fidelity user experiences that don't just look beautiful but feel incredibly tactile and premium.
            </p>
          </section>

          {/* Cards Grid */}
          <section className="grid md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-border/40 bg-card/30 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg">Optimized Code</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Dynamic script loading and tree-shaken animation layers keep things extremely fast.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-border/40 bg-card/30 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg">Accessible First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Radix UI primitives ensure that our design templates are fully keyboard accessible and screen-reader compliant.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-border/40 bg-card/30 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 flex items-center justify-center">
                <LordIcon src="https://cdn.lordicon.com/nocovwne.json" size={20} colors="primary:currentColor" />
              </div>
              <h3 className="font-heading font-bold text-lg">Interactive Assets</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Lordicon vector files scale to any size, support interactive triggers, and respond to theme changes.</p>
            </motion.div>
          </section>

          {/* Call to action */}
          <div className="flex flex-col items-center justify-center text-center p-8 border border-border/40 rounded-3xl bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent">
            <h3 className="font-heading font-bold text-xl mb-2">Ready to test the motions?</h3>
            <p className="text-muted-foreground text-sm max-w-md mb-6">Head back to our sandbox interface to test dragging, scrolling, and sequences.</p>
            <Link to="/">
              <Button className="rounded-xl px-5 gap-1.5 font-semibold">
                <span>Go to Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
