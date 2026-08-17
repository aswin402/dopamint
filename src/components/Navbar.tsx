import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Menu, X, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/60 backdrop-blur-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center text-emerald-400 font-mono font-black text-base shadow-sm group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-950 font-sans">
                  DopaMint
                </span>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  SF
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-medium hidden sm:inline">
                agents that actually go
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-inner text-xs font-bold text-slate-700">
            <a href="#agents" className="px-3 py-1.5 hover:text-slate-950 hover:bg-white rounded-full transition-all">
              Agents
            </a>
            <a href="#voice" className="px-3 py-1.5 hover:text-slate-950 hover:bg-white rounded-full transition-all">
              Voice
            </a>
            <a href="#onchain" className="px-3 py-1.5 hover:text-slate-950 hover:bg-white rounded-full transition-all">
              Onchain
            </a>
            <a href="#proof" className="px-3 py-1.5 hover:text-slate-950 hover:bg-white rounded-full transition-all">
              Proof
            </a>
            <a href="#ecosystem" className="px-3 py-1.5 hover:text-slate-950 hover:bg-white rounded-full transition-all">
              Ecosystem
            </a>
            <a href="#architecture" className="px-3 py-1.5 hover:text-slate-950 hover:bg-white rounded-full transition-all">
              Architecture
            </a>
          </nav>

          {/* Direct CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#cta"
              className="px-4 py-2 text-xs font-extrabold text-white bg-slate-950 hover:bg-emerald-600 active:bg-emerald-700 rounded-xl shadow-sm transition-all flex items-center gap-1.5 group"
            >
              <span>Get DopaMint</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#cta"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-slate-950 rounded-lg"
            >
              Get
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 rounded-lg bg-slate-100 border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col gap-2 animate-fadeIn text-sm font-bold text-slate-800">
            <a href="#agents" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-slate-50 rounded-lg">
              Agents
            </a>
            <a href="#voice" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-slate-50 rounded-lg">
              Voice
            </a>
            <a href="#onchain" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-slate-50 rounded-lg">
              Onchain
            </a>
            <a href="#proof" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-slate-50 rounded-lg">
              Proof
            </a>
            <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-slate-50 rounded-lg">
              Ecosystem
            </a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 hover:bg-slate-50 rounded-lg">
              Architecture
            </a>
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 mt-2 text-xs font-extrabold text-white bg-slate-950 text-center rounded-xl"
            >
              Get DopaMint →
            </a>
          </div>
        )}

      </div>
    </header>
  );
};
