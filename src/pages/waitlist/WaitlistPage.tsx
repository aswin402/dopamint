import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { ArrowLeft, CheckCircle2, Shield, Lock, Zap } from 'lucide-react';
import { getLenisInstance } from '@/lib/lenis';
import iconDopeImg from '@/assets/Icondope.webp';
import logoDopeImg from '@/assets/logo_dope.webp';

const SCALLOP_PATH =
  'M 132.00 70.00 Q 123.34 78.45 128.97 89.16 Q 118.11 94.52 120.16 106.44 Q 108.18 108.18 106.44 120.16 Q 94.52 118.11 89.16 128.97 Q 78.45 123.34 70.00 132.00 Q 61.55 123.34 50.84 128.97 Q 45.48 118.11 33.56 120.16 Q 31.82 108.18 19.84 106.44 Q 21.89 94.52 11.03 89.16 Q 16.66 78.45 8.00 70.00 Q 16.66 61.55 11.03 50.84 Q 21.89 45.48 19.84 33.56 Q 31.82 31.82 33.56 19.84 Q 45.48 21.89 50.84 11.03 Q 61.55 16.66 70.00 8.00 Q 78.45 16.66 89.16 11.03 Q 94.52 21.89 106.44 19.84 Q 108.18 31.82 120.16 33.56 Q 118.11 45.48 128.97 50.84 Q 123.34 61.55 132.00 70.00 Z';

