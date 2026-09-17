import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, ArrowUp, Lock, CheckCircle2, ChevronDown } from 'lucide-react';
import { LegalHeader } from '@/components/legal/LegalHeader';
import { LegalFooter } from '@/components/legal/LegalFooter';
import { PRIVACY_DATA } from '@/data/privacyContent';
import { getLenisInstance } from '@/lib/lenis';

export const PrivacyPage: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('privacy-1');
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

    document.title = 'Privacy Policy — DopaMint';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = PRIVACY_DATA.sections.length - 1; i >= 0; i--) {
        const sec = PRIVACY_DATA.sections[i];
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
    { title: 'Data Collected', id: 'privacy-1' },
    { title: 'Use of Data', id: 'privacy-2' },
    { title: 'AI & Models', id: 'privacy-3' },
    { title: 'Data Disclosures', id: 'privacy-4' },
    { title: 'European Rights', id: 'privacy-5' },
    { title: 'Your Choices', id: 'privacy-6' },
    { title: 'Security', id: 'privacy-9' },
  ], []);

  return (
    <div className="min-h-screen bg-[#f3f2e6] text-[#141820] flex flex-col font-sans selection:bg-[#e5ddd4] selection:text-[#141820]">
      <LegalHeader currentDoc="privacy" />

      {/* Atmospheric Glow */}
      <div className="fixed top-0 inset-x-0 h-96 bg-gradient-to-b from-white/70 via-transparent to-transparent pointer-events-none -z-10" />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Document Header */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25362a]/10 text-[#25362a] text-xs font-mono uppercase tracking-[0.14em] font-semibold mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Governance & Privacy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141820] mb-4">
            {PRIVACY_DATA.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono text-[#55604e] pb-6 border-b border-[#141820]/10">
            <span>Last Updated: {PRIVACY_DATA.lastUpdated}</span>
            <span className="text-[#141820]/20">•</span>
            <span>Effective Date: {PRIVACY_DATA.effectiveDate}</span>
            <span className="text-[#141820]/20">•</span>
            <span>House of Intent-Based Agents on Base</span>
          </div>

          {/* Intro Box */}
          <div className="mt-6 p-6 rounded-2xl bg-white/60 backdrop-blur-xs border border-[#141820]/10 shadow-xs space-y-3.5 text-[#2C3240] text-sm sm:text-[15px] leading-relaxed">
            {PRIVACY_DATA.intro.map((p, idx) => (
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
              <span>Table of Contents ({PRIVACY_DATA.sections.length} Sections)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileTocOpen && (
              <div className="mt-2 max-h-80 overflow-y-auto p-3 rounded-xl bg-white border border-[#141820]/15 divide-y divide-[#141820]/5 shadow-lg">
                {PRIVACY_DATA.sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left py-2 px-2 text-xs font-mono flex items-center gap-2 transition-colors ${
                      activeSectionId === sec.id
                        ? 'text-[#25362a] font-bold bg-[#25362a]/5 rounded'
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
                <span className="text-[11px] font-mono text-[#55604e]">13 sections</span>
              </div>

              <div className="overflow-y-auto pr-2 space-y-1 custom-scrollbar text-xs font-mono">
                {PRIVACY_DATA.sections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#25362a] text-[#f3f2e6] font-semibold shadow-xs translate-x-1'
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
                <Link to="/terms" className="hover:text-[#25362a] transition-colors">
                  Terms & Conditions →
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Legal Sections */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10">
            {PRIVACY_DATA.sections.map((sec) => (
              <article
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 p-6 sm:p-8 rounded-2xl transition-colors border bg-white/70 border-[#141820]/10 hover:border-[#141820]/20 shadow-2xs"
              >
                {/* Section Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="shrink-0 px-2.5 py-1 rounded-md font-mono text-xs font-bold bg-[#25362a]/10 text-[#25362a]">
                    § {sec.number}
                  </div>

                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#141820]">
                      {sec.title}
                    </h2>
                  </div>
                </div>

                {/* Items in Section */}
                <div className="space-y-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#2C3240]">
                  {sec.items.map((item, idx) => {
                    if (item.type === 'subheading') {
                      return (
                        <h3
                          key={idx}
                          className="font-serif text-lg font-bold text-[#141820] pt-4 first:pt-0 border-b border-[#141820]/5 pb-1"
                        >
                          {item.text}
                        </h3>
                      );
                    }

                    if (item.type === 'bullet') {
                      const colonIdx = item.text.indexOf(':');
                      const hasPrefix = colonIdx !== -1 && colonIdx < 45;
                      const prefix = hasPrefix ? item.text.slice(0, colonIdx + 1) : '';
                      const rest = hasPrefix ? item.text.slice(colonIdx + 1) : item.text;

                      return (
                        <div key={idx} className="flex items-start gap-3 pl-1 sm:pl-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7a382e] shrink-0 mt-2.5" />
                          <div className="flex-1">
                            {hasPrefix ? (
                              <span>
                                <strong className="font-semibold text-[#141820] font-mono text-xs uppercase tracking-wide mr-1.5">
                                  {prefix}
                                </strong>
                                <span>{rest}</span>
                              </span>
                            ) : (
                              <span>{item.text}</span>
                            )}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <p key={idx} className="leading-relaxed">
                        {item.text}
                      </p>
                    );
                  })}
                </div>
              </article>
            ))}

            {/* Next Document Transition Card */}
            <div className="p-8 rounded-2xl bg-[#141820] text-[#f3f2e6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#dfc28d]">
                  Governing Agreement
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">
                  Terms & Conditions
                </h3>
                <p className="text-sm text-[#f3f2e6]/70 mt-1 max-w-md">
                  Review the full 50-article service terms governing agent execution, guardrails, and platform policies.
                </p>
              </div>

              <Link
                to="/terms"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#dfc28d] text-[#141820] font-mono text-xs uppercase tracking-[0.14em] font-bold hover:bg-white transition-all shadow-xs shrink-0"
              >
                <span>Read Terms & Conditions</span>
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

export default PrivacyPage;
