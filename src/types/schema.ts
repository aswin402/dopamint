import { z } from 'zod';

export interface SampleQA {
  question: string;
  answer: string;
}

export interface TwinProfile {
  id: string;
  name: string;
  role: string;
  category: 'All' | 'Musicians' | 'Wellness' | 'Streamers' | 'Tech' | 'Executive' | 'Comedians' | 'Creators';
  tone: string;
  bio: string;
  fans: string;
  price: string;
  isFree: boolean;
  avatar: string;
  video: string;
  voiceSampleUrl?: string;
  voiceReadingText: string;
  verified: boolean;
  latencyMs: number;
  fidelityScore: string;
  tags: string[];
  greeting: string;
  sampleQas: SampleQA[];
}

export interface LiveChatMessage {
  id: string;
  user: string;
  badge?: 'VIP' | 'SUB' | 'MOD' | 'CREATOR';
  avatar?: string;
  message: string;
  timestamp: string;
  isTip?: boolean;
  tipAmount?: number;
}

export interface CommunityPost {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  content: string;
  timeAgo: string;
  likes: number;
  retweets: number;
  comments: number;
  views: string;
  verified: boolean;
}

export interface StudioConfig {
  step: number;
  name: string;
  profession: string;
  vibe: string;
  communicationStyle: string;
  voiceSampleRecorded: boolean;
  photosUploaded: number;
  knowledgeFiles: string[];
  pricePerMonth: number;
  isCompleted: boolean;
}

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['admin', 'user', 'guest']),
});

export type User = z.infer<typeof UserSchema>;