export function WaitlistPage() {
  const location = useLocation();
  const initialPrompt = (location.state as { prompt?: string } | null)?.prompt || '';

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [queueNumber, setQueueNumber] = useState<number>(1402);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = getLenisInstance();
    if (lenis) {
      lenis.start();
      lenis.scrollTo(0, { immediate: true });
    }
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    delete document.documentElement.dataset.scrollLocked;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmed = email.trim();
    if (!trimmed) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const generatedQueue = Math.floor(1400 + Math.random() * 400);
      setQueueNumber(generatedQueue);

      try {
        const stored = JSON.parse(localStorage.getItem('dopamint_waitlist') || '[]');
        stored.push({
          email: trimmed,
          prompt: initialPrompt,
          timestamp: new Date().toISOString(),
          queue: generatedQueue,
        });
        localStorage.setItem('dopamint_waitlist', JSON.stringify(stored));
      } catch {
        // Safe fallback if localStorage is unavailable
      }

      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#25362a', '#7a382e', '#c4a978', '#55604e', '#dfc28d'],
        });

        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#25362a', '#c4a978', '#7a382e'],
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#25362a', '#c4a978', '#7a382e'],
          });
        }, 200);
      } catch {
        // Confetti optional
      }
    }, 500);
  };

  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-[#f3f2e6] text-[#141820] flex flex-col justify-between relative selection:bg-[#e5ddd4] selection:text-[#141820] overflow-x-clip">
      
      {/* Soft atmospheric background aura */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[680px] h-[500px] rounded-full bg-[#c4a978]/12 blur-3xl pointer-events-none -z-10" />

      {/* =========================================================================
          1. TOP NAVIGATION BAR
          ========================================================================= */}
      <header className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-5 sm:py-6 flex items-center justify-between z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.16em] text-[#55604e] hover:text-[#25362a] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        {/* Brand App Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoDopeImg}
            alt="Dopamint"
            className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>
      </header>

      {/* =========================================================================
          2. MAIN WAITLIST CONTENT
          ========================================================================= */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 sm:py-10 z-10 w-full">
        <div className="w-full max-w-[500px] mx-auto text-center flex flex-col items-center">
          
          {/* Holographic Iridescent Scalloped Seal Badge */}
          <div className="relative flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 mb-5 sm:mb-6 select-none group">
            <svg
              viewBox="0 0 140 140"
              className="w-full h-full drop-shadow-[0_10px_25px_rgba(45,35,25,0.16)] transition-transform duration-700 group-hover:scale-105"
            >
              <defs>
                {/* Iridescent Metallic Gradient */}
                <linearGradient id="iridescent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cfdacd" />
                  <stop offset="25%" stopColor="#eedec8" />
                  <stop offset="50%" stopColor="#f7f5f0" />
                  <stop offset="75%" stopColor="#cfdacd" />
                  <stop offset="100%" stopColor="#dfcca9" />
                </linearGradient>

                {/* Circular Path for Text */}
                <path
                  id="seal-text-path"
                  d="M 70,70 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                />
              </defs>

              {/* Scalloped Starburst Rosette */}
              <path
                d={SCALLOP_PATH}
                fill="url(#iridescent-grad)"
                stroke="#3e4f42"
                strokeWidth="1.2"
                strokeOpacity="0.3"
              />

              {/* Inner Decorative Circle */}
              <circle
                cx="70"
                cy="70"
                r="49"
                fill="none"
                stroke="#55604e"
                strokeWidth="1"
                strokeDasharray="2 3"
                strokeOpacity="0.4"
              />

              {/* Curving Text along Path */}
              <text className="font-serif italic font-bold text-[8.5px] fill-[#25362a] tracking-wider uppercase select-none">
                <textPath href="#seal-text-path" startOffset="50%" textAnchor="middle">
                  ★ GET EARLY ACCESS ★ THE NEXT ERA OF AGENTS ★
                </textPath>
              </text>
            </svg>

            {/* Centered DOPE Bear Icon Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src={iconDopeImg}
                alt="Dopamint Bear Emblem"
                className="w-12 sm:w-14 h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(30,40,30,0.22)]"
              />
            </div>
          </div>

          {/* Subtitle Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0e8dc]/80 border border-[#445648]/30 text-[11px] sm:text-xs font-mono uppercase tracking-[0.20em] text-[#25362a] font-semibold mb-3 shadow-xs">
            <span>Next Era of Autonomous Agents</span>
          </div>

          {/* BIG FONT HEADLINE: JOIN WAITLIST */}
          <h1 className="text-4xl min-[360px]:text-5xl sm:text-6xl md:text-7xl font-serif font-normal uppercase tracking-tight text-[#141820] leading-[1.02] mb-3">
            Join <span className="font-serif italic font-bold text-[#25362a]">Waitlist</span>
          </h1>

          {/* Subtitle / Teaser */}
          <p className="font-serif italic text-base min-[360px]:text-lg sm:text-xl text-[#7a382e] font-semibold mb-2">
            Get early access to the next era of agents
          </p>

          <p className="text-xs min-[360px]:text-sm sm:text-base text-[#4b5546] font-sans leading-relaxed max-w-md mx-auto mb-6 sm:mb-8">
            Freebies and early agent harnesses will appear soon here. Join the waitlist to be the first to be informed.
          </p>

          {/* If user entered a prompt in Hero, show intent preview */}
          {initialPrompt && (
            <div className="w-full max-w-md mb-6 p-3 sm:p-3.5 rounded-2xl bg-white/80 border border-[#eedbc4] text-left flex items-start gap-2.5 shadow-xs">
              <div className="w-2 h-2 rounded-full bg-[#7a382e] mt-1.5 shrink-0" />
              <div className="text-xs sm:text-[13px] font-sans text-[#3d4837]">
                <span className="font-mono uppercase text-[10px] text-[#55604e] font-bold block mb-0.5 tracking-wider">
                  Your Queued Agent Intent:
                </span>
                <span className="font-serif italic font-semibold text-[#141820]">
                  "{initialPrompt}"
                </span>
              </div>
            </div>
          )}

          {/* =========================================================================
              3. WAITLIST FORM CONTAINER
              ========================================================================= */}
          {!isSuccess ? (
            <div className="w-full max-w-md bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_16px_40px_rgba(50,35,20,0.08)]">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="text-left space-y-1.5">
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="Email *"
                    disabled={isSubmitting}
                    className="w-full px-5 py-3.5 sm:py-4 rounded-full bg-[#f4ede4]/70 border border-[#e3d0bb] focus:border-[#25362a] focus:bg-white text-base sm:text-sm font-sans text-[#141820] placeholder:text-[#55604e]/70 outline-none transition-all duration-200 shadow-inner focus:shadow-md"
                  />

                  {errorMsg && (
                    <p className="text-xs text-[#7a382e] font-sans font-medium pt-1 px-3">
                      {errorMsg}
                    </p>
                  )}
                </div>

                {/* Submit Button (Solid Brand Theme Color) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#25362a] hover:bg-[#1a281e] active:scale-[0.98] text-[#f7f5f0] border border-[#3e4f42] font-mono text-xs sm:text-sm uppercase tracking-[0.24em] font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 select-none"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <span>JOIN WAITLIST</span>
                  )}
                </button>
              </form>

              {/* Trust Micro-Pills */}
              <div className="pt-5 mt-5 border-t border-[#eedbc4]/70 flex items-center justify-center gap-3 sm:gap-4 text-[10.5px] sm:text-[11px] font-mono uppercase tracking-wider text-[#55604e]/80 select-none">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-[#25362a]" /> Base Network
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#25362a]" /> Non-Custodial
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#7a382e]" /> Zero Spam
                </span>
              </div>
            </div>
          ) : (
            /* Success Confirmation Card */
            <div className="w-full max-w-md bg-[#fdfbf7] border-[1.5px] border-[#eedbc4] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_20px_48px_rgba(50,35,20,0.1)] text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#e0e8dc] border border-[#25362a]/20 flex items-center justify-center text-[#25362a] shadow-sm">
                <CheckCircle2 className="w-7 h-7 text-[#25362a]" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#7a382e] font-bold">
                  You're Officially In
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#25362a]">
                  Welcome to the Next Era.
                </h3>
              </div>

              <div className="py-3 px-4 rounded-2xl bg-[#f4ede4]/70 border border-[#eedbc4] inline-block w-full">
                <div className="font-mono text-xs text-[#55604e] uppercase tracking-wider">
                  Priority Waitlist Position
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#141820] mt-0.5">
                  #{queueNumber.toLocaleString()}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4b5546] font-sans leading-relaxed">
                We've reserved your access pass for <span className="font-semibold text-[#141820]">{email}</span>. You'll receive early invite codes before general rollout.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <Link
                  to="/"
                  className="w-full py-3.5 rounded-full bg-[#25362a] hover:bg-[#1a291e] text-[#f7f5f0] font-mono text-xs uppercase tracking-[0.16em] font-bold transition-all shadow-xs"
                >
                  Back to Dopamint
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail('');
                  }}
                  className="w-full py-3.5 rounded-full bg-transparent hover:bg-black/5 text-[#55604e] font-mono text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer"
                >
                  Register Another
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* =========================================================================
          4. FOOTER SIGNATURE
          ========================================================================= */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-5 text-center text-xs font-mono text-[#55604e]/70 tracking-wider z-10">
        <span>DOPAMINT PROTOCOL</span> · <span>BUILT ON BASE</span> · <span>AiFi ECOSYSTEM</span>
      </footer>

    </div>
  );
}

export default WaitlistPage;
