import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200 text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & SF Tag */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-950 text-emerald-400 font-bold flex items-center justify-center text-xs">
              D
            </div>
            <span className="font-sans font-bold text-slate-900 text-sm">
              DopaMint
            </span>
            <span className="text-[10px] text-slate-400">
              Built in San Francisco
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-slate-700">
            <a href="#architecture" className="hover:text-slate-950 transition-colors">
              Architecture
            </a>
            <a href="#trust" className="hover:text-slate-950 transition-colors">
              Security
            </a>
            <a href="#onchain" className="hover:text-slate-950 transition-colors">
              Docs
            </a>
            <a href="#cta" className="hover:text-slate-950 transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-slate-400 text-center sm:text-right">
            © 2026 DopaMint. Built in San Francisco, running everywhere.
          </div>

        </div>
      </div>
    </footer>
  );
};
