import React, { useEffect, useState } from 'react';

interface Chapter {
  id: string;
  name: string;
  num: string;
}

const CHAPTERS: Chapter[] = [
  { id: 'hero', name: 'Agents', num: 'I' },
  { id: 'why', name: 'Why Agents', num: 'II' },
  { id: 'roster', name: 'Squad Roster', num: 'III' },
  { id: 'trust', name: 'Authority', num: 'IV' },
  { id: 'execution', name: 'Execution', num: 'V' },
  { id: 'evidence', name: 'Evidence', num: 'VI' },
  { id: 'memory', name: 'Memory', num: 'VII' },
  { id: 'messaging', name: 'Messaging', num: 'VIII' },
  { id: 'voice', name: 'Voice Native', num: 'IX' },
  { id: 'payments', name: 'Payments', num: 'X' },
  { id: 'onchain', name: 'Onchain', num: 'XI' },
  { id: 'principles', name: 'Principles', num: 'XII' },
];

export const ChapterSidebar: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const element = document.getElementById(CHAPTERS[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveChapter(CHAPTERS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-60 xl:w-64 p-8 flex-col justify-between z-40 select-none bg-transparent pointer-events-none">
      
      {/* Top Edition Brand */}
      <div className="pointer-events-auto space-y-1">
        <a href="#hero" className="group block">
          <div className="text-[13px] font-mono font-bold tracking-tight text-black leading-tight">
            The <br />
            <span className="font-serif italic font-normal text-base text-black">
              Renaissance
            </span> <br />
            Edition
          </div>
          <div className="text-[10px] font-mono text-neutral-500 mt-1 uppercase tracking-wider">
            DopaMint · Winter '26
          </div>
        </a>
      </div>

      {/* Middle Chapter Index with Roman Numerals */}
      <nav className="pointer-events-auto my-auto space-y-1.5 font-sans text-xs">
        {CHAPTERS.map((ch) => {
          const isActive = activeChapter === ch.id;
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className={`flex items-center justify-between py-0.5 group transition-colors ${
                isActive
                  ? 'text-black font-bold'
                  : 'text-neutral-500 hover:text-black font-medium'
              }`}
            >
              <div className="flex items-center gap-2">
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black -ml-3" />
                )}
                <span>{ch.name}</span>
              </div>
              <span className="font-serif italic text-[11px] text-neutral-400 group-hover:text-neutral-800">
                {ch.num}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Bottom Legal & SF Tag */}
      <div className="pointer-events-auto text-[10px] text-neutral-500 space-y-1 font-mono">
        <div>© DopaMint Inc.</div>
        <div className="flex gap-2">
          <a href="#" className="hover:text-black">Terms of Service</a>
          <span>·</span>
          <a href="#" className="hover:text-black">Privacy</a>
        </div>
      </div>

    </aside>
  );
};
