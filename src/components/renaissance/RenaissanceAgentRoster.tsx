import React from 'react';

export interface AgentCardData {
  id: number;
  role: string;
  name: string;
  does: string;
  skills: string[];
}

export const ALL_72_AGENTS: AgentCardData[] = [
  // --- LANE 1 (AGENTS 1 - 24) ---
  {
    id: 1,
    role: 'Trading Agent',
    name: 'Vesper',
    does: 'Finds and executes opportunities across spot and perpetual markets.',
    skills: ['Spot', 'Perps', 'Orders', 'Market Data'],
  },
  {
    id: 2,
    role: 'Perps Agent',
    name: 'Kite',
    does: 'Monitors derivatives markets and manages perpetual positions.',
    skills: ['Perps', 'Funding', 'Leverage', 'Orders'],
  },
  {
    id: 3,
    role: 'DeFi Agent',
    name: 'Solene',
    does: 'Researches and executes strategies across decentralized finance.',
    skills: ['Swaps', 'Yield', 'Lending', 'Liquidity'],
  },
  {
    id: 4,
    role: 'Yield Agent',
    name: 'Marlowe',
    does: 'Deploys idle capital into the best available yield.',
    skills: ['Vaults', 'APY', 'Deposits', 'Exits'],
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
    role: 'Portfolio Agent',
    name: 'Nova',
    does: 'Monitors positions and helps manage allocation.',
    skills: ['Portfolio', 'Risk', 'Allocation', 'Rebalancing'],
  },
  {
    id: 7,
    role: 'Market Intel Agent',
    name: 'Corvin',
    does: 'Reads orderflow and surfaces what is actually moving.',
    skills: ['Orderflow', 'Depth', 'Flows', 'Alerts'],
  },
  {
    id: 8,
    role: 'Risk Agent',
    name: 'Ashe',
    does: 'Enforces the limits you set before anything executes.',
    skills: ['Caps', 'Policy', 'Exposure', 'Stops'],
  },
  {
    id: 9,
    role: 'Execution Agent',
    name: 'Orin',
    does: 'Routes and settles orders with minimal slippage.',
    skills: ['Routing', 'Fills', 'Slippage', 'Settlement'],
  },
  {
    id: 10,
    role: 'Upbit Agent',
    name: 'Juno',
    does: 'Trades and monitors KRW markets on Upbit.',
    skills: ['Upbit', 'KRW', 'Listings', 'Orders'],
  },
  {
    id: 11,
    role: 'Basis Agent',
    name: 'Rhea',
    does: 'Harvests spot–futures carry when the spread pays.',
    skills: ['Basis', 'Carry', 'Hedging', 'Rolls'],
  },
  {
    id: 12,
    role: 'Liquidity Agent',
    name: 'Tobias',
    does: 'Finds the deepest venue before you size in.',
    skills: ['Depth', 'Venues', 'Slippage', 'Books'],
  },
  {
    id: 13,
    role: 'Hedging Agent',
    name: 'Wren',
    does: 'Covers delta when your exposure drifts.',
    skills: ['Hedging', 'Delta', 'Shorts', 'Options'],
  },
  {
    id: 14,
    role: 'Options Agent',
    name: 'Cassian',
    does: 'Reads the vol surface and structures option trades.',
    skills: ['Options', 'Vol', 'Greeks', 'Spreads'],
  },
  {
    id: 15,
    role: 'Stables Agent',
    name: 'Lyra',
    does: 'Watches pegs and rotates stable exposure.',
    skills: ['Stables', 'Pegs', 'Rotation', 'Risk'],
  },
  {
    id: 16,
    role: 'Bridge Agent',
    name: 'Bram',
    does: 'Finds routes and executes cross-chain asset movement.',
    skills: ['Bridging', 'Routing', 'Gas', 'Settlement'],
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
    role: 'Gas Agent',
    name: 'Ferris',
    does: 'Times transactions for the cheapest execution.',
    skills: ['Gas', 'Fees', 'Timing', 'Nonces'],
  },
  {
    id: 19,
    role: 'Governance Agent',
    name: 'Isolde',
    does: 'Tracks proposals and votes your positions.',
    skills: ['Proposals', 'Votes', 'Delegation', 'Forums'],
  },
  {
    id: 20,
    role: 'Treasury Agent',
    name: 'Halcyon',
    does: 'Manages runway with laddered, liquid positions.',
    skills: ['Ladders', 'Runway', 'T-Bills', 'Reporting'],
  },
  {
    id: 21,
    role: 'Airdrop Agent',
    name: 'Petra',
    does: 'Farms eligibility and claims what you earned.',
    skills: ['Eligibility', 'Farming', 'Claims', 'Wallets'],
  },
  {
    id: 22,
    role: 'NFT Agent',
    name: 'Silas',
    does: 'Watches floors and executes on rarity.',
    skills: ['Floors', 'Rarity', 'Bids', 'Listings'],
  },
  {
    id: 23,
    role: 'Sentiment Agent',
    name: 'Maeve',
    does: 'Measures social velocity before price catches up.',
    skills: ['Social', 'Velocity', 'Narratives', 'Alerts'],
  },
  {
    id: 24,
    role: 'Whale Agent',
    name: 'Anton',
    does: 'Tracks large wallets and follows the flow.',
    skills: ['Wallets', 'Flows', 'Clusters', 'Alerts'],
  },

  // --- LANE 2 (AGENTS 25 - 48) ---
  {
    id: 25,
    role: 'Arbitrage Agent',
    name: 'Delphine',
    does: 'Captures spreads between venues and pairs.',
    skills: ['Spreads', 'Venues', 'Latency', 'Execution'],
  },
  {
    id: 26,
    role: 'MEV Guard Agent',
    name: 'Roque',
    does: 'Protects your transactions from predatory flow.',
    skills: ['Private Relays', 'Simulation', 'Slippage', 'Routing'],
  },
  {
    id: 27,
    role: 'Compliance Agent',
    name: 'Neve',
    does: 'Keeps every action inside your mandate.',
    skills: ['Mandates', 'Screening', 'Limits', 'Records'],
  },
  {
    id: 28,
    role: 'Custody Agent',
    name: 'Caspar',
    does: 'Holds scoped keys with revocable permissions.',
    skills: ['Keys', 'Scopes', 'Approvals', 'Revocation'],
  },
  {
    id: 29,
    role: 'Receipts Agent',
    name: 'Thalia',
    does: 'Signs and stores a record of every action.',
    skills: ['Receipts', 'Signatures', 'Audit', 'Exports'],
  },
  {
    id: 30,
    role: 'Onboarding Agent',
    name: 'Ozan',
    does: 'Gets wallets, keys and rails ready to use.',
    skills: ['Wallets', 'Setup', 'Funding', 'Permissions'],
  },
  {
    id: 31,
    role: 'Tax Agent',
    name: 'Beatrix',
    does: 'Tracks cost basis across chains and venues.',
    skills: ['Cost Basis', 'Reports', 'Lots', 'Exports'],
  },
  {
    id: 32,
    role: 'Macro Agent',
    name: 'Lucien',
    does: 'Reads rates and liquidity for regime shifts.',
    skills: ['Rates', 'Liquidity', 'Regimes', 'Calendars'],
  },
  {
    id: 33,
    role: 'Catalyst Agent',
    name: 'Ines',
    does: 'Tracks unlocks, listings and events that move price.',
    skills: ['Calendar', 'Unlocks', 'Events', 'Alerts'],
  },
  {
    id: 34,
    role: 'Listings Agent',
    name: 'Dorian',
    does: 'Catches new pairs the moment they go live.',
    skills: ['Listings', 'New Pairs', 'Entries', 'Caps'],
  },
  {
    id: 35,
    role: 'Rug Screen Agent',
    name: 'Sable',
    does: 'Screens contracts before your capital touches them.',
    skills: ['Contracts', 'Audits', 'Holders', 'Flags'],
  },
  {
    id: 36,
    role: 'Lending Agent',
    name: 'Emory',
    does: 'Finds the cheapest borrow and best supply rate.',
    skills: ['Borrow', 'Supply', 'Rates', 'Markets'],
  },
  {
    id: 37,
    role: 'Collateral Agent',
    name: 'Verity',
    does: 'Guards your LTV before the market does.',
    skills: ['LTV', 'Collateral', 'Top-ups', 'Alerts'],
  },
  {
    id: 38,
    role: 'Liquidation Agent',
    name: 'Kestrel',
    does: 'Defends margin when positions come under pressure.',
    skills: ['Margin', 'Defence', 'Unwinds', 'Alerts'],
  },
  {
    id: 39,
    role: 'TWAP Agent',
    name: 'Fenn',
    does: 'Slices large orders across time and venues.',
    skills: ['TWAP', 'Schedules', 'Slicing', 'Fills'],
  },
  {
    id: 40,
    role: 'Rebalance Agent',
    name: 'Mira',
    does: 'Holds your portfolio to its target weights.',
    skills: ['Weights', 'Drift', 'Rebalancing', 'Swaps'],
  },
  {
    id: 41,
    role: 'Alerts Agent',
    name: 'Otto',
    does: 'Watches thresholds and tells you the moment they break.',
    skills: ['Thresholds', 'Watchlists', 'Alerts', 'Triggers'],
  },
  {
    id: 42,
    role: 'Correlation Agent',
    name: 'Sunniva',
    does: 'Flags when pairs stop moving together.',
    skills: ['Correlation', 'Drift', 'Pairs', 'Signals'],
  },
  {
    id: 43,
    role: 'Backtest Agent',
    name: 'Ravi',
    does: 'Proves a strategy before it goes live.',
    skills: ['Backtests', 'Metrics', 'Sims', 'Reports'],
  },
  {
    id: 44,
    role: 'Journal Agent',
    name: 'Cleo',
    does: 'Reviews your trades and tells you what worked.',
    skills: ['Journal', 'Reviews', 'Stats', 'Notes'],
  },
  {
    id: 45,
    role: 'Funding Agent',
    name: 'Gideon',
    does: 'Harvests funding on delta-neutral positions.',
    skills: ['Funding', 'Carry', 'Neutral', 'Rolls'],
  },
  {
    id: 46,
    role: 'RWA Agent',
    name: 'Noor',
    does: 'Accesses tokenised real-world yield.',
    skills: ['RWA', 'Tokenised', 'Yield', 'Custody'],
  },
  {
    id: 47,
    role: 'Payments Agent',
    name: 'Emeric',
    does: 'Sends and receives stable value autonomously.',
    skills: ['Payments', 'x402', 'Transfers', 'Invoices'],
  },
  {
    id: 48,
    role: 'Fiat Rails Agent',
    name: 'Zosia',
    does: 'Moves value on and off ramp.',
    skills: ['On-ramp', 'Off-ramp', 'Banks', 'KYC'],
  },

  // --- LANE 3 (AGENTS 49 - 72) ---
  {
    id: 49,
    role: 'Chain Watch Agent',
    name: 'Adric',
    does: 'Monitors mempools and chain state.',
    skills: ['Mempool', 'Blocks', 'State', 'Alerts'],
  },
  {
    id: 50,
    role: 'Vault Agent',
    name: 'Perrin',
    does: 'Auto-compounds positions while you sleep.',
    skills: ['Vaults', 'Compounding', 'Harvests', 'Exits'],
  },
  {
    id: 51,
    role: 'Points Agent',
    name: 'Selby',
    does: 'Tracks incentives and points programs.',
    skills: ['Points', 'Incentives', 'Seasons', 'Claims'],
  },
  {
    id: 52,
    role: 'Narrative Agent',
    name: 'Ilona',
    does: 'Rotates exposure with the sector in play.',
    skills: ['Sectors', 'Rotation', 'Narratives', 'Baskets'],
  },
  {
    id: 53,
    role: 'Travel Agent',
    name: 'Elio',
    does: 'Plans and books routes, flights and stays.',
    skills: ['Flights', 'Stays', 'Routes', 'Payments'],
  },
  {
    id: 54,
    role: 'Concierge Agent',
    name: 'Bianca',
    does: 'Secures tables, tickets and reservations.',
    skills: ['Tables', 'Tickets', 'Bookings', 'Requests'],
  },
  {
    id: 55,
    role: 'Culture Agent',
    name: 'Nadia',
    does: 'Finds shows, openings and what is worth seeing.',
    skills: ['Events', 'Shows', 'Openings', 'Tickets'],
  },
  {
    id: 56,
    role: 'Media Agent',
    name: 'Hugo',
    does: 'Turns raw footage into clips and edits.',
    skills: ['Clips', 'Edits', 'Captions', 'Publishing'],
  },
  {
    id: 57,
    role: 'Inbox Agent',
    name: 'Iris',
    does: 'Triages mail and drafts your replies.',
    skills: ['Triage', 'Drafts', 'Follow-ups', 'Rules'],
  },
  {
    id: 58,
    role: 'Calendar Agent',
    name: 'Bode',
    does: 'Defends your time and schedules the rest.',
    skills: ['Scheduling', 'Conflicts', 'Invites', 'Reminders'],
  },
  {
    id: 59,
    role: 'Shopping Agent',
    name: 'Lena',
    does: 'Sources what you want at the right price.',
    skills: ['Sourcing', 'Price', 'Checkout', 'Returns'],
  },
  {
    id: 60,
    role: 'Fitness Agent',
    name: 'Rafe',
    does: 'Manages load, recovery and training.',
    skills: ['Training', 'Load', 'Recovery', 'Metrics'],
  },
  {
    id: 61,
    role: 'Kitchen Agent',
    name: 'Suri',
    does: 'Plans menus and places the orders.',
    skills: ['Menus', 'Groceries', 'Orders', 'Recipes'],
  },
  {
    id: 62,
    role: 'Notes Agent',
    name: 'Tomas',
    does: 'Keeps memory and recalls it on request.',
    skills: ['Notes', 'Memory', 'Search', 'Summaries'],
  },
  {
    id: 63,
    role: 'Study Agent',
    name: 'Aya',
    does: 'Briefs you and drills what you need to know.',
    skills: ['Briefs', 'Drills', 'Summaries', 'Sources'],
  },
  {
    id: 64,
    role: 'Home Agent',
    name: 'Nils',
    does: 'Runs devices, bills and the household.',
    skills: ['Devices', 'Bills', 'Automations', 'Vendors'],
  },
  {
    id: 65,
    role: 'Deals Agent',
    name: 'Priya',
    does: 'Catches drops, coupons and price cuts.',
    skills: ['Deals', 'Coupons', 'Drops', 'Alerts'],
  },
  {
    id: 66,
    role: 'Docs Agent',
    name: 'Cyrus',
    does: 'Reads and prepares contracts and forms.',
    skills: ['Contracts', 'Forms', 'Redlines', 'Signing'],
  },
  {
    id: 67,
    role: 'Music Agent',
    name: 'Mavis',
    does: 'Builds sets and finds what you\'d like next.',
    skills: ['Sets', 'Discovery', 'Playlists', 'Tickets'],
  },
  {
    id: 68,
    role: 'Errands Agent',
    name: 'Osei',
    does: 'Handles logistics, deliveries and pickups.',
    skills: ['Deliveries', 'Pickups', 'Couriers', 'Payments'],
  },
  {
    id: 69,
    role: 'Scheduling Agent',
    name: 'Tamsin',
    does: 'Coordinates desks, people and time zones.',
    skills: ['Scheduling', 'Desks', 'Zones', 'Invites'],
  },
  {
    id: 70,
    role: 'Support Agent',
    name: 'Ruslan',
    does: 'Triages accounts and resolves issues.',
    skills: ['Triage', 'Accounts', 'Tickets', 'Escalation'],
  },
  {
    id: 71,
    role: 'Screener Agent',
    name: 'Amalia',
    does: 'Screens markets for volume anomalies.',
    skills: ['Screening', 'Volume', 'Anomalies', 'Filters'],
  },
  {
    id: 72,
    role: 'Settlement Agent',
    name: 'Dov',
    does: 'Broadcasts, confirms and reconciles.',
    skills: ['Broadcast', 'Nonces', 'Confirms', 'Reconcile'],
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
    <section id="agents" className="w-full bg-[#f7f3ef] pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden relative z-20">
      
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16">
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
              The Head of Agents turning your intent into action across a network of specialized agents.
            </p>
          </div>

        </div>
      </div>

      {/* =========================================================================
          THREE MARQUEE LANES (72 AGENTS)
          ========================================================================= */}
      <div className="relative w-full space-y-2 sm:space-y-3 overflow-hidden">
        
        {/* Soft edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#f7f3ef] via-[#f7f3ef]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#f7f3ef] via-[#f7f3ef]/80 to-transparent z-10" />

        {/* --- LANE 1: MOVES LEFT --- */}
        <div className="flex w-full overflow-hidden py-3 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 py-1 hover:[animation-play-state:paused]">
            {LANE_1.map((agent) => (
              <AgentCard key={`lane1-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 py-1 hover:[animation-play-state:paused]" aria-hidden="true">
            {LANE_1.map((agent) => (
              <AgentCard key={`lane1-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

        {/* --- LANE 2: MOVES RIGHT --- */}
        <div className="flex w-full overflow-hidden py-3 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 py-1 hover:[animation-play-state:paused]">
            {LANE_2.map((agent) => (
              <AgentCard key={`lane2-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-right shrink-0 py-1 hover:[animation-play-state:paused]" aria-hidden="true">
            {LANE_2.map((agent) => (
              <AgentCard key={`lane2-dup-${agent.id}`} agent={agent} />
            ))}
          </div>
        </div>

        {/* --- LANE 3: MOVES LEFT --- */}
        <div className="flex w-full overflow-hidden py-3 sm:py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 py-1 hover:[animation-play-state:paused]">
            {LANE_3.map((agent) => (
              <AgentCard key={`lane3-${agent.id}`} agent={agent} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 animate-marquee-left shrink-0 py-1 hover:[animation-play-state:paused]" aria-hidden="true">
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
