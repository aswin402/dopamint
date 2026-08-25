import { ALL_72_AGENTS, type AgentCardData } from '@/data/agents';

const LANE_1 = ALL_72_AGENTS.slice(0, 24);
const LANE_2 = ALL_72_AGENTS.slice(24, 48);
const LANE_3 = ALL_72_AGENTS.slice(48, 72);

interface AgentCardProps {
  agent: AgentCardData;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const parts = agent.role.split(' ');
  const mainRole = parts.slice(0, -1).join(' ');
  const suffix = parts[parts.length - 1];

  return (
    <div className="w-[340px] sm:w-[380px] md:w-[410px] shrink-0 rounded-[28px] sm:rounded-[32px] bg-[#eef2ea] hover:bg-[#e7eee1] border-[1.5px] border-[#3e4f42]/50 hover:border-[#3e4f42]/85 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_18px_rgba(40,48,40,0.04)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(40,48,40,0.12)] hover:-translate-y-1.5 select-none cursor-pointer">
      {/* Top Header */}
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-2xl sm:text-[26px] font-serif text-[#25362a] tracking-tight leading-tight">
            <span className="font-serif italic font-bold">{mainRole}</span>{' '}
            <span className="font-serif italic font-normal text-[#38493d]">{suffix}</span>
          </h3>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#4a5c4e] font-semibold shrink-0">
            {agent.name}
          </span>
        </div>

        {/* Description / One-liner */}
        <p className="text-sm sm:text-base md:text-[15.5px] text-[#3e5042] font-sans leading-relaxed mt-2.5 mb-4 font-normal">
          {agent.does}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {agent.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-0.5 rounded-full border border-[#445648]/35 bg-[#e0e8dc]/70 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#314234] font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const AgentRoster: React.FC = () => {
  return (
    <section id="agents" className="w-full bg-[#f3f2e6] pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 overflow-hidden relative z-20">
      
      {/* Top Header Section */}
      <div className="px-6 sm:px-10 lg:px-16 mb-8 sm:mb-10 lg:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          
          {/* Left Title: DOPE runs the House */}
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#2d3e32] font-serif leading-[1.05]">
              <span className="font-serif italic font-bold text-[#1e2e22]">DOPE</span>{' '}
              <span className="font-serif font-normal text-[#2d3e32]">runs the House</span>
            </h2>
          </div>

          {/* Right Editorial Copy */}
          <div className="max-w-md lg:text-right">
            <p className="font-serif italic text-xl sm:text-2xl md:text-[26px] text-[#7a382e] leading-snug">
              The Head of Agents turning your intent into action across a network of specialized agents running in tee environment
            </p>
          </div>

        </div>
      </div>

      {/* =========================================================================
          THREE MARQUEE LANES (72 AGENTS)
          ========================================================================= */}
      <div className="relative w-full space-y-0.5 sm:space-y-1 overflow-hidden">
        
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#f3f2e6] via-[#f3f2e6]/80 to-transparent z-10" />

        {/* --- LANE 1: MOVES LEFT --- */}
        <div className="flex w-full overflow-hidden py-1 sm:py-1.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused]">
            {LANE_1.map((agent) => (
              <AgentCard key={`lane1-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused]" aria-hidden="true">
            {LANE_1.map((agent) => (
              <AgentCard key={`lane1-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

        {/* --- LANE 2: MOVES RIGHT --- */}
        <div className="flex w-full overflow-hidden py-1 sm:py-1.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused]">
            {LANE_2.map((agent) => (
              <AgentCard key={`lane2-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 hover:[animation-play-state:paused]" aria-hidden="true">
            {LANE_2.map((agent) => (
              <AgentCard key={`lane2-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

        {/* --- LANE 3: MOVES LEFT --- */}
        <div className="flex w-full overflow-hidden py-1 sm:py-1.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused]">
            {LANE_3.map((agent) => (
              <AgentCard key={`lane3-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 hover:[animation-play-state:paused]" aria-hidden="true">
            {LANE_3.map((agent) => (
              <AgentCard key={`lane3-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Subtitle / Monospace Caption */}
      <div className="w-full text-center pt-10 sm:pt-14 px-4">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#4a5c4e] font-bold">
          ONE INTERFACE · 72+ SPECIALIZED AGENTS
        </p>
      </div>

    </section>
  );
};
