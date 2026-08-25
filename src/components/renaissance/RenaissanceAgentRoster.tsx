import React from 'react';

export interface AgentCardData {
  id: number;
  role: string;
  name: string;
  does: string;
  skills: string[];
}

const ALL_72_AGENTS: AgentCardData[] = [
  // ==========================================
  // --- LANE 1 (AGENTS 1 - 24) ---
  // Finance & Markets (12) + Crypto & Onchain (10) + Business Ops (2)
  // ==========================================
  {
    id: 1,
    role: 'Trading Agent',
    name: 'Vesper',
    does: 'Finds and executes opportunities across spot and perpetual markets.',
    skills: ['Spot', 'Perps', 'Orders', 'Market Data'],
  },
  {
    id: 2,
    role: 'Portfolio Agent',
    name: 'Nova',
    does: 'Monitors positions and helps manage allocation.',
    skills: ['Portfolio', 'Risk', 'Allocation', 'Rebalancing'],
  },
  {
    id: 3,
    role: 'Treasury Agent',
    name: 'Halcyon',
    does: 'Manages runway with laddered, liquid positions.',
    skills: ['Ladders', 'Runway', 'T-Bills', 'Reporting'],
  },
  {
    id: 4,
    role: 'Risk Agent',
    name: 'Ashe',
    does: 'Enforces the limits you set before anything executes.',
    skills: ['Caps', 'Policy', 'Exposure', 'Stops'],
  },
  {
    id: 5,
    role: 'Research Agent',
    name: 'Idris',
    does: 'Finds and synthesizes information across markets and protocols.',
    skills: ['Research', 'Analysis', 'Web', 'Onchain'],
  },
  {
    id: 6,
    role: 'Yield Agent',
    name: 'Marlowe',
    does: 'Deploys idle capital into the best available yield.',
    skills: ['Vaults', 'APY', 'Deposits', 'Exits'],
  },
  {
    id: 7,
    role: 'DeFi Agent',
    name: 'Solene',
    does: 'Researches and executes strategies across decentralized finance.',
    skills: ['Swaps', 'Yield', 'Lending', 'Liquidity'],
  },
  {
    id: 8,
    role: 'Payments Agent',
    name: 'Emeric',
    does: 'Sends and receives stable value autonomously.',
    skills: ['Payments', 'x402', 'Transfers', 'Invoices'],
  },
  {
    id: 9,
    role: 'Lending Agent',
    name: 'Emory',
    does: 'Finds the cheapest borrow and best supply rate.',
    skills: ['Borrow', 'Supply', 'Rates', 'Markets'],
  },
  {
    id: 10,
    role: 'Tax Agent',
    name: 'Beatrix',
    does: 'Tracks cost basis across chains and venues.',
    skills: ['Cost Basis', 'Reports', 'Lots', 'Exports'],
  },
  {
    id: 11,
    role: 'Listing Agent',
    name: 'Dorian',
    does: 'Tracks and flags new coin listings across exchanges live.',
    skills: ['Listings', 'New Pairs', 'Exchanges', 'Alerts'],
  },
  {
    id: 12,
    role: 'Delisting Agent',
    name: 'Juno',
    does: 'Tracks and flags coins facing delisting across exchanges soon.',
    skills: ['Delistings', 'Removals', 'Exchanges', 'Alerts'],
  },
  {
    id: 13,
    role: 'Execution Agent',
    name: 'Orin',
    does: 'Routes and settles orders with minimal slippage.',
    skills: ['Routing', 'Fills', 'Slippage', 'Settlement'],
  },
  {
    id: 14,
    role: 'Liquidity Agent',
    name: 'Tobias',
    does: 'Finds the deepest venue before you size in.',
    skills: ['Depth', 'Venues', 'Slippage', 'Books'],
  },
  {
    id: 15,
    role: 'Perps Agent',
    name: 'Kite',
    does: 'Monitors derivatives markets and manages perpetual positions.',
    skills: ['Perps', 'Funding', 'Leverage', 'Orders'],
  },
  {
    id: 16,
    role: 'Options Agent',
    name: 'Cassian',
    does: 'Reads the vol surface and structures option trades.',
    skills: ['Options', 'Vol', 'Greeks', 'Spreads'],
  },
  {
    id: 17,
    role: 'Staking Agent',
    name: 'Odette',
    does: 'Finds and manages staking opportunities.',
    skills: ['Staking', 'Validators', 'Rewards', 'Unstaking'],
  },
  {
    id: 18,
    role: 'Arbitrage Agent',
    name: 'Delphine',
    does: 'Captures spreads between venues and pairs.',
    skills: ['Spreads', 'Venues', 'Latency', 'Execution'],
  },
  {
    id: 19,
    role: 'Wallet Agent',
    name: 'Caspar',
    does: 'Holds scoped keys with revocable permissions.',
    skills: ['Keys', 'Scopes', 'Approvals', 'Revocation'],
  },
  {
    id: 20,
    role: 'Bridge Agent',
    name: 'Bram',
    does: 'Finds routes and executes cross-chain asset movement.',
    skills: ['Bridging', 'Routing', 'Gas', 'Settlement'],
  },
  {
    id: 21,
    role: 'Security Agent',
    name: 'Sable',
    does: 'Screens contracts before your capital touches them.',
    skills: ['Contracts', 'Audits', 'Holders', 'Flags'],
  },
  {
    id: 22,
    role: 'Compliance Agent',
    name: 'Neve',
    does: 'Keeps every action inside your mandate.',
    skills: ['Mandates', 'Screening', 'Limits', 'Records'],
  },
  {
    id: 23,
    role: 'Operations Agent',
    name: 'Thorne',
    does: 'Keeps day-to-day workflows running without you in the loop.',
    skills: ['Workflows', 'Handoffs', 'Monitoring', 'Escalation'],
  },
  {
    id: 24,
    role: 'Supply Chain Agent',
    name: 'Rowan',
    does: 'Tracks goods from source to shelf and flags disruptions.',
    skills: ['Sourcing', 'Tracking', 'Disruptions', 'Forecasts'],
  },

  // ==========================================
  // --- LANE 2 (AGENTS 25 - 48) ---
  // Business Ops (8) + Sales, Marketing & Growth (10) + Knowledge & Prof (6)
  // ==========================================
  {
    id: 25,
    role: 'Procurement Agent',
    name: 'Althea',
    does: 'Finds and negotiates the best terms with suppliers.',
    skills: ['Sourcing', 'Quotes', 'Contracts', 'Negotiation'],
  },
  {
    id: 26,
    role: 'Inventory Agent',
    name: 'Giles',
    does: 'Watches stock levels and reorders before you run out.',
    skills: ['Stock', 'Reorders', 'Forecasts', 'Thresholds'],
  },
  {
    id: 27,
    role: 'Logistics Agent',
    name: 'Dorian',
    does: 'Plans routes and tracks shipments door to door.',
    skills: ['Routing', 'Shipments', 'Tracking', 'ETAs'],
  },
  {
    id: 28,
    role: 'Vendor Management Agent',
    name: 'Isolde',
    does: 'Evaluates vendors and keeps performance on record.',
    skills: ['Scorecards', 'Renewals', 'Performance', 'Contracts'],
  },
  {
    id: 29,
    role: 'Workforce Agent',
    name: 'Callum',
    does: 'Schedules shifts and balances workload across the team.',
    skills: ['Scheduling', 'Shifts', 'Coverage', 'Workload'],
  },
  {
    id: 30,
    role: 'Project Management Agent',
    name: 'Leona',
    does: 'Tracks tasks, deadlines and blockers across every project.',
    skills: ['Tasks', 'Timelines', 'Blockers', 'Status'],
  },
  {
    id: 31,
    role: 'Process Automation Agent',
    name: 'Ferris',
    does: 'Finds repetitive work and builds the automation for it.',
    skills: ['Workflows', 'Triggers', 'Automations', 'Rules'],
  },
  {
    id: 32,
    role: 'Quality Agent',
    name: 'Seren',
    does: 'Checks output against spec before it ships.',
    skills: ['Inspections', 'Standards', 'Defects', 'Reports'],
  },
  {
    id: 33,
    role: 'Sales Agent',
    name: 'Sterling',
    does: 'Qualifies leads and moves deals through the pipeline.',
    skills: ['Leads', 'Pipeline', 'Outreach', 'Follow-ups'],
  },
  {
    id: 34,
    role: 'Business Development Agent',
    name: 'Magnus',
    does: 'Finds partnerships and opens doors worth walking through.',
    skills: ['Partnerships', 'Outreach', 'Deals', 'Pipeline'],
  },
  {
    id: 35,
    role: 'Marketing Agent',
    name: 'Camilla',
    does: 'Plans campaigns and tracks what\'s actually converting.',
    skills: ['Campaigns', 'Channels', 'Conversion', 'Budget'],
  },
  {
    id: 36,
    role: 'Growth Agent',
    name: 'Zephyr',
    does: 'Runs experiments and doubles down on what works.',
    skills: ['Experiments', 'Funnels', 'Metrics', 'Iteration'],
  },
  {
    id: 37,
    role: 'Customer Success Agent',
    name: 'Aria',
    does: 'Watches account health and steps in before churn.',
    skills: ['Health Scores', 'Onboarding', 'Renewals', 'Churn'],
  },
  {
    id: 38,
    role: 'CRM Agent',
    name: 'Darius',
    does: 'Keeps contacts, deals and notes in sync everywhere.',
    skills: ['Contacts', 'Deals', 'Notes', 'Sync'],
  },
  {
    id: 39,
    role: 'Market Research Agent',
    name: 'Helena',
    does: 'Surveys the landscape and surfaces what customers actually want.',
    skills: ['Surveys', 'Trends', 'Segments', 'Insights'],
  },
  {
    id: 40,
    role: 'Competitive Intelligence Agent',
    name: 'Vance',
    does: 'Tracks competitors and flags moves that matter.',
    skills: ['Tracking', 'Positioning', 'Pricing', 'Alerts'],
  },
  {
    id: 41,
    role: 'Content Agent',
    name: 'Lyra',
    does: 'Drafts and schedules content across every channel.',
    skills: ['Drafts', 'Calendar', 'SEO', 'Publishing'],
  },
  {
    id: 42,
    role: 'Social Media Agent',
    name: 'Bastian',
    does: 'Posts, replies and tracks what\'s landing in real time.',
    skills: ['Posts', 'Replies', 'Scheduling', 'Analytics'],
  },
  {
    id: 43,
    role: 'Legal Agent',
    name: 'Justinian',
    does: 'Reviews filings and flags risk before you sign.',
    skills: ['Filings', 'Risk', 'Clauses', 'Review'],
  },
  {
    id: 44,
    role: 'Contract Agent',
    name: 'Lucian',
    does: 'Reads and prepares contracts and forms.',
    skills: ['Contracts', 'Forms', 'Redlines', 'Signing'],
  },
  {
    id: 45,
    role: 'Accounting Agent',
    name: 'Milo',
    does: 'Reconciles books and closes the month on time.',
    skills: ['Reconciliation', 'Ledgers', 'Close', 'Reports'],
  },
  {
    id: 46,
    role: 'HR Agent',
    name: 'Corin',
    does: 'Handles policy, onboarding and employee questions.',
    skills: ['Policy', 'Onboarding', 'Records', 'Requests'],
  },
  {
    id: 47,
    role: 'Recruiting Agent',
    name: 'Evander',
    does: 'Sources candidates and moves them through the pipeline.',
    skills: ['Sourcing', 'Screening', 'Interviews', 'Pipeline'],
  },
  {
    id: 48,
    role: 'Research Agent',
    name: 'Athena',
    does: 'Digs into a topic and returns a sourced brief.',
    skills: ['Sources', 'Synthesis', 'Briefs', 'Citations'],
  },

  // ==========================================
  // --- LANE 3 (AGENTS 49 - 72) ---
  // Knowledge & Prof (4) + Personal Life (10) + Creative & Digital (6) + Intelligence Layer (4)
  // ==========================================
  {
    id: 49,
    role: 'Learning Agent',
    name: 'Aya',
    does: 'Briefs you and drills what you need to know.',
    skills: ['Briefs', 'Drills', 'Summaries', 'Sources'],
  },
  {
    id: 50,
    role: 'Data Analyst Agent',
    name: 'Titus',
    does: 'Cleans data and surfaces the trend that matters.',
    skills: ['Queries', 'Cleaning', 'Trends', 'Dashboards'],
  },
  {
    id: 51,
    role: 'Reporting Agent',
    name: 'Sylvia',
    does: 'Builds and delivers the reports people actually read.',
    skills: ['Templates', 'Metrics', 'Delivery', 'Scheduling'],
  },
  {
    id: 52,
    role: 'Strategy Agent',
    name: 'Alaric',
    does: 'Weighs trade-offs and lays out the path forward.',
    skills: ['Trade-offs', 'Scenarios', 'Roadmaps', 'Recommendations'],
  },
  {
    id: 53,
    role: 'Personal Assistant Agent',
    name: 'Jasper',
    does: 'Handles the small stuff so you don\'t have to.',
    skills: ['Tasks', 'Reminders', 'Coordination', 'Triage'],
  },
  {
    id: 54,
    role: 'Calendar Agent',
    name: 'Bode',
    does: 'Defends your time and schedules the rest.',
    skills: ['Scheduling', 'Conflicts', 'Invites', 'Reminders'],
  },
  {
    id: 55,
    role: 'Travel Agent',
    name: 'Elio',
    does: 'Plans and books routes, flights and stays.',
    skills: ['Flights', 'Stays', 'Routes', 'Payments'],
  },
  {
    id: 56,
    role: 'Concierge Agent',
    name: 'Bianca',
    does: 'Secures tables, tickets and reservations.',
    skills: ['Tables', 'Tickets', 'Bookings', 'Requests'],
  },
  {
    id: 57,
    role: 'Shopping Agent',
    name: 'Lena',
    does: 'Sources what you want at the right price.',
    skills: ['Sourcing', 'Price', 'Checkout', 'Returns'],
  },
  {
    id: 58,
    role: 'Home Agent',
    name: 'Nils',
    does: 'Runs devices, bills and the household.',
    skills: ['Devices', 'Bills', 'Automations', 'Vendors'],
  },
  {
    id: 59,
    role: 'Fitness Agent',
    name: 'Rafe',
    does: 'Manages load, recovery and training.',
    skills: ['Training', 'Load', 'Recovery', 'Metrics'],
  },
  {
    id: 60,
    role: 'Nutrition Agent',
    name: 'Suri',
    does: 'Plans meals and tracks what you\'re actually eating.',
    skills: ['Meals', 'Macros', 'Tracking', 'Recipes'],
  },
  {
    id: 61,
    role: 'Events Agent',
    name: 'Nadia',
    does: 'Finds shows, openings and what is worth seeing.',
    skills: ['Events', 'Shows', 'Openings', 'Tickets'],
  },
  {
    id: 62,
    role: 'Errands Agent',
    name: 'Osei',
    does: 'Handles logistics, deliveries and pickups.',
    skills: ['Deliveries', 'Pickups', 'Couriers', 'Payments'],
  },
  {
    id: 63,
    role: 'Design Agent',
    name: 'DaVinci',
    does: 'Turns a brief into on-brand visuals fast.',
    skills: ['Layouts', 'Brand', 'Assets', 'Iterations'],
  },
  {
    id: 64,
    role: 'Video Agent',
    name: 'Hugo',
    does: 'Turns raw footage into clips and edits.',
    skills: ['Clips', 'Edits', 'Captions', 'Publishing'],
  },
  {
    id: 65,
    role: 'Writing Agent',
    name: 'Iris',
    does: 'Drafts copy in your voice, first pass to final.',
    skills: ['Drafts', 'Tone', 'Editing', 'Formatting'],
  },
  {
    id: 66,
    role: 'Presentation Agent',
    name: 'Cicero',
    does: 'Builds the deck so you can focus on the pitch.',
    skills: ['Slides', 'Narrative', 'Design', 'Speaker Notes'],
  },
  {
    id: 67,
    role: 'Coding Agent',
    name: 'Cyrus',
    does: 'Ships features and fixes without leaving the chat.',
    skills: ['Code', 'Debugging', 'Reviews', 'Deploys'],
  },
  {
    id: 68,
    role: 'Media Agent',
    name: 'Freya',
    does: 'Manages assets and distributes them across every channel.',
    skills: ['Assets', 'Distribution', 'Channels', 'Archiving'],
  },
  {
    id: 69,
    role: 'Memory Agent',
    name: 'Tomas',
    does: 'Keeps memory and recalls it on request.',
    skills: ['Notes', 'Memory', 'Search', 'Summaries'],
  },
  {
    id: 70,
    role: 'Planning Agent',
    name: 'Soren',
    does: 'Breaks goals into steps and keeps them on track.',
    skills: ['Goals', 'Steps', 'Milestones', 'Tracking'],
  },
  {
    id: 71,
    role: 'Decision Agent',
    name: 'Aurelius',
    does: 'Compares options and helps choose the best path.',
    skills: ['Trade-offs', 'Scenarios', 'Analysis', 'Recommendations'],
  },
  {
    id: 72,
    role: 'Chief of Staff Agent',
    name: 'Valeria',
    does: 'Coordinates every agent toward what you actually need.',
    skills: ['Coordination', 'Priorities', 'Delegation', 'Oversight'],
  },
];

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

export const RenaissanceAgentRoster: React.FC = () => {
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
