export interface AgentProfile {
  id: string;
  name: string;
  role: string;
  category: string;
  initial: string;
  description: string;
  voiceText: string;
}

export const DOPAMINT_AGENTS: AgentProfile[] = [
  {
    id: 'sol',
    name: 'Sol',
    role: 'Trading agent',
    category: 'Trading',
    initial: 'S',
    description: 'Watches the market while you sleep. Only moves when you say so.',
    voiceText: "Watching the market while you sleep. Swapping 500 USDC to ETH on Base L2 — inside your limits.",
  },
  {
    id: 'iris',
    name: 'Iris',
    role: 'Onchain agent',
    category: 'Onchain',
    initial: 'I',
    description: 'Swaps, pays, settles — always inside your limits.',
    voiceText: "Settling HTTP 402 challenge for 0.0021 ETH. No checkout page needed.",
  },
  {
    id: 'kai',
    name: 'Kai',
    role: 'Finance agent',
    category: 'Finance',
    initial: 'K',
    description: "Finds where your money's quietly leaking and says something.",
    voiceText: "Found 3 recurring subscriptions unused for 60 days. Flagged for review.",
  },
  {
    id: 'ada',
    name: 'Ada',
    role: 'Travel agent',
    category: 'Travel',
    initial: 'A',
    description: 'Books the whole trip, including the boring parts.',
    voiceText: "Booked table for 6 at Kiln this Friday 7:30pm. Deposit $40, under your cap.",
  },
  {
    id: 'eve',
    name: 'Eve',
    role: 'Calendar agent',
    category: 'Calendar',
    initial: 'E',
    description: "Keeps your day together and reshuffles when it isn't.",
    voiceText: "Rescheduled the 4pm sync and moved your focus blocks to preserve evening downtime.",
  },
  {
    id: 'nora',
    name: 'Nora',
    role: 'Inbox agent',
    category: 'Inbox',
    initial: 'N',
    description: 'Runs your inbox and writes the replies you keep avoiding.',
    voiceText: "Triaged 28 unread emails, drafted replies for the top 3 priority threads.",
  },
  {
    id: 'zara',
    name: 'Zara',
    role: 'Shopping agent',
    category: 'Shopping',
    initial: 'Z',
    description: 'Finds it, buys it, tracks it. You never run out.',
    voiceText: "Tracked down the replacement part with 2-day delivery and signed receipt.",
  },
  {
    id: 'leo',
    name: 'Leo',
    role: 'Research agent',
    category: 'Research',
    initial: 'L',
    description: 'Reads everything so you just get the answer.',
    voiceText: "Synthesized 14 technical research papers into a 3-bullet decision summary.",
  },
];

export const REAL_ASKS = [
  'split the dinner bill six ways and Venmo everyone',
  'grab me a flight to Austin Friday, aisle seat',
  "tell my landlord the sink's still broken",
  'cancel the 4pm and get me home before traffic',
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
