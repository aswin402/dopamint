import React, { useState } from 'react';
import { Wallet, Shield, CheckCircle2, XCircle, AlertTriangle, Lock, Unlock, Zap, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

interface InteractiveWalletCardProps {
  balance?: string;
  className?: string;
}

export const InteractiveWalletCard: React.FC<InteractiveWalletCardProps> = ({
  balance = "$1,240.00",
  className = "",
}) => {
  const [selectedCard, setSelectedCard] = useState<'base' | 'visa'>('visa');
  const [selectedAllowance, setSelectedAllowance] = useState<number>(40);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const dailyCap = 250;
  const actionCap = 100;
  const percentUsed = Math.min(100, Math.round((selectedAllowance / dailyCap) * 100));

  // Determine policy result based on selected allowance
  const isOverActionCap = selectedAllowance > actionCap;
  const isOverDailyCap = selectedAllowance > dailyCap;
  const isBlocked = isLocked || isOverActionCap || isOverDailyCap;

  return (
    <div className={`w-full max-w-[380px] rounded-[2rem] bg-white border border-neutral-300 shadow-2xl p-6 font-sans relative overflow-hidden transition-all duration-300 ${className}`}>
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header: Available Balance & Enclave Security Badge */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shadow-md">
            <Wallet className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
              AVAILABLE TO SPEND
            </div>
            <div className="text-2xl font-black font-mono text-black tracking-tight">
              {balance}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsLocked(!isLocked)}
          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
            isLocked
              ? 'bg-red-950/80 text-red-300 border-red-500/60 animate-pulse'
              : 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
          }`}
          title="Toggle Kill Switch"
        >
          {isLocked ? (
            <>
              <Lock className="w-3 h-3 text-red-400" />
              <span>FROZEN</span>
            </>
          ) : (
            <>
              <Shield className="w-3 h-3 text-emerald-600" />
              <span>MPC SECURE</span>
            </>
          )}
        </button>
      </div>

      {/* Live Spending Meter Gauge */}
      <div className="py-4 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-neutral-500 font-medium">Daily Utilization:</span>
          <span className="font-bold text-black">${selectedAllowance} / ${dailyCap} ({percentUsed}%)</span>
        </div>

        {/* Progress Bar Track */}
        <div className="relative w-full h-2.5 rounded-full bg-neutral-100 border border-neutral-200 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentUsed}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`h-full rounded-full transition-colors ${
              isBlocked ? 'bg-red-500' : percentUsed > 70 ? 'bg-amber-500' : 'bg-emerald-500'
            }`}
          />
        </div>
      </div>

      {/* Connected Settlement Rails */}
      <div className="space-y-2 py-2">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="font-bold text-neutral-600 uppercase">Settlement Rail</span>
          <span className="text-neutral-400 text-[10px]">TAP TO SWITCH</span>
        </div>

        {/* Option 1: Base L2 */}
        <div
          onClick={() => setSelectedCard('base')}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between font-mono text-xs ${
            selectedCard === 'base'
              ? 'bg-neutral-50 border-black ring-1.5 ring-black shadow-xs'
              : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-600'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center text-white font-bold text-[9px]">
              B
            </div>
            <div>
              <div className="font-bold text-black text-xs">0x48a…210c</div>
              <div className="text-[9px] text-neutral-400">Base L2 · MPC Key</div>
            </div>
          </div>
          <span className="font-bold text-[11px] text-neutral-600">ETH</span>
        </div>

        {/* Option 2: Visa Virtual Card */}
        <div
          onClick={() => setSelectedCard('visa')}
          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between font-mono text-xs ${
            selectedCard === 'visa'
              ? 'bg-neutral-50 border-black ring-1.5 ring-black shadow-xs'
              : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-600'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white font-bold text-[9px]">
              <CreditCard className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-bold text-black text-xs">•••• 4321</div>
              <div className="text-[9px] text-neutral-400">Visa Corporate · Tokenized</div>
            </div>
          </div>
          <span className="font-bold text-[11px] text-neutral-600">USD</span>
        </div>
      </div>

      {/* Quick Test Allowance Simulator */}
      <div className="pt-3 border-t border-neutral-200 space-y-2.5">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-neutral-500 uppercase font-bold">Simulate Spend</span>
          <span className="text-neutral-400 text-[10px]">CAP: $100/ACT</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center font-mono font-bold text-xs">
          {[40, 100, 250, 600].map((val) => (
            <button
              key={val}
              onClick={() => setSelectedAllowance(val)}
              className={`py-2 rounded-xl border transition-all cursor-pointer text-xs ${
                selectedAllowance === val
                  ? val > actionCap
                    ? 'bg-red-950 text-red-200 border-red-500 shadow-sm'
                    : 'bg-black text-white border-black shadow-sm'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              ${val}
            </button>
          ))}
        </div>

        {/* Live Simulation Verdict */}
        <div className={`p-3 rounded-xl border font-mono text-[11px] flex items-center gap-2 transition-all ${
          isBlocked
            ? 'bg-red-950/20 border-red-500/40 text-red-800'
            : 'bg-emerald-950/10 border-emerald-500/40 text-emerald-800'
        }`}>
          {isBlocked ? (
            <>
              <XCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span className="font-bold">
                {isLocked
                  ? 'Kill Switch Active · All Spending Frozen'
                  : `$${selectedAllowance} exceeds $100/action cap → Blocked ✕`}
              </span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-bold">
                ${selectedAllowance} is inside $100 cap → Pre-Approved ✓
              </span>
            </>
          )}
        </div>
      </div>

    </div>
  );
};
