import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, ArrowUp, AlertTriangle, FileText, ChevronDown } from 'lucide-react';
import { LegalHeader } from '@/components/legal/LegalHeader';
import { LegalFooter } from '@/components/legal/LegalFooter';
import { TERMS_DATA } from '@/data/termsContent';
import { getLenisInstance } from '@/lib/lenis';

export const TermsPage: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('section-1');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.start();
      lenis.scrollTo(0, { immediate: true });
    }
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    delete document.documentElement.dataset.scrollLocked;

    document.title = 'Terms & Conditions — DopaMint';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = TERMS_DATA.sections.length - 1; i >= 0; i--) {
        const sec = TERMS_DATA.sections[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.scrollTo(el, { offset: -90 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActiveSectionId(id);
    setMobileTocOpen(false);
  };

  const keyJumpTopics = useMemo(() => [
    { title: 'AI & Agents', id: 'section-4' },
    { title: 'Agent Actions', id: 'section-5' },
    { title: 'No Advice', id: 'section-10' },
    { title: 'Digital Assets', id: 'section-11' },
    { title: 'x402 Payments', id: 'section-20' },
    { title: 'Disclaimers', id: 'section-38' },
    { title: 'Liability', id: 'section-39' },
  ], []);

  return (
    <div className="min-h-screen bg-[#f3f2e6] text-[#141820] flex flex-col font-sans selection:bg-[#e5ddd4] selection:text-[#141820]">
      <LegalHeader currentDoc="terms" />

      {/* Atmospheric Background Glow */}
      <div className="fixed top-0 inset-x-0 h-96 bg-gradient-to-b from-white/70 via-transparent to-transparent pointer-events-none -z-10" />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Document Header */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7a382e]/10 text-[#7a382e] text-xs font-mono uppercase tracking-[0.14em] font-semibold mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141820] mb-4">
            {TERMS_DATA.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono text-[#55604e] pb-6 border-b border-[#141820]/10">
            <span>Last Updated: {TERMS_DATA.lastUpdated}</span>
            <span className="text-[#141820]/20">•</span>
            <span>Effective Date: {TERMS_DATA.effectiveDate}</span>
            <span className="text-[#141820]/20">•</span>
            <span>50 Articles</span>
          </div>

          {/* Intro Box */}
          <div className="mt-6 p-6 rounded-2xl bg-white/60 backdrop-blur-xs border border-[#141820]/10 shadow-xs space-y-3.5 text-[#2C3240] text-sm sm:text-[15px] leading-relaxed">
            {TERMS_DATA.intro.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Quick Jump Pills */}
          <div className="mt-6">
            <p className="text-xs font-mono uppercase tracking-wider text-[#55604e] mb-2.5">
              Quick Jumps:
            </p>
            <div className="flex flex-wrap gap-2">
              {keyJumpTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => scrollToSection(topic.id)}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/80 hover:bg-[#141820] hover:text-[#f3f2e6] border border-[#141820]/15 text-[#141820] transition-colors cursor-pointer shadow-2xs"
                >
                  {topic.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Layout: Sidebar TOC + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Mobile Collapsible TOC */}
          <div className="lg:hidden col-span-1">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-white/80 border border-[#141820]/15 text-sm font-mono font-medium text-[#141820] cursor-pointer"
            >
              <span>Table of Contents ({TERMS_DATA.sections.length} Sections)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileTocOpen && (
              <div className="mt-2 max-h-80 overflow-y-auto p-3 rounded-xl bg-white border border-[#141820]/15 divide-y divide-[#141820]/5 shadow-lg">
                {TERMS_DATA.sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left py-2 px-2 text-xs font-mono flex items-center gap-2 transition-colors ${
                      activeSectionId === sec.id
                        ? 'text-[#7a382e] font-bold bg-[#7a382e]/5 rounded'
                        : 'text-[#55604e] hover:text-[#141820]'
                    }`}
                  >
                    <span className="w-6 text-[#141820]/40 shrink-0">{sec.number}.</span>
                    <span className="truncate">{sec.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 max-h-[calc(100vh-8.5rem)] flex flex-col p-4 rounded-2xl bg-white/50 border border-[#141820]/10 backdrop-blur-xs">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#141820]/10">
                <span className="text-xs font-mono uppercase tracking-[0.16em] font-bold text-[#141820]">
                  Table of Contents
                </span>
                <span className="text-[11px] font-mono text-[#55604e]">50 sections</span>
              </div>

              <div className="overflow-y-auto pr-2 space-y-1 custom-scrollbar text-xs font-mono">
                {TERMS_DATA.sections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#141820] text-[#f3f2e6] font-semibold shadow-xs translate-x-1'
                          : 'text-[#55604e] hover:text-[#141820] hover:bg-black/5'
                      }`}
                    >
                      <span className={`text-[10px] shrink-0 ${isActive ? 'text-[#dfc28d]' : 'text-[#141820]/40'}`}>
                        {sec.number}.
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 mt-3 border-t border-[#141820]/10 flex justify-between items-center text-[11px] font-mono text-[#55604e]">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-1 hover:text-[#141820] transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Top of page</span>
                </button>
                <Link to="/privacy" className="hover:text-[#7a382e] transition-colors">
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Legal Sections */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10">
            {TERMS_DATA.sections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className={`scroll-mt-28 p-6 sm:p-8 rounded-2xl transition-colors border ${
                  sec.isDisclaimer
                    ? 'bg-[#fffaf0] border-[#c4a978]/40 shadow-xs'
                    : 'bg-white/70 border-[#141820]/10 hover:border-[#141820]/20'
                }`}
              >
                {/* Section Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className={`shrink-0 px-2.5 py-1 rounded-md font-mono text-xs font-bold ${
                    sec.isDisclaimer ? 'bg-[#c4a978]/25 text-[#7a382e]' : 'bg-[#141820]/5 text-[#55604e]'
                  }`}>
                    § {sec.number}
                  </div>

                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#141820]">
                      {sec.title}
                    </h2>
                    {sec.isDisclaimer && (
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#7a382e] mt-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Crucial Disclaimer Notice</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section Paragraphs */}
                <div className="space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#2C3240]">
                  {sec.paragraphs.map((p, pIdx) => {
                    const isAllCaps = p.startsWith('TO THE MAXIMUM EXTENT PERMITTED') || p.includes('DOPAMINT DISCLAIMS ALL WARRANTIES');
                    return (
                      <p
                        key={pIdx}
                        className={isAllCaps ? 'font-mono text-xs sm:text-[13px] tracking-tight leading-relaxed bg-white/80 p-4 rounded-xl border border-[#c4a978]/30 text-[#141820] font-medium' : ''}
                      >
                        {p}
                      </p>
                    );
                  })}
                </div>
              </article>
            ))}

            {/* Next Document Transition Card */}
            <div className="p-8 rounded-2xl bg-[#25362a] text-[#f3f2e6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#dfc28d]">
                  Next Legal Document
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">
                  Privacy Policy
                </h3>
                <p className="text-sm text-[#f3f2e6]/70 mt-1 max-w-md">
                  Learn how DopaMint collects, utilizes, safeguards, and respects your personal and onchain data.
                </p>
              </div>

              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#dfc28d] text-[#141820] font-mono text-xs uppercase tracking-[0.14em] font-bold hover:bg-white transition-all shadow-xs shrink-0"
              >
                <span>Read Privacy Policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </main>

      <LegalFooter />
    </div>
  );
};

export default TermsPage;
