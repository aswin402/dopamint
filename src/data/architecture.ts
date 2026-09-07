export interface PipelineStep {
  step: string;
  title: string;
  subtitle: string;
  tags: string[];
  timelineLabel: string;
  isPrimary?: boolean;
}

export const PIPELINE_MILESTONES: string[] = [
  'Intent recognized',
  'Route found',
  'Trade executed',
  'Confirmed',
];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    step: '01 · INTENT',
    title: 'USER INTENT',
    subtitle: 'Natural voice or text.',
    tags: ['Intent Classification', 'Entity Extraction', 'Asset Resolution'],
    timelineLabel: 'INTENT',
  },
  {
    step: '02 · ROUTE',
    title: 'DOPE',
    subtitle: 'Reads the intent, checks context, picks the plan.',
    tags: ['Model Router', 'Tool Router', 'Protocol Router'],
    timelineLabel: 'ROUTE',
  },
  {
    step: '03 · AGENT HARNESS',
    title: 'AGENT HARNESS',
    subtitle: 'Coordinates the specialist agents that get it done.',
    tags: ['Parallel Agents', 'Guardrails', 'Retries'],
    timelineLabel: 'AGENT HARNESS',
    isPrimary: true,
  },
  {
    step: '04 · EXECUTION LAYER',
    title: 'EXECUTION LAYER',
    subtitle: 'Settles on Base.',
    tags: ['x402 Pay', 'On-Chain Tx', 'Outcome'],
    timelineLabel: 'EXECUTION',
  },
];

export interface CapabilityPill {
  id: string;
  title: string;
  description: string;
  icon: 'infinity' | 'brain' | 'card' | 'chart';
}

export const CAPABILITY_PILLS: CapabilityPill[] = [
  {
    id: 'loop',
    title: 'Agent Loop',
    description: 'keeps the task running',
    icon: 'infinity',
  },
  {
    id: 'memory',
    title: 'Memory & Context',
    description: 'remembers what matters',
    icon: 'brain',
  },
  {
    id: 'x402',
    title: 'x402',
    description: 'autonomous payments',
    icon: 'card',
  },
  {
    id: 'aifi',
    title: 'AiFi',
    description: 'financial execution',
    icon: 'chart',
  },
];
