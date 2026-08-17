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
    voiceText: "Watching the market while you sleep. Only moves when you say so.",
  },
  {
    id: 'iris',
    name: 'Iris',
    role: 'Onchain agent',
    category: 'Onchain',
    initial: 'I',
    description: 'Swaps, pays, settles — always inside your limits.',
    voiceText: "Swaps, pays, settles — always inside your limits.",
  },
  {
    id: 'kai',
    name: 'Kai',
    role: 'Finance agent',
    category: 'Finance',
    initial: 'K',
    description: "Finds where your money's quietly leaking and says something.",
    voiceText: "Finds where your money's quietly leaking and says something.",
  },
  {
    id: 'ada',
    name: 'Ada',
    role: 'Travel agent',
    category: 'Travel',
    initial: 'A',
    description: 'Books the whole trip, including the boring parts.',
    voiceText: "Books the whole trip, including the boring parts.",
  },
  {
    id: 'eve',
    name: 'Eve',
    role: 'Calendar agent',
    category: 'Calendar',
    initial: 'E',
    description: "Keeps your day together and reshuffles when it isn't.",
    voiceText: "Keeps your day together and reshuffles when it isn't.",
  },
  {
    id: 'nora',
    name: 'Nora',
    role: 'Inbox agent',
    category: 'Inbox',
    initial: 'N',
    description: 'Runs your inbox and writes the replies you keep avoiding.',
    voiceText: "Runs your inbox and writes the replies you keep avoiding.",
  },
  {
    id: 'zara',
    name: 'Zara',
    role: 'Shopping agent',
    category: 'Shopping',
    initial: 'Z',
    description: 'Finds it, buys it, tracks it. You never run out.',
    voiceText: "Finds it, buys it, tracks it. You never run out.",
  },
  {
    id: 'leo',
    name: 'Leo',
    role: 'Research agent',
    category: 'Research',
    initial: 'L',
    description: 'Reads everything so you just get the answer.',
    voiceText: "Reads everything so you just get the answer.",
  },
];

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
