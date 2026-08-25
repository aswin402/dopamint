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
  // Finance & Markets + Crypto & Onchain + Intelligence
  // ==========================================
  {
    id: 1,
    role: 'Trading Agent',
    name: 'Vesper',
    does: 'Finds and executes opportunities across spot and perpetual markets.',
    skills: ['Spot', 'Perps', 'Orders', 'Execution'],
  },
  {
    id: 2,
    role: 'Portfolio Agent',
    name: 'Nova',
    does: 'Monitors positions and rebalances multi-asset portfolio allocation.',
    skills: ['Portfolio', 'Allocation', 'Risk', 'Rebalancing'],
  },
  {
    id: 3,
    role: 'Treasury Agent',
    name: 'Halcyon',
    does: 'Manages cash reserves, yields and liquid operating runway.',
    skills: ['Reserves', 'Runway', 'Yield', 'Reporting'],
  },
  {
    id: 4,
    role: 'Risk Agent',
    name: 'Ashe',
    does: 'Enforces policy controls and stops before any action executes.',
    skills: ['Policy', 'Limits', 'Exposure', 'Circuit Breakers'],
  },
  {
    id: 5,
    role: 'Research Agent',
    name: 'Idris',
    does: 'Synthesizes macro data, protocol research and market intelligence.',
    skills: ['Macro', 'Reports', 'Signals', 'Due Diligence'],
  },
  {
    id: 6,
    role: 'Yield Agent',
    name: 'Marlowe',
    does: 'Deploys idle capital into optimal risk-adjusted yield opportunities.',
    skills: ['APY', 'Vaults', 'Harvesting', 'Staking'],
  },
  {
    id: 7,
    role: 'DeFi Agent',
    name: 'Solene',
    does: 'Researches and interacts with decentralized liquidity protocols.',
    skills: ['Swaps', 'Lending', 'Pools', 'Routing'],
  },
  {
    id: 8,
    role: 'Payments Agent',
    name: 'Aiden',
    does: 'Automates x402 streaming, invoicing and autonomous settlements.',
    skills: ['x402', 'Streams', 'Invoicing', 'Settlements'],
  },
  {
    id: 9,
    role: 'Lending Agent',
    name: 'Kael',
    does: 'Optimizes borrowing rates, collateral health and margin ratios.',
    skills: ['Collateral', 'Margin', 'Lending', 'Health Factor'],
  },
  {
    id: 10,
    role: 'Tax Agent',
    name: 'Corin',
    does: 'Calculates tax obligations, cost basis and harvestable losses.',
    skills: ['Cost Basis', 'Loss Harvesting', 'Filing', 'Ledger'],
  },
  {
    id: 11,
    role: 'Market Intelligence Agent',
    name: 'Corvin',
    does: 'Analyzes orderflow, depth of market and exchange volume.',
    skills: ['Orderflow', 'Depth', 'Volume', 'Signals'],
  },
  {
    id: 12,
    role: 'Investment Agent',
    name: 'Cassian',
    does: 'Evaluates long-term theses, asset fundamentals and valuations.',
    skills: ['Valuation', 'Theses', 'Due Diligence', 'Allocations'],
  },
  {
    id: 13,
    role: 'Execution Agent',
    name: 'Orin',
    does: 'Routes and settles trades with smart routing and minimal slippage.',
    skills: ['Routing', 'Slippage', 'MEV Protection', 'Fills'],
  },
  {
    id: 14,
    role: 'Liquidity Agent',
    name: 'Tobias',
    does: 'Discovers deep pool venues before sizing into active positions.',
    skills: ['Liquidity', 'Venues', 'Depth', 'AMM'],
  },
  {
    id: 15,
    role: 'Perps Agent',
    name: 'Kite',
    does: 'Monitors perpetual funding rates, leverage and open interest.',
    skills: ['Perps', 'Funding', 'Leverage', 'Open Interest'],
  },
  {
    id: 16,
    role: 'Options Agent',
    name: 'Caius',
    does: 'Analyzes volatility smiles and structures multi-leg option trades.',
    skills: ['Vol Surface', 'Greeks', 'Straddles', 'Spreads'],
  },
  {
    id: 17,
    role: 'Staking Agent',
    name: 'Odette',
    does: 'Manages validator selection, rewards compounding and unstaking.',
    skills: ['Validators', 'Rewards', 'Compounding', 'Slashing'],
  },
  {
    id: 18,
    role: 'Arbitrage Agent',
    name: 'Delphine',
    does: 'Identifies and captures cross-exchange price discrepancies.',
    skills: ['Cross-Venue', 'Latency', 'Spreads', 'Flash Arbitrage'],
  },
  {
    id: 19,
    role: 'Wallet Agent',
    name: 'Bram',
    does: 'Manages multisig authorizations, key security and account state.',
    skills: ['Multisig', 'Passkeys', 'Security', 'State'],
  },
  {
    id: 20,
    role: 'Bridge Agent',
    name: 'Rhea',
    does: 'Transfers assets across chains via verified, secure cross-chain routes.',
    skills: ['Cross-Chain', 'Relays', 'Gas Timing', 'Settlement'],
  },
  {
    id: 21,
    role: 'Security Agent',
    name: 'Valen',
    does: 'Simulates contract interactions and detects vulnerability vectors.',
    skills: ['Simulation', 'Auditing', 'Protection', 'Bytecode'],
  },
  {
    id: 22,
    role: 'Compliance Agent',
    name: 'Neve',
    does: 'Ensures regulatory rules, audit trails and verifiable receipts.',
    skills: ['Audit Trail', 'KYC/AML', 'Receipts', 'Policy'],
  },
  {
    id: 23,
    role: 'Memory Agent',
    name: 'Mneme',
    does: 'Stores persistent context, preferences and long-term user memory.',
    skills: ['Context', 'Long-Term', 'Preferences', 'Retrieval'],
  },
  {
    id: 24,
    role: 'Planning Agent',
    name: 'Soren',
    does: 'Deconstructs complex user intent into multi-agent execution graphs.',
    skills: ['Decomposition', 'DAG', 'Pipelines', 'Coordination'],
  },

  // ==========================================
  // --- LANE 2 (AGENTS 25 - 48) ---
  // Business Operations + Sales, Marketing & Growth + Leadership
  // ==========================================
  {
    id: 25,
    role: 'Operations Agent',
    name: 'Thorne',
    does: 'Orchestrates daily operational workflows and organizational health.',
    skills: ['Workflows', 'KPIs', 'SOPs', 'Automation'],
  },
  {
    id: 26,
    role: 'Supply Chain Agent',
    name: 'Rowan',
    does: 'Tracks supply lead times, shipment routes and inventory flows.',
    skills: ['Tracking', 'Shipments', 'Lead Time', 'Suppliers'],
  },
  {
    id: 27,
    role: 'Procurement Agent',
    name: 'Althea',
    does: 'Evaluates vendor quotes, manages purchasing and PO approvals.',
    skills: ['Purchasing', 'Quotes', 'PO Approvals', 'Terms'],
  },
  {
    id: 28,
    role: 'Inventory Agent',
    name: 'Giles',
    does: 'Monitors stock levels, predicts depletion and triggers reorders.',
    skills: ['Stock Levels', 'Reorders', 'SKUs', 'Forecasting'],
  },
  {
    id: 29,
    role: 'Logistics Agent',
    name: 'Dorian',
    does: 'Optimizes fulfillment routes, freight carriers and delivery ETAs.',
    skills: ['Freight', 'Routing', 'Carriers', 'Fulfillment'],
  },
  {
    id: 30,
    role: 'Vendor Management Agent',
    name: 'Isolde',
    does: 'Manages vendor contracts, SLA scorecards and renewal alerts.',
    skills: ['SLAs', 'Contracts', 'Renewals', 'Scorecards'],
  },
  {
    id: 31,
    role: 'Workforce Agent',
    name: 'Callum',
    does: 'Coordinates team bandwidth, task distribution and scheduling.',
    skills: ['Bandwidth', 'Allocation', 'Staffing', 'Schedules'],
  },
  {
    id: 32,
    role: 'Project Management Agent',
    name: 'Leona',
    does: 'Tracks milestone progress, deliverables, blockers and deadlines.',
    skills: ['Milestones', 'Deliverables', 'Blockers', 'Deadlines'],
  },
  {
    id: 33,
    role: 'Process Automation Agent',
    name: 'Ferris',
    does: 'Builds and triggers automated rule-based organizational flows.',
    skills: ['Triggers', 'Webhooks', 'RPA', 'Integrations'],
  },
  {
    id: 34,
    role: 'Quality Agent',
    name: 'Seren',
    does: 'Conducts quality audits and compliance verification checklists.',
    skills: ['Audits', 'Checklists', 'QA', 'Standards'],
  },
  {
    id: 35,
    role: 'Sales Agent',
    name: 'Sterling',
    does: 'Qualifies incoming pipeline, handles outreach and closes deals.',
    skills: ['Pipelines', 'Outreach', 'Qualification', 'Closing'],
  },
  {
    id: 36,
    role: 'Business Development Agent',
    name: 'Magnus',
    does: 'Builds strategic ecosystem partnerships and integration deals.',
    skills: ['Partnerships', 'Integrations', 'Co-Marketing', 'Alliances'],
  },
  {
    id: 37,
    role: 'Marketing Agent',
    name: 'Camilla',
    does: 'Develops campaign strategy, audience messaging and product launches.',
    skills: ['Campaigns', 'Launches', 'Messaging', 'Brand'],
  },
  {
    id: 38,
    role: 'Growth Agent',
    name: 'Zephyr',
    does: 'Runs user acquisition experiments, referral loops and funnel optimization.',
    skills: ['Funnels', 'Acquisition', 'Referrals', 'A/B Testing'],
  },
  {
    id: 39,
    role: 'Customer Success Agent',
    name: 'Aria',
    does: 'Monitors customer health, retention metrics and onboarding journeys.',
    skills: ['Onboarding', 'Retention', 'NPS', 'Health Score'],
  },
  {
    id: 40,
    role: 'CRM Agent',
    name: 'Darius',
    does: 'Maintains contact databases, interaction logs and pipeline stages.',
    skills: ['Data Hygiene', 'Stages', 'Enrichment', 'Pipelines'],
  },
  {
    id: 41,
    role: 'Market Research Agent',
    name: 'Helena',
    does: 'Analyzes competitor movements, customer sentiment and market TAM.',
    skills: ['TAM', 'Surveys', 'Sentiment', 'Industry Trends'],
  },
  {
    id: 42,
    role: 'Competitive Intelligence Agent',
    name: 'Vance',
    does: 'Monitors competitor pricing, product feature releases and positioning.',
    skills: ['Benchmarking', 'Pricing', 'Feature Matrix', 'Intel'],
  },
  {
    id: 43,
    role: 'Content Agent',
    name: 'Lyra',
    does: 'Produces long-form articles, newsletters and technical documentation.',
    skills: ['Editorial', 'Newsletters', 'Guides', 'Copy'],
  },
  {
    id: 44,
    role: 'Social Media Agent',
    name: 'Bastian',
    does: 'Schedules posts, monitors engagement feeds and community velocity.',
    skills: ['Schedules', 'Engagement', 'Velocity', 'Analytics'],
  },
  {
    id: 45,
    role: 'Decision Agent',
    name: 'Aurelius',
    does: 'Evaluates trade-offs, confidence scores and decision matrices.',
    skills: ['Trade-Offs', 'Confidence', 'Risk-Reward', 'Consensus'],
  },
  {
    id: 46,
    role: 'Chief of Staff Agent',
    name: 'Valeria',
    does: 'Synthesizes multi-department updates and prioritizes action items.',
    skills: ['Briefings', 'Priorities', 'Alignment', 'Escalations'],
  },
  {
    id: 47,
    role: 'Coding Agent',
    name: 'Cyrus',
    does: 'Writes, tests, debugs and verifies software code across repositories.',
    skills: ['TypeScript', 'Solidity', 'Testing', 'Refactoring'],
  },
  {
    id: 48,
    role: 'Media Agent',
    name: 'Freya',
    does: 'Distributes multimedia assets across digital channels and feeds.',
    skills: ['Distribution', 'Feeds', 'Assets', 'Press'],
  },

  // ==========================================
  // --- LANE 3 (AGENTS 49 - 72) ---
  // Knowledge & Professional + Personal Life + Creative & Digital
  // ==========================================
  {
    id: 49,
    role: 'Legal Agent',
    name: 'Justinian',
    does: 'Reviews legal frameworks, entity governance and jurisdictional rules.',
    skills: ['Jurisdiction', 'Governance', 'Regulatory', 'Review'],
  },
  {
    id: 50,
    role: 'Contract Agent',
    name: 'Lucian',
    does: 'Parses contract terms, obligations, indemnity and redlines.',
    skills: ['Redlines', 'Indemnity', 'Obligations', 'Clauses'],
  },
  {
    id: 51,
    role: 'Accounting Agent',
    name: 'Milo',
    does: 'Reconciles balance sheets, invoices, P&L statements and ledgers.',
    skills: ['Reconciliation', 'P&L', 'Invoicing', 'General Ledger'],
  },
  {
    id: 52,
    role: 'HR Agent',
    name: 'Beatrix',
    does: 'Handles employee policies, benefits administration and compliance.',
    skills: ['Policies', 'Benefits', 'Culture', 'Compliance'],
  },
  {
    id: 53,
    role: 'Recruiting Agent',
    name: 'Evander',
    does: 'Sources top candidates, evaluates resumes and screens skillsets.',
    skills: ['Sourcing', 'Screening', 'Talent', 'Pipelines'],
  },
  {
    id: 54,
    role: 'Learning Agent',
    name: 'Athena',
    does: 'Synthesizes team learnings, training modules and knowledge bases.',
    skills: ['Knowledge Base', 'Training', 'SOPs', 'Documentation'],
  },
  {
    id: 55,
    role: 'Data Analyst Agent',
    name: 'Titus',
    does: 'Runs SQL queries, builds dashboards and extracts statistical trends.',
    skills: ['SQL', 'Dashboards', 'Metrics', 'Statistics'],
  },
  {
    id: 56,
    role: 'Reporting Agent',
    name: 'Sylvia',
    does: 'Generates executive summaries, investor decks and audit reports.',
    skills: ['Executive Briefs', 'Investor Decks', 'KPIs', 'Exports'],
  },
  {
    id: 57,
    role: 'Strategy Agent',
    name: 'Alaric',
    does: 'Formulates long-term roadmaps, game theory and competitive moats.',
    skills: ['Roadmaps', 'Moats', 'Scenarios', 'Game Theory'],
  },
  {
    id: 58,
    role: 'Research Agent',
    name: 'Elysia',
    does: 'Conducts deep-dive investigations across whitepapers and primary data.',
    skills: ['Whitepapers', 'Deep Research', 'Primary Sources', 'Syntheses'],
  },
  {
    id: 59,
    role: 'Personal Assistant Agent',
    name: 'Jasper',
    does: 'Manages personal life priorities, briefings and everyday tasks.',
    skills: ['Briefings', 'Reminders', 'Tasks', 'Follow-Ups'],
  },
  {
    id: 60,
    role: 'Calendar Agent',
    name: 'Chronos',
    does: 'Coordinates schedules, resolves meeting conflicts and sets focus time.',
    skills: ['Time Blocking', 'Invites', 'Timezones', 'Focus'],
  },
  {
    id: 61,
    role: 'Travel Agent',
    name: 'Marco',
    does: 'Books flights, manages itinerary logistics and tracks reservations.',
    skills: ['Flights', 'Itineraries', 'Hotels', 'Passports'],
  },
  {
    id: 62,
    role: 'Concierge Agent',
    name: 'Sebastian',
    does: 'Secures dining reservations, private experiences and VIP access.',
    skills: ['Reservations', 'Events', 'VIP Access', 'Bookings'],
  },
  {
    id: 63,
    role: 'Shopping Agent',
    name: 'Selene',
    does: 'Finds curated products, price comparisons and manages orders.',
    skills: ['Price Checks', 'Procurement', 'Deliveries', 'Returns'],
  },
  {
    id: 64,
    role: 'Home Agent',
    name: 'Vesta',
    does: 'Coordinates home utilities, maintenance contractors and security.',
    skills: ['Smart Home', 'Utilities', 'Maintenance', 'Services'],
  },
  {
    id: 65,
    role: 'Fitness Agent',
    name: 'Apollo',
    does: 'Designs workout regimens, tracks athletic performance and recovery.',
    skills: ['Training', 'Cardio', 'Recovery', 'Metrics'],
  },
  {
    id: 66,
    role: 'Nutrition Agent',
    name: 'Demeter',
    does: 'Plans meal nutrition, tracks macros and builds grocery schedules.',
    skills: ['Macros', 'Meal Prep', 'Dietary', 'Groceries'],
  },
  {
    id: 67,
    role: 'Events Agent',
    name: 'Clara',
    does: 'Organizes private gatherings, invites, itineraries and vendor setup.',
    skills: ['Guest Lists', 'Venues', 'Catering', 'Programs'],
  },
  {
    id: 68,
    role: 'Errands Agent',
    name: 'Felix',
    does: 'Automates routine personal chores, deliveries and renewals.',
    skills: ['Chores', 'Deliveries', 'Subscriptions', 'Tasks'],
  },
  {
    id: 69,
    role: 'Design Agent',
    name: 'DaVinci',
    does: 'Creates visual branding, UI layouts and high-end aesthetic assets.',
    skills: ['UI/UX', 'Typography', 'Figma', 'Vector Arts'],
  },
  {
    id: 70,
    role: 'Video Agent',
    name: 'Lumiere',
    does: 'Generates video storyboards, motion graphics and clip editing.',
    skills: ['Storyboards', 'Motion', 'Editing', 'Renders'],
  },
  {
    id: 71,
    role: 'Writing Agent',
    name: 'Shakespeare',
    does: 'Crafts editorial copy, persuasive narratives and product stories.',
    skills: ['Copywriting', 'Narratives', 'Editorials', 'Storytelling'],
  },
  {
    id: 72,
    role: 'Presentation Agent',
    name: 'Cicero',
    does: 'Builds pitch decks, keynote presentations and visual slides.',
    skills: ['Slide Decks', 'Storylines', 'Visuals', 'Keynotes'],
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
