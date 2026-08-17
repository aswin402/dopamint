export interface AgentProfile {
  id: string;
  name: string;
  role: string;
  category: string;
  initial: string;
  description: string;
  voiceText: string;
  color?: string;
  sampleTask?: string;
}

export const DOPAMINT_AGENTS: AgentProfile[] = [
  {
    id: 'sol',
    name: 'Sol',
    role: 'Trading agent',
    category: 'Trading',
    initial: 'S',
    description: 'Watches the market while you sleep. Only moves when you say so.',
    voiceText: 'Watching the market while you sleep. Only moves when you say so.',
    color: 'from-amber-500 to-orange-600',
    sampleTask: 'Rebalance portfolio if ETH drops below $3,200',
  },
  {
    id: 'iris',
    name: 'Iris',
    role: 'Onchain agent',
    category: 'Onchain',
    initial: 'I',
    description: 'Swaps, pays, settles — always inside your limits.',
    voiceText: 'Swaps, pays, settles — always inside your limits.',
    color: 'from-blue-500 to-indigo-600',
    sampleTask: 'Swap 500 USDC to SOL across lowest fee DEX route',
  },
  {
    id: 'kai',
    name: 'Kai',
    role: 'Finance agent',
    category: 'Finance',
    initial: 'K',
    description: "Finds where your money's quietly leaking and says something.",
    voiceText: "Finds where your money's quietly leaking and says something.",
    color: 'from-emerald-500 to-teal-600',
    sampleTask: 'Audit inactive SaaS trials and request cancellations',
  },
  {
    id: 'ada',
    name: 'Ada',
    role: 'Travel agent',
    category: 'Travel',
    initial: 'A',
    description: 'Books the whole trip, including the boring parts.',
    voiceText: 'Books the whole trip, including the boring parts.',
    color: 'from-purple-500 to-pink-600',
    sampleTask: 'Book direct flight SFO to AUS aisle seat under $400',
  },
  {
    id: 'eve',
    name: 'Eve',
    role: 'Calendar agent',
    category: 'Calendar',
    initial: 'E',
    description: "Keeps your day together and reshuffles when it isn't.",
    voiceText: "Keeps your day together and reshuffles when it isn't.",
    color: 'from-rose-500 to-red-600',
    sampleTask: 'Reschedule Thursday afternoon calls for focus block',
  },
  {
    id: 'nora',
    name: 'Nora',
    role: 'Inbox agent',
    category: 'Inbox',
    initial: 'N',
    description: 'Runs your inbox and writes the replies you keep avoiding.',
    voiceText: 'Runs your inbox and writes the replies you keep avoiding.',
    color: 'from-cyan-500 to-blue-600',
    sampleTask: 'Draft polite follow-ups for unresolved client threads',
  },
  {
    id: 'zara',
    name: 'Zara',
    role: 'Shopping agent',
    category: 'Shopping',
    initial: 'Z',
    description: 'Finds it, buys it, tracks it. You never run out.',
    voiceText: 'Finds it, buys it, tracks it. You never run out.',
    color: 'from-yellow-500 to-amber-600',
    sampleTask: 'Reorder espresso beans when stock runs low',
  },
  {
    id: 'leo',
    name: 'Leo',
    role: 'Research agent',
    category: 'Research',
    initial: 'L',
    description: 'Reads everything so you just get the answer.',
    voiceText: 'Reads everything so you just get the answer.',
    color: 'from-violet-500 to-purple-600',
    sampleTask: 'Summarize 40-page SEC filing into 3 key bullet points',
  },
];

export const AGENTS_ROSTER = DOPAMINT_AGENTS;

export const REAL_ASKS = [
  'split the dinner bill six ways and Venmo everyone',
  'grab me a flight to Austin Friday, aisle seat',
  "tell my landlord the sink's still broken",
  'cancel the 4pm and get me home before traffic',
];

export const ALERTS_LIST = [
  'ETH crossed $3,400',
  'BTC steady above $61,000',
  'New listing: $NBLK → Coinbase',
  'SOL down 6% in the last hour',
];

export const ECOSYSTEM_ROW_1 = [
  'Gmail',
  'Telegram',
  'WhatsApp',
  'iMessage',
  'Discord',
  'Slack',
  'Notion',
  'GitHub',
  'Spotify',
  'Airbnb',
];

