export interface AgentProfile {
  id: string;
  initial: string;
  name: string;
  role: string;
  description: string;
  category: 'Trading' | 'Onchain' | 'Finance' | 'Travel' | 'Productivity' | 'Research';
  color: string;
  badge: string;
  sampleTask: string;
  policyBound: string;
  voiceText: string;
}

export interface HashBlock {
  id: string;
  label: string;
  hash: string;
  task: string;
  timestamp: string;
  isTampered?: boolean;
}

export interface Investor {
  name: string;
  tier: string;
}

export const AGENTS_ROSTER: AgentProfile[] = [
  {
    id: 'sol',
    initial: 'S',
    name: 'Sol',
    role: 'Trading agent',
    description: 'Watches the market while you sleep, and moves only when you say so.',
    category: 'Trading',
    color: 'from-amber-500 to-orange-500',
    badge: 'CEX / DEX Limit Execution',
    sampleTask: 'Swap 500 USDC to ETH when it drops under 3,400',
    policyBound: 'Max $500/order · Slippage < 0.5% · Verified CEX/DEX only',
    voiceText: 'Threshold hit on ETH at 3,398.20. Order routed and verified onchain.'
  },
  {
    id: 'iris',
    initial: 'I',
    name: 'Iris',
    role: 'Onchain agent',
    description: 'Swaps, pays and settles onchain — inside the limits you\'ve set.',
    category: 'Onchain',
    color: 'from-indigo-500 to-cyan-500',
    badge: 'Base / L2 / x402 Native',
    sampleTask: 'Pay API endpoint 0.0021 ETH via HTTP x402',
    policyBound: 'Max $100/payment · Audited contracts only',
    voiceText: 'Settling 0.0021 ETH via x402 protocol now. Receipt signed.'
  },
  {
    id: 'kai',
    initial: 'K',
    name: 'Kai',
    role: 'Finance agent',
    description: 'Finds where your money\'s quietly leaking and calls it out.',
    category: 'Finance',
    color: 'from-emerald-500 to-teal-500',
    badge: 'Spending Intelligence',
    sampleTask: 'Flag duplicate SaaS subscriptions & recurring overdraft fees',
    policyBound: 'Read-only banking · Alert-only threshold',
    voiceText: 'Found two redundant cloud server subscriptions costing $84 monthly.'
  },
  {
    id: 'ada',
    initial: 'A',
    name: 'Ada',
    role: 'Travel agent',
    description: 'Books the whole trip — flights, stays, the details you\'d skip.',
    category: 'Travel',
    color: 'from-rose-500 to-amber-500',
    badge: 'Direct Booking Engine',
    sampleTask: 'Book SFO to JFK non-stop flight under $450 with aisle seat',
    policyBound: 'Budget cap $500 · Preferred airlines list',
    voiceText: 'Flight booked on Delta 418. Confirmation code #8F72A in your inbox.'
  },
  {
    id: 'eve',
    initial: 'E',
    name: 'Eve',
    role: 'Calendar agent',
    description: 'Keeps your day together, and moves it when things change.',
    category: 'Productivity',
    color: 'from-purple-500 to-indigo-500',
    badge: 'Conflict Resolution',
    sampleTask: 'Reschedule investor update to Thursday 3 PM without double-booking',
    policyBound: 'Calendar scope · Protected focus blocks',
    voiceText: 'Moved team sync to 3:30 PM. Protected your 2-hour morning focus block.'
  },
  {
    id: 'nora',
    initial: 'N',
    name: 'Nora',
    role: 'Inbox agent',
    description: 'Runs your inbox and drafts the replies you don\'t want to write.',
    category: 'Productivity',
    color: 'from-blue-500 to-slate-500',
    badge: 'Triage & Auto-Draft',
    sampleTask: 'Archive cold outreach and draft confirmation for partnership meeting',
    policyBound: 'Draft-only mode · Verified contacts list',
    voiceText: 'Drafted 4 replies to pending partnership inquiries for your quick review.'
  },
  {
    id: 'zara',
    initial: 'Z',
    name: 'Zara',
    role: 'Shopping agent',
    description: 'Finds it, buys it, tracks it — never lets you run out.',
    category: 'Finance',
    color: 'from-pink-500 to-rose-500',
    badge: 'Automated Procurement',
    sampleTask: 'Reorder espresso roast and desk ergonomics when supply drops',
    policyBound: 'Max $60/order · Merchant whitelist',
    voiceText: 'Espresso beans restocked at lowest price on Roaster direct. Arriving Thursday.'
  },
  {
    id: 'leo',
    initial: 'L',
    name: 'Leo',
    role: 'Research agent',
    description: 'Reads everything so you get the summary, not the search.',
    category: 'Research',
    color: 'from-teal-500 to-emerald-500',
    badge: 'Synthesis & Fact-Checking',
    sampleTask: 'Synthesize 40-page SEC 10-K filing into 5 high-impact bullet points',
    policyBound: 'Source-verified only · Zero hallucination mode',
    voiceText: 'Extracted key revenue growth drivers and risk disclosures from latest 10-K.'
  }
];

