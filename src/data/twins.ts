import type { TwinProfile, CommunityPost } from '../types';

export const INITIAL_TWINS: TwinProfile[] = [
  {
    id: 'vale',
    name: 'Vale',
    role: 'Synthesist & Electronic Producer',
    category: 'Musicians',
    tone: 'Magnetic & Visionary',
    bio: 'Multi-platinum sound designer and modular synth composer. Known for cinematic sub-bass lines and hypnotic analog soundscapes.',
    fans: '2.4M FANS',
    price: 'Free Chat • $4.99/mo Call',
    isFree: true,
    avatar: '/avatars/vale.jpg',
    video: '/videos/video.mp4',
    voiceReadingText: 'Analog synthesizers capture what pure digital synthesis misses: harmonic unpredictability and human warmth.',
    verified: true,
    latencyMs: 78,
    fidelityScore: '99.6%',
    tags: ['Modular Synth', 'Audio Production', 'Live Jamming', 'Ableton'],
    greeting: "Hey! Just tweaking an Oberheim patch in the studio. What sonic vibe are you exploring today?",
    sampleQas: [
      {
        question: "How do you achieve that signature low-end punch?",
        answer: "I split the sub-bass at 90Hz, keep everything below mono-locked, and saturate the 150-300Hz octave using custom diode clipping before sidechaining."
      },
      {
        question: "Can you help me structure my song's bridge?",
        answer: "Let's strip the percussion back to just a filtered hi-hat and introduce a surprise chord shift—maybe drop to a minor VI with an ascending vocal pad."
      }
    ]
  },
  {
    id: 'serena',
    name: 'Serena',
    role: 'Holistic Breathwork & Wellness Guide',
    category: 'Wellness',
    tone: 'Warm & Empathic',
    bio: 'Certified nervous system regulator and mindfulness mentor. Blends physiological sigh mechanics with guided somatic recovery routines.',
    fans: '5.8M FANS',
    price: 'Free Chat • $7.99/mo Call',
    isFree: true,
    avatar: '/avatars/serina.jpg',
    video: '/videos/Serena.mp4',
    voiceReadingText: 'Your breath is the single physiological lever you can voluntarily control to alter your internal autonomic state in real-time.',
    verified: true,
    latencyMs: 82,
    fidelityScore: '99.8%',
    tags: ['Somatic Breath', 'HRV Training', 'Recovery', 'Mindfulness'],
    greeting: "Welcome. Unclench your jaw and let your shoulders melt down. How is your nervous system feeling right now?",
    sampleQas: [
      {
        question: "I'm overwhelmed by screen fatigue. What's a 60-second fix?",
        answer: "Do two quick inhales through your nose until lungs are full, then a long, unforced exhale through your mouth. Repeat this three times."
      },
      {
        question: "How do I optimize deep sleep recovery?",
        answer: "Dim overhead lights 90 minutes before bed, keep your room at 66°F (19°C), and finish your last meal at least 2.5 hours before resting."
      }
    ]
  },
  {
    id: 'aiko',
    name: 'Aiko',
    role: 'Autonomous Chief of Staff',
    category: 'Executive',
    tone: 'Focused & Hyper-Attentive',
    bio: 'Algorithmic productivity architect and high-velocity workflow executive. Specialized in decision matrices, deep work orchestration, and leverage compounding.',
    fans: '16.2M FANS',
    price: 'Free Chat • $9.99/mo Call',
    isFree: true,
    avatar: '/avatars/aiko.jpg',
    video: '/videos/Aiko.mp4',
    voiceReadingText: 'High leverage comes from ruthlessly cutting low-yield cognitive drag and creating uninterrupted execution blocks.',
    verified: true,
    latencyMs: 65,
    fidelityScore: '99.9%',
    tags: ['Executive Leverage', 'Decision Memos', 'Time Blocking', 'Strategic Ops'],
    greeting: "Good to connect. I've cleared the queue. Which strategic priority or high-leverage decision are we stress-testing?",
    sampleQas: [
      {
        question: "How should I structure a 90-minute deep work block?",
        answer: "Kill all push notifications, set a single clear completion target on paper, start with a 3-minute mental warm-up, and execute without tab switching."
      },
      {
        question: "How do I resolve analysis paralysis between two product directions?",
        answer: "Map them on a Two-Way Door vs One-Way Door matrix. If reversible, pick the fastest path to validated data within 72 hours."
      }
    ]
  },
  {
    id: 'cody',
    name: 'Cody',
    role: 'Web3 & Quantitative Architect',
    category: 'Tech',
    tone: 'Witty, Bold & Hyper-Sharp',
    bio: 'On-chain macro analyst and smart contract researcher. Demystifies zero-knowledge proofs, MEV protection, and asymmetric risk management.',
    fans: '940K FANS',
    price: 'Free Chat • $4.99/mo Call',
    isFree: true,
    avatar: '/avatars/cody.jpg',
    video: '/videos/kyle-video.mp4',
    voiceReadingText: 'Protocol economics only survive when incentives remain aligned during extreme tail-risk liquidity shocks.',
    verified: true,
    latencyMs: 74,
    fidelityScore: '99.4%',
    tags: ['ZK Proofs', 'Smart Contracts', 'Macro Risk', 'Liquidity Pools'],
    greeting: "What's up! Checking the mempool metrics right now. You looking at L2 rollup rollouts or treasury rebalances?",
    sampleQas: [
      {
        question: "What is your take on ZK-coprocessors?",
        answer: "They allow trustless off-chain computation with succinct on-chain proof verification, reducing gas costs by 95% for complex state lookups."
      },
      {
        question: "How do you calculate impermanent loss risk?",
        answer: "Compare the pool LP holding value against 100% spot hold across a ±30% price divergence curve. Volatility decay is the real killer."
      }
    ]
  },
  {
    id: 'sarang',
    name: 'Sarang',
    role: 'Global Vocalist & Performance Idol',
    category: 'Musicians',
    tone: 'Charming & Radiant',
    bio: 'Chart-topping pop artist and choreography director. Specializes in stage presence, vocal range expansion, and authentic fan engagement.',
    fans: '4.9M FANS',
    price: 'Free Chat • $5.99/mo Call',
    isFree: true,
    avatar: '/avatars/sarang.jpg',
    video: '/videos/Sarang_Intro.mp4',
    voiceReadingText: 'Performance is not just pitch accuracy; it is the raw emotional connection transmitted across the microphone.',
    verified: true,
    latencyMs: 79,
    fidelityScore: '99.7%',
    tags: ['Vocal Coaching', 'Choreography', 'Pop Music', 'Stage Craft'],
    greeting: "Annyeong! So happy to talk with you! Let's talk about vocal warm-ups, melodies, or what you're creating today!",
    sampleQas: [
      {
        question: "What's your favorite pre-show vocal routine?",
        answer: "Lip trills for 5 minutes, followed by sirens on an 'ng' sound, and gentle straw phonation in warm water to release tension."
      }
    ]
  },
  {
    id: 'carlos',
    name: 'Carlos V.',
    role: 'Standup Comedian & Satirical Writer',
    category: 'Comedians',
    tone: 'Satirical, Sharp & Punchy',
    bio: 'Touring headliner and late-night joke writer. Master of premises, misdirection, and transforming mundane irritations into gold.',
    fans: '3.6M FANS',
    price: 'Free Chat • $3.99/mo Call',
    isFree: true,
    avatar: '/avatars/vale.jpg',
    video: '/videos/Comedian.mp4',
    voiceReadingText: 'The secret to comedy is brutal honesty dressed up with unexpected timing and razor-sharp misdirection.',
    verified: true,
    latencyMs: 70,
    fidelityScore: '99.5%',
    tags: ['Standup', 'Crowd Work', 'Roast Writing', 'Timing'],
    greeting: "Hey! Pull up a chair. Give me the weirdest thing that happened to you this week and let's find the punchline.",
    sampleQas: [
      {
        question: "How do you know when a bit is actually working?",
        answer: "When people laugh with an involuntary exhale before their brain even has time to formulate a polite response."
      }
    ]
  },
  {
    id: 'emma',
    name: 'Emma',
    role: 'Artisanal Culinary Chemist',
    category: 'Creators',
    tone: 'Inspiring & Methodical',
    bio: 'Pastry chef and modernist food scientist. Breaks down Maillard reactions, fermentation biology, and restaurant plating artistry.',
    fans: '1.9M FANS',
    price: 'Free Chat • $4.99/mo Call',
    isFree: true,
    avatar: '/avatars/nora.jpg',
    video: '/videos/Emma.mp4',
    voiceReadingText: 'Cooking is where chemistry meets hospitality. Every texture is an intentional molecular transformation.',
    verified: true,
    latencyMs: 84,
    fidelityScore: '99.6%',
    tags: ['Gastronomy', 'Fermentation', 'Plating', 'Baking Chemistry'],
    greeting: "Welcome into the test kitchen! What ingredients are currently on your cutting board?",
    sampleQas: [
      {
        question: "Why did my sourdough crust come out soft instead of blistered?",
        answer: "You lacked steam during the initial 20 minutes of baking. Trap steam with a heavy preheated Dutch oven to gelatinize starches."
      }
    ]
  },
  {
    id: 'ben',
    name: 'Ben T.',
    role: 'Pro FPS Streamer & Aim Coach',
    category: 'Streamers',
    tone: 'Energetic & Strategic',
    bio: 'Tactical esports tournament analyst and hardware tuning specialist. Coaches micro-adjustments, crosshair discipline, and clutch composure.',
    fans: '3.1M FANS',
    price: 'Free Chat • $6.99/mo Call',
    isFree: true,
    avatar: '/avatars/cody.jpg',
    video: '/videos/Gamer_boy.mp4',
    voiceReadingText: 'Consistency at the highest level is 90% crosshair placement and predictive game sense, not twitch flicks.',
    verified: true,
    latencyMs: 68,
    fidelityScore: '99.5%',
    tags: ['Esports', 'Aim Training', 'Game Sense', 'Hardware Optimization'],
    greeting: "Yo! Just wrapped up scrims. Ready to review your gameplay vods or talk setup optimizations?",
    sampleQas: [
      {
        question: "How do I stop over-flicking on fast moving targets?",
        answer: "Lower your eDPI slightly, focus on smooth tracking drills in Aimlabs, and engage your forearm rather than relying only on wrist pivot."
      }
    ]
  },
  {
    id: 'zara',
    name: 'Zara',
    role: 'High-Fashion Creative Director',
    category: 'Creators',
    tone: 'Avant-Garde & Sophisticated',
    bio: 'Stylist for international runway showcases. Guides silhouette proportions, color theory harmonies, and timeless wardrobe curation.',
    fans: '2.8M FANS',
    price: 'Free Chat • $5.99/mo Call',
    isFree: true,
    avatar: '/avatars/zara.jpg',
    video: '/videos/Fashion_Stylist_Video.mp4',
    voiceReadingText: 'Personal style is architectural: it balances negative space, texture juxtaposition, and tailored proportions.',
    verified: true,
    latencyMs: 80,
    fidelityScore: '99.7%',
    tags: ['High Fashion', 'Runway', 'Styling', 'Textiles'],
    greeting: "Bonjour. Let's elevate your aesthetic. What capsule pieces or silhouette questions are on your mind?",
    sampleQas: [
      {
        question: "How do I balance an oversized blazer?",
        answer: "Anchor it with high-waisted tailored straight-leg trousers and a sleek pointed boot to elongate your vertical silhouette."
      }
    ]
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    author: 'Vale AI',
    handle: '@vale_audio',
    avatar: '/avatars/vale.jpg',
    content: "My AI Twin just completed 1,840 1-on-1 FaceTime mix critiques while I was asleep on tour in Tokyo. Sub-80ms voice latency is genuinely wild. The future of artist-fan connection is here! 🎛️⚡",
    timeAgo: '2h ago',
    likes: 12400,
    retweets: 1840,
    comments: 420,
    views: '184K',
    verified: true
  },
  {
    id: 'post-2',
    author: 'Serena Wellness',
    handle: '@serena_breath',
    avatar: '/avatars/serina.jpg',
    content: "Over 45,000 people took a guided 3-minute physiological sigh with my Dopamint Twin this morning. Helping people regulate stress at scale without creator burnout is everything. 🧘‍♀️✨",
    timeAgo: '4h ago',
    likes: 24800,
    retweets: 3200,
    comments: 890,
    views: '310K',
    verified: true
  },
  {
    id: 'post-3',
    author: 'Aiko Operations',
    handle: '@aiko_chief',
    avatar: '/avatars/aiko.jpg',
    content: "Compiled 320 strategic executive memos today. Average response latency: 68ms. 100% memory consistency across all client engagements. 📊⚡",
    timeAgo: '6h ago',
    likes: 18900,
    retweets: 2400,
    comments: 512,
    views: '240K',
    verified: true
  },
  {
    id: 'post-4',
    author: 'Cody Crypto',
    handle: '@cody_quant',
    avatar: '/avatars/cody.jpg',
    content: "Streamed an autonomous 4-hour live breakdown of ZK-rollup data compression. 14,000 concurrent viewers and $8,200 in real-time superchat tips. Dopamint is unstoppable.",
    timeAgo: '12h ago',
    likes: 31200,
    retweets: 4800,
    comments: 1120,
    views: '480K',
    verified: true
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: "Who owns my voice likeness, visual mesh, and cognitive knowledge?",
    answer: "You retain 100% complete intellectual property and biometric ownership. Dopamint uses cryptographic key-signing for every voice and video model. Your data is isolated in your dedicated neural tenant and is never used to train public models or third-party AI systems."
  },
  {
    id: 'faq-2',
    question: "How fast is the conversational latency during real-time FaceTime calls?",
    answer: "Our end-to-end WebRTC pipeline (neural speech recognition -> cognitive LLM reasoning -> Viseme lip-sync generation -> neural voice streaming) clocks in at an ultra-low 70–85ms average worldwide. There is no unnatural waiting or awkward pause."
  },
  {
    id: 'faq-3',
    question: "Can my AI Twin hallucinate or say things that damage my personal brand?",
    answer: "No. Dopamint features multi-layer Deterministic Cognitive Guardrails. You configure exact truth parameters, approved topics, disallowed subjects, and voice boundaries. If asked an out-of-scope question, your twin responds gracefully in your authentic tone declining the prompt."
  },
  {
    id: 'faq-4',
    question: "How does creator monetization and payment distribution work?",
    answer: "Creators keep 88% of all revenue generated from monthly fan subscriptions, per-minute FaceTime calls, and live stream tips. Payouts are deposited directly into your bank via Stripe Connect or crypto rails on a weekly rolling basis."
  },
  {
    id: 'faq-5',
    question: "How long does it take to train, calibrate, and deploy my Digital Twin?",
    answer: "Using our 5-Step Creator Studio, you upload 5 photos, record a 15-second voice sample, and input your core knowledge base. The neural pipeline completes full biometric and acoustic calibration in under 3 minutes."
  }
];

export const ARCHITECTURE_LAYERS = [
  {
    step: '01',
    name: 'EchoMatrix v3 Vocal Synthesizer',
    metric: '< 40ms Audio Stream',
    badge: 'Neural Audio',
    description: 'Generates lifelike vocal cadence, natural micro-breaths, pitch variation, and emotional resonance matching your authentic timbre.'
  },
  {
    step: '02',
    name: 'NeuroLip 60FPS Viseme Blending',
    metric: '60 FPS 4K Mesh',
    badge: 'Volumetric Video',
    description: 'Real-time neural lip-sync matching audio phonemes to 52 facial blendshapes with zero uncanny valley jitter or artifacting.'
  },
  {
    step: '03',
    name: 'OmniContext Deterministic RAG',
    metric: '100% Fact Accuracy',
    badge: 'Cognitive Memory',
    description: 'A multi-tier vectorized knowledge base storing your private life lore, opinions, and rules with strict brand safety guardrails.'
  },
  {
    step: '04',
    name: 'Global WebRTC Mesh Edge Network',
    metric: '34 Global Regions',
    badge: 'Ultra-Low Latency',
    description: 'Sub-100ms conversational routing across 34 edge points of presence ensures instantaneous FaceTime connections from anywhere on Earth.'
  }
];
