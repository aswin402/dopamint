import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LordIcon } from '@/components/LordIcon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, Send, Sparkles } from 'lucide-react';

export function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-background text-foreground py-16 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20">
            <LordIcon src="https://cdn.lordicon.com/pithnlch.json" size={36} colors="primary:currentColor" trigger="loop" delay={1500} />
          </div>
          <div>
            <h1 className="text-4xl font-heading font-extrabold tracking-tight">Get in Touch</h1>
            <p className="text-muted-foreground font-body text-base mt-1">Let's talk about building creative web animations.</p>
          </div>
        </div>

        {/* Contact Form or Success Screen */}
        <div className="bg-card/40 border border-border/40 rounded-3xl p-8 backdrop-blur-sm shadow-xl font-body">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/60 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/60 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/80">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project or questions..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full p-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/60 text-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="inline-flex p-4 bg-green-500/10 rounded-full border border-green-500/20 text-green-500">
                <LordIcon src="https://cdn.lordicon.com/nocovwne.json" size={56} trigger="loop" colors="primary:currentColor" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-extrabold flex items-center justify-center gap-1.5 text-foreground">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <span>Thank You, {formState.name}!</span>
                </h3>
                <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
                  Your message has been received! We'll reach out to <span className="text-foreground font-semibold">{formState.email}</span> as soon as possible.
                </p>
              </div>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: '', email: '', message: '' });
                }}
                variant="outline"
                className="rounded-xl px-5"
              >
                Send Another Message
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
