import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Camera,
  Mic,
  Upload,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Zap,
  Sliders,
  DollarSign,
  ShieldCheck,
  Terminal,
  Layers,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { AudioWaveform } from './AudioWaveform';
import type { TwinProfile } from '../types';

const ROLES = [
  'Musician & Producer',
  'Wellness & Yoga Coach',
  'Executive Chief of Staff',
  'Web3 & Crypto Quant',
  'Standup Comedian',
  'Culinary Chemist',
  'FPS Esports Streamer',
  'Fashion Creative Director',
];

const VIBES = [
  'Warm & Empathic',
  'Magnetic & Visionary',
  'Focused & Hyper-Attentive',
  'Witty, Bold & Sharp',
  'Satirical & Punchy',
  'Inspiring & Methodical',
  'Energetic & Tactical',
];

export const StudioWizard: React.FC = () => {
  const { isCreatorStudioModalOpen, toggleCreatorStudioModal, addCustomTwin, openFaceTimeCall } = useAppStore();

  const [step, setStep] = useState(1);
  const [twinName, setTwinName] = useState('');
  const [twinRole, setTwinRole] = useState(ROLES[0]);
  const [twinVibe, setTwinVibe] = useState(VIBES[0]);
  const [twinBio, setTwinBio] = useState('');
  const [uploadedPhotos, setUploadedPhotos] = useState<number>(3);
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  const [voiceRecorded, setVoiceRecorded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([
    'podcast_ep_42_transcript.pdf',
    'creativity_principles_2026.md',
  ]);
  const [subPrice, setSubPrice] = useState(4.99);
  const [isDeploying, setIsDeploying] = useState(false);
  const [compilationLogs, setCompilationLogs] = useState<string[]>([
    '[INIT] Booting Dopamint Neural Pipeline v4.8...',
    '[BIOMETRIC] Aligning 5-angle volumetric facial blendshapes...',
    '[VOCAL] Generating EchoMatrix v3 formant filter matrix...',
    '[COGNITIVE] Vectorizing RAG lore chunks (128 embeddings)...',
    '[DEPLOY] Ready for WebRTC edge mesh routing.',
  ]);

  if (!isCreatorStudioModalOpen) return null;

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleDeployTwin = () => {
    setIsDeploying(true);
    setTimeout(() => {
      const finalName = twinName.trim() || 'Nova';
      const newTwin: TwinProfile = {
        id: `custom-${Date.now()}`,
        name: finalName,
        role: twinRole,
        category: 'Creators',
        tone: twinVibe,
        bio: twinBio || `Autonomous digital twin of ${finalName}. Specializing in ${twinRole.toLowerCase()} with 24/7 real-time voice and cognitive memory.`,
        fans: '10 FANS (NEW)',
        price: subPrice === 0 ? 'Free to Chat' : `$${subPrice.toFixed(2)}/mo Call`,
        isFree: subPrice === 0,
        avatar: '/avatars/zara.jpg',
        video: '/videos/video.mp4',
        voiceReadingText: `Hi, I am the verified digital twin of ${finalName}. I am ready to answer your questions 24/7.`,
        verified: true,
        latencyMs: 72,
        fidelityScore: '99.9%',
        tags: ['Custom Twin', 'Creator OS', 'AI Clone'],
        greeting: `Hey! I'm ${finalName}'s official AI Twin. What would you like to explore together?`,
        sampleQas: [
          {
            question: `What is your primary focus as a ${twinRole}?`,
            answer: `I synthesize deep expertise in ${twinRole.toLowerCase()} with continuous real-time execution.`,
          },
        ],
      };

      addCustomTwin(newTwin);
      setIsDeploying(false);
      toggleCreatorStudioModal(false);
      openFaceTimeCall(newTwin);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
              0{step}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-sans">
                Creator Studio // 5-Step Twin Deployment
              </h3>
              <span className="text-[11px] font-mono text-slate-500">
                Step {step} of 5 · {step === 1 ? 'Identity' : step === 2 ? 'Biometrics' : step === 3 ? 'Voice' : step === 4 ? 'Knowledge' : 'Monetization'}
              </span>
            </div>
          </div>

          <button
            onClick={() => toggleCreatorStudioModal(false)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Step Progress Indicator */}
        <div className="w-full bg-slate-100 h-1.5 flex">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`flex-1 h-full transition-all duration-300 ${
                s <= step ? 'bg-emerald-500' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* Modal Body: Dynamic Step Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: IDENTITY */}
          {step === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  Define Your Digital Archetype
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Set the foundational persona parameters and communication style for your AI twin.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                    Twin Name / Public Moniker
                  </label>
                  <input
                    type="text"
                    value={twinName}
                    onChange={(e) => setTwinName(e.target.value)}
                    placeholder="e.g. Elena Vance"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Domain / Profession
                    </label>
                    <select
                      value={twinRole}
                      onChange={(e) => setTwinRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                    >
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                      Personality Vibe & Tone
                    </label>
                    <select
                      value={twinVibe}
                      onChange={(e) => setTwinVibe(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                    >
                      {VIBES.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1.5">
                    Short Creator Biography
                  </label>
                  <textarea
                    rows={3}
                    value={twinBio}
                    onChange={(e) => setTwinBio(e.target.value)}
                    placeholder="Describe your core topics, expertise, and what fans should consult you for..."
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: BIOMETRIC PRESENCE */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  5-Angle Volumetric Facial Alignment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Calibrate 52 neural facial blendshapes for photorealistic 60FPS Viseme lip sync.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { label: 'Front Angle', filled: true },
                  { label: 'Left 45° Profile', filled: true },
                  { label: 'Right 45° Profile', filled: true },
                  { label: 'Smiling Expression', filled: uploadedPhotos >= 4 },
                  { label: 'Neutral Expression', filled: uploadedPhotos >= 5 },
                ].map((slot, i) => (
                  <div
                    key={i}
                    onClick={() => setUploadedPhotos(Math.min(5, uploadedPhotos + 1))}
                    className={`aspect-[3/4] rounded-xl border-2 border-dashed p-3 flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                      slot.filled
                        ? 'border-emerald-500 bg-emerald-50/60 text-emerald-800'
                        : 'border-slate-300 bg-slate-50 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {slot.filled ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-2" />
                    ) : (
                      <Camera className="w-6 h-6 text-slate-400 mb-2" />
                    )}
                    <span className="text-[11px] font-bold">{slot.label}</span>
                    <span className="text-[9px] font-mono text-slate-400">
                      {slot.filled ? 'Calibrated' : 'Click to add'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Biometric Consent Verification</span>
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-0.5 rounded text-emerald-600" />
                  <span>I declare that I own all rights to these images and authorize neural mesh training.</span>
                </label>
              </div>
            </div>
          )}

          {/* STEP 3: VOCAL CLONE */}
          {step === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  Vocal Timbre & Inflection Synthesis
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Record a 15-second speech sample to calibrate phoneme formant filters and breathing cadence.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-950 space-y-3">
                <div className="text-xs font-mono font-bold text-emerald-800 uppercase">
                  Read aloud to calibrate speech resonance:
                </div>
                <blockquote className="text-sm sm:text-base font-serif italic text-slate-900 leading-relaxed bg-white/80 p-4 rounded-xl border border-emerald-200/60">
                  "The digital horizon expands when we turn our authentic voice into a permanent, living frequency. My voice is the bridge."
                </blockquote>
              </div>

              {/* Recording trigger bar */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setIsRecordingVoice(!isRecordingVoice);
                      if (!isRecordingVoice) {
                        setTimeout(() => {
                          setIsRecordingVoice(false);
                          setVoiceRecorded(true);
                        }, 4000);
                      }
                    }}
                    className={`p-4 rounded-full font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      isRecordingVoice
                        ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                        : voiceRecorded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                    <span>{isRecordingVoice ? 'Recording Sample (4s)...' : voiceRecorded ? 'Voice Calibrated' : 'Start 10s Calibration'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">Audio Telemetry:</span>
                  <AudioWaveform
                    isPlaying={isRecordingVoice}
                    barsCount={24}
                    height={28}
                    barWidth={3}
                    gap={2}
                    color="#059669"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: COGNITIVE RAG INGESTION */}
          {step === 4 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  Cognitive Memory Ingestion
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Upload podcast transcripts, blogs, PDFs, and FAQs. Our private RAG pipeline vectorizes facts with zero public model sharing.
                </p>
              </div>

              {/* Mock Upload Dropzone */}
              <div
                onClick={() => {
                  setUploadedFiles((prev) => [
                    ...prev,
                    `youtube_interview_vibe_${prev.length + 1}.txt`,
                  ]);
                }}
                className="p-8 rounded-2xl border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50 hover:bg-emerald-50/30 text-center transition-all cursor-pointer space-y-2"
              >
                <Upload className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="text-sm font-bold text-slate-900">
                  Click to add documents or transcripts
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Supported formats: PDF, TXT, DOCX, Markdown, YouTube URLs
                </div>
              </div>

              {/* Uploaded Files Chips */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase">
                  Indexed Knowledge Documents ({uploadedFiles.length})
                </div>
                <div className="flex flex-wrap gap-2">
                  {uploadedFiles.map((f, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Logs Box */}
              <div className="p-4 rounded-xl bg-slate-950 text-emerald-400 font-mono text-[11px] space-y-1 overflow-x-auto shadow-inner">
                {compilationLogs.map((log, i) => (
                  <div key={i}>{log}</div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: MONETIZATION & DEPLOY */}
          {step === 5 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  Launch & Monetization HUD
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Configure fan subscription pricing, gated FaceTime access rules, and deploy live to edge nodes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase font-mono">
                    Monthly Subscription Fee
                  </label>
                  <span className="text-lg font-extrabold text-emerald-600 font-mono">
                    ${subPrice.toFixed(2)} / month
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="49"
                  step="1"
                  value={subPrice}
                  onChange={(e) => setSubPrice(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />

                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>$0 (Free Access)</span>
                  <span>$25/mo</span>
                  <span>$49/mo</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-xs text-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Creator Revenue Split: 88% / 12%</div>
                  <div className="text-slate-600">
                    You keep 88% of all subscription revenue, FaceTime calls, and stream tips with automated weekly Stripe payouts.
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Controls Bar */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/80">
          <button
            onClick={handlePrev}
            disabled={step === 1}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none rounded-lg border border-slate-200 bg-white"
          >
            <ArrowLeft className="w-4 h-4 inline mr-1" />
            Back
          </button>

          {step < 5 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleDeployTwin}
              disabled={isDeploying}
              className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>{isDeploying ? 'Deploying to WebRTC Mesh...' : 'Deploy & Test FaceTime'}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