export const INVESTORS: Investor[] = [
  { name: 'Northlight Ventures', tier: 'Lead' },
  { name: 'Kestrel Capital', tier: 'Early' },
  { name: 'Anchorpoint Partners', tier: 'Growth' },
  { name: 'Solmark Digital', tier: 'Crypto' },
  { name: 'Tidewater Capital', tier: 'Early' },
  { name: 'Greywolf Ventures', tier: 'Seed' },
  { name: 'Ashford & Ko', tier: 'Partner' },
  { name: 'Vantage Point Capital', tier: 'Strategic' }
];

export const INITIAL_HASH_CHAIN: HashBlock[] = [
  { id: 'A1', label: 'Action 01', hash: '0x4f2c81…9a', task: 'Market price check ETH', timestamp: '09:40:12' },
  { id: 'A2', label: 'Action 02', hash: '0xc3d4e5…1f', task: 'Threshold condition evaluated (3,398.20)', timestamp: '09:41:00' },
  { id: 'A3', label: 'Action 03', hash: '0xa1b2c3…7e', task: 'Policy approval checked (wallet.swap)', timestamp: '09:41:02' },
  { id: 'A4', label: 'Action 04', hash: '0xe5f6a7…8b', task: 'Executed & settled on Base (0.147 ETH)', timestamp: '09:41:04' },
];

export const PRINCIPLES = [
  {
    num: '01',
    title: 'Identity is explicit',
    description: 'Every agent, every delegate, every session is a known identity — never an anonymous process.'
  },
  {
    num: '02',
    title: 'Permissions are bounded',
    description: 'Capability is granted, not assumed. If it isn\'t listed, the agent can\'t do it.'
  },
  {
    num: '03',
    title: 'Credentials are scoped',
    description: 'A key for one task is not a key for every task. Revocation is instantaneous.'
  },
  {
    num: '04',
    title: 'Actions are auditable',
    description: 'What happened is recorded in a tamper-evident cryptographic receipt nobody can quietly rewrite.'
  },
  {
    num: '05',
    title: 'Important outcomes are independently verifiable',
    description: 'You shouldn\'t have to take DopaMint\'s word for what its agent did. Every receipt is checkable onchain.'
  }
];

export const ECOSYSTEM_INTEGRATIONS = {
  communication: ['Gmail', 'Telegram', 'WhatsApp', 'iMessage (Linq)', 'Discord'],
  exchanges: ['OKX', 'Coinbase', 'Binance', 'KuCoin', 'WalletConnect', 'Base'],
  payments: ['x402 Protocol', 'Stripe', 'PayPal', 'Cash App', 'Venmo', 'Tether'],
  work: ['Google Calendar', 'Notion', 'Spotify', 'Airbnb', 'Shopify', 'GitHub']
};
