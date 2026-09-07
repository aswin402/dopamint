export interface ChatMessage {
  stage: number;
  sender: 'agent' | 'user';
  text?: string;
  time: string;
  isCard?: 'trade' | 'take-profit';
  tradeDetails?: {
    symbol: string;
    entryPrice: string;
    amount: string;
  };
}

export const NOTIFICATION_DATA = {
  title: 'New Listing Agent',
  time: 'now',
  message: 'yo, i just bought that $XX coin the moment it got launched 🚀',
};

export const CHAT_MESSAGES: ChatMessage[] = [
  {
    stage: 1,
    sender: 'agent',
    text: 'yo, i just bought that $XX coin the moment it got launched 🚀',
    time: '9:41 AM',
  },
  {
    stage: 2,
    sender: 'user',
    text: "haha nice! what's the entry?",
    time: '9:41 AM',
  },
  {
    stage: 3,
    sender: 'agent',
    isCard: 'trade',
    tradeDetails: {
      symbol: '$XX',
      entryPrice: '$0.0214',
      amount: '4,000 XX',
    },
    time: '9:41 AM',
  },
  {
    stage: 4,
    sender: 'user',
    text: "looks good. what's the plan?",
    time: '9:41 AM',
  },
  {
    stage: 5,
    sender: 'agent',
    text: 'riding the momentum. will take profit at 2x first 🎯',
    time: '9:41 AM',
  },
  {
    stage: 6,
    sender: 'user',
    text: 'sounds good. keep me posted.',
    time: '9:41 AM',
  },
  {
    stage: 7,
    sender: 'agent',
    text: 'we hit the target! 🎯\ntaking profit now...',
    time: '10:14 AM',
  },
  {
    stage: 8,
    sender: 'agent',
    isCard: 'take-profit',
    time: '10:14 AM',
  },
  {
    stage: 9,
    sender: 'agent',
    text: 'profit locked in! 💰\nlet it run with the remaining bag?',
    time: '10:14 AM',
  },
  {
    stage: 10,
    sender: 'user',
    text: 'perfect. let it run. 🙌',
    time: '10:15 AM',
  },
];