export const ECOSYSTEM_ROW_2 = [
  'Coinbase',
  'Binance',
  'OKX',
  'KuCoin',
  'WalletConnect',
  'Base',
  'Stripe',
  'PayPal',
  'Venmo',
  'Shopify',
];

export const ECOSYSTEM_INTEGRATIONS = {
  communication: ['Gmail', 'WhatsApp', 'iMessage', 'Telegram', 'Slack', 'Discord'],
  exchanges: ['Coinbase', 'Binance', 'OKX', 'Uniswap', 'Base', 'Jupiter'],
  payments: ['Stripe', 'PayPal', 'Venmo', 'Apple Pay', 'Shopify'],
  work: ['Notion', 'Google Drive', 'GitHub', 'Linear', 'Figma', 'Slack'],
};

export interface HashBlock {
  id: number;
  blockNumber: number;
  hash: string;
  previousHash: string;
  timestamp: string;
  agent: string;
  action: string;
  task: string;
  verified: boolean;
  isTampered?: boolean;
}

export const INITIAL_HASH_CHAIN: HashBlock[] = [
  {
    id: 104829,
    blockNumber: 104829,
    hash: '0x7f9a...3b21',
    previousHash: '0x1c4d...8e90',
    timestamp: '2s ago',
    agent: 'Sol (Portfolio)',
    action: 'DEX Route Settled: 0.5 ETH -> USDC',
    task: 'DEX Route Settled: 0.5 ETH -> USDC',
    verified: true,
  },
  {
    id: 104828,
    blockNumber: 104828,
    hash: '0x1c4d...8e90',
    previousHash: '0x8a3f...12a4',
    timestamp: '14s ago',
    agent: 'Ada (Travel)',
    action: 'Flight Booking SFO->AUS Reserved',
    task: 'Flight Booking SFO->AUS Reserved',
    verified: true,
  },
  {
    id: 104827,
    blockNumber: 104827,
    hash: '0x8a3f...12a4',
    previousHash: '0x4e2b...99c7',
    timestamp: '1m ago',
    agent: 'Rex (Security)',
    action: 'Daily Spend Limit Policy Verified',
    task: 'Daily Spend Limit Policy Verified',
    verified: true,
  },
];

export interface Principle {
  id: number;
  num: string;
  title: string;
  desc: string;
  description: string;
  tag: string;
}

export const PRINCIPLES: Principle[] = [
  {
    id: 1,
    num: '01',
    title: 'Zero Unsanctioned Execution',
    desc: 'Agents propose actions within cryptographic bounds. Every transaction over limits requires direct human signoff.',
    description: 'Agents propose actions within cryptographic bounds. Every transaction over limits requires direct human signoff.',
    tag: 'AUTHORITY',
  },
  {
    id: 2,
    num: '02',
    title: 'Ephemeral Session Sandboxing',
    desc: 'Each agent runs in an isolated WebAssembly enclave with zero persistent ambient access to sensitive private keys.',
    description: 'Each agent runs in an isolated WebAssembly enclave with zero persistent ambient access to sensitive private keys.',
    tag: 'ISOLATION',
  },
  {
    id: 3,
    num: '03',
    title: 'Verifiable Audit Chain',
    desc: 'Every intent, authorization, and execution produces an immutable Merkle receipt for cryptographic verification.',
    description: 'Every intent, authorization, and execution produces an immutable Merkle receipt for cryptographic verification.',
    tag: 'EVIDENCE',
  },
  {
    id: 4,
    num: '04',
    title: 'Full Memory Sovereignty',
    desc: 'You own, inspect, and can delete any memories or context vector shards your agents accumulate at any moment.',
    description: 'You own, inspect, and can delete any memories or context vector shards your agents accumulate at any moment.',
    tag: 'SOVEREIGNTY',
  },
];

export interface Investor {
  name: string;
}

export const INVESTORS: Investor[] = [
  { name: 'Founders Fund' },
  { name: 'Andreessen Horowitz' },
  { name: 'Paradigm' },
  { name: 'Sequoia' },
  { name: 'Union Square Ventures' },
  { name: 'Polychain Capital' },
];
