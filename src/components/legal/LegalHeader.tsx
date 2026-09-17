import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoDopeImg from '@/assets/logo_dope.webp';

interface LegalHeaderProps {
  currentDoc: 'terms' | 'privacy';
}

export const LegalHeader: React.FC<LegalHeaderProps> = ({ currentDoc }) => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f3f2e6]/90 backdrop-blur-md border-b border-[#141820]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Left: Back to Home */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.16em] text-[#55604e] hover:text-[#141820] transition-colors group py-2"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>

          <span className="hidden md:block h-4 w-px bg-[#141820]/15" />

          {/* DopaMint Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoDopeImg}
              alt="DopaMint"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Center/Right: Document Switcher Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label="Legal document selection" className="flex items-center p-1 rounded-full bg-[#141820]/5 border border-[#141820]/10 text-xs font-mono">
            <Link
              to="/terms"
              className={`px-3 sm:px-4 py-1.5 rounded-full transition-all duration-200 ${
                currentDoc === 'terms'
                  ? 'bg-[#141820] text-[#f3f2e6] font-semibold shadow-xs'
                  : 'text-[#55604e] hover:text-[#141820]'
              }`}
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className={`px-3 sm:px-4 py-1.5 rounded-full transition-all duration-200 ${
                currentDoc === 'privacy'
                  ? 'bg-[#141820] text-[#f3f2e6] font-semibold shadow-xs'
                  : 'text-[#55604e] hover:text-[#141820]'
              }`}
            >
              Privacy
            </Link>
          </nav>

          {/* Waitlist CTA */}
          <Link
            to="/waitlist"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#25362a] text-[#f3f2e6] text-xs font-mono uppercase tracking-[0.14em] font-bold hover:bg-[#141820] transition-colors shadow-xs"
          >
            Join Waitlist
          </Link>
        </div>

      </div>
    </header>
  );
};
