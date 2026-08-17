import React, { useState } from 'react';
import { DollarSign, TrendingUp, Clock, Users, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export const RoiCalculator: React.FC = () => {
  const { toggleCreatorStudioModal } = useAppStore();

  const [audienceSize, setAudienceSize] = useState(250000);
  const [subPrice, setSubPrice] = useState(9.99);
  const [callPrice, setCallPrice] = useState(24.99);

  // Conversion economics:
  const subscribers = Math.round(audienceSize * 0.015);
  const monthlySubRevenue = subscribers * subPrice;
  const monthlyCalls = Math.round(subscribers * 0.08);
  const monthlyCallRevenue = monthlyCalls * callPrice;
  const monthlyTips = Math.round(monthlySubRevenue * 0.12);

  const totalMonthlyGross = monthlySubRevenue + monthlyCallRevenue + monthlyTips;
  const creatorNetMonthly = totalMonthlyGross * 0.88; // 88% creator cut
  const projectedArr = creatorNetMonthly * 12;
  const hoursSavedPerWeek = Math.min(80, Math.round(monthlyCalls * 0.45 + 18));

  const setPreset = (fans: number, sub: number, call: number) => {
    setAudienceSize(fans);
    setSubPrice(sub);
    setCallPrice(call);
  };

  return (
    <section id="roi" className="py-24 sm:py-32 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BIG BOLD SECTION HEADLINE & CONCISE COPY */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>CREATOR EARNINGS MATRIX</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            UNLIMITED SCALE. <br />
            <span className="text-emerald-600">ZERO TIME TRADED.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            Calculate your monthly recurring revenue and saved hours through 24/7 autonomous twin monetization.
          </p>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <button
              onClick={() => setPreset(50000, 4.99, 14.99)}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              50K Followers
            </button>
            <button
              onClick={() => setPreset(250000, 9.99, 24.99)}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              250K Followers
            </button>
            <button
              onClick={() => setPreset(1000000, 14.99, 49.99)}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              1M+ Followers
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Controls Card (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            {/* Slider 1 */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase font-mono flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>Audience Reach</span>
                </label>
                <span className="text-base font-black text-slate-950 font-mono">
                  {audienceSize.toLocaleString()} fans
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="2000000"
                step="10000"
                value={audienceSize}
                onChange={(e) => setAudienceSize(parseInt(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>

            {/* Slider 2 */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase font-mono flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>Monthly Subscription Fee</span>
                </label>
                <span className="text-base font-black text-slate-950 font-mono">
                  ${subPrice.toFixed(2)} / mo
                </span>
              </div>
              <input
                type="range"
                min="2.99"
                max="49.99"
                step="1"
                value={subPrice}
                onChange={(e) => setSubPrice(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>

            {/* Slider 3 */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase font-mono flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>1-on-1 FaceTime Fee</span>
                </label>
                <span className="text-base font-black text-slate-950 font-mono">
                  ${callPrice.toFixed(2)} / call
                </span>
              </div>
              <input
                type="range"
                min="4.99"
                max="99.99"
                step="2.5"
                value={callPrice}
                onChange={(e) => setCallPrice(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>

            {/* Breakdown Footer */}
            <div className="pt-4 border-t border-slate-200 text-xs space-y-2 text-slate-600 font-medium">
              <div className="flex justify-between">
                <span>Active Subscribers (1.5% take rate)</span>
                <span className="font-bold text-slate-900 font-mono">{subscribers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly FaceTime Calls (8% take rate)</span>
                <span className="font-bold text-slate-900 font-mono">{monthlyCalls.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>Creator Revenue Share</span>
                <span className="font-mono">88% Payout</span>
              </div>
            </div>

          </div>

          {/* Results Summary Card (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-slate-800 space-y-6">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  PROJECTED ARR SUMMARY
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                  88% NET SPLIT
                </span>
              </div>

              {/* Big Revenue Number */}
              <div className="pt-6 space-y-6">
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Annual Recurring Revenue (ARR)
                  </div>
                  <div className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight mt-1">
                    ${Math.round(projectedArr).toLocaleString()}
                    <span className="text-lg font-sans font-normal text-emerald-400 ml-2">/ yr</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div>
                    <div className="text-xs font-mono text-slate-400">Monthly Net Payout</div>
                    <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                      ${Math.round(creatorNetMonthly).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Time Saved Weekly</div>
                    <div className="text-2xl font-black font-mono text-teal-300 mt-1">
                      ~{hoursSavedPerWeek} hrs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <button
                onClick={() => toggleCreatorStudioModal(true)}
                className="w-full py-4 rounded-2xl text-sm font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Deploy Your Twin & Collect Revenue</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-[11px] text-center text-slate-400 font-mono">
                No monthly SaaS fees · Automated weekly Stripe Connect payouts
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
