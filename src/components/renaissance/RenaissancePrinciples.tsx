import React from 'react';
import { PRINCIPLES } from '../../data/dopamint';
import { ArrowUpRight } from 'lucide-react';
import { Type1Button } from '../ui/Type1Button';

export const RenaissancePrinciples: React.FC = () => {
  return (
    <section id="principles" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER XII // PRINCIPLES & GOVERNANCE</span>
        <span className="font-serif italic text-base text-black">XII</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Assume the agent will <br />
          <span className="font-serif italic font-normal text-black">
            eventually make a mistake.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          We don't try to build an agent that never fails. We build a system where failure is bounded, observable and recoverable.
        </p>
      </div>

      {/* Failure Mode Interceptor & Dev Console (2 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
        
        {/* Policy Code Inspector */}
        <div className="parchment-card p-8 rounded-3xl space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-neutral-300 text-xs font-mono">
              <span className="text-neutral-500">policy.payments-v2.ts</span>
              <span className="text-black font-bold">Runtime Contract</span>
            </div>
            <h3 className="text-xl font-bold text-black mt-2">
              Every agent is transparent by default.
            </h3>
            <p className="text-xs text-neutral-600 mt-1">
              Not a system-prompt promise. An explicit policy file the runtime checks on every call.
            </p>

            <pre className="mt-4 p-4 rounded-2xl bg-black text-white font-mono text-[11px] leading-relaxed overflow-x-auto">
              <span className="text-neutral-500">// policy.payments-v2.ts</span><br />
              <span className="text-white">export const</span> <span className="text-white font-bold">policy</span>: AgentPolicy = &#123;<br />
              &nbsp;&nbsp;capability: <span className="text-neutral-300">"payments.send"</span>,<br />
              &nbsp;&nbsp;version: <span className="text-neutral-300">"payments-v2"</span>,<br />
              &nbsp;&nbsp;limits: &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;perTransaction: <span className="text-white font-bold">100</span>,   <span className="text-neutral-500">// USD</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;dailyMax: <span className="text-white font-bold">250</span>,         <span className="text-neutral-500">// USD</span><br />
              &nbsp;&nbsp;&#125;,<br />
              &nbsp;&nbsp;allow: [<span className="text-neutral-300">"subscriptions"</span>, <span className="text-neutral-300">"restaurants"</span>, <span className="text-neutral-300">"travel"</span>],<br />
              &nbsp;&nbsp;block: [<span className="text-neutral-400">"withdrawals"</span>, <span className="text-neutral-400">"unknown_contracts"</span>, <span className="text-neutral-400">"unlimited_transfers"</span>],<br />
              &nbsp;&nbsp;onViolation: <span className="text-neutral-400">"block_and_revoke"</span>,<br />
              &#125;;
            </pre>
          </div>

          <div className="text-[11px] font-mono text-neutral-500">
            Exact runtime schema checked on all API endpoints.
          </div>
        </div>

        {/* Live Dev Console HUD */}
        <div className="p-8 rounded-3xl bg-black text-white shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
              <span className="text-white font-bold">dopamint dev console</span>
              <span className="text-neutral-400">agent: personal-agent-v0.4</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-1 text-white">
                <div className="text-[10px] text-neutral-500 uppercase">Capabilities</div>
                <div>✓ message.send</div>
                <div>✓ calendar.read</div>
                <div>✓ booking.create</div>
                <div>✓ payment.create</div>
              </div>
              <div className="space-y-1 text-neutral-400">
                <div className="text-[10px] text-neutral-500 uppercase">Restricted</div>
                <div>✕ wallet.withdraw</div>
                <div>✕ unlimited.transfer</div>
                <div>✕ arbitrary.contract</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-800 text-center font-mono text-xs">
              <div className="p-3 rounded-xl bg-neutral-900">
                <div className="text-lg font-black text-white">7</div>
                <div className="text-[10px] text-neutral-400">Active Caps</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900">
                <div className="text-lg font-black text-white">141</div>
                <div className="text-[10px] text-neutral-400">Verified</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900">
                <div className="text-lg font-black text-white">2</div>
                <div className="text-[10px] text-neutral-400">Blocked</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-neutral-400">
            Demo data — reflects the shape of the production dashboard.
          </div>
        </div>

      </div>

      {/* 5 Core Principles Grid */}
      <div className="mb-20 space-y-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
            Five rules for agents we trust.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((rule) => (
            <div key={rule.num} className="parchment-card p-6 rounded-3xl text-left space-y-2">
              <div className="text-sm font-mono font-bold text-black">{rule.num}</div>
              <h4 className="text-base font-extrabold text-black font-sans">{rule.title}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* High-Impact Closing CTA Launchpad */}
      <div id="cta" className="rounded-[2.5rem] bg-black text-white p-8 sm:p-14 text-center shadow-2xl space-y-6">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          JUST ASK
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-display tracking-tight text-white">
          The next interface <br />
          <span className="font-serif italic font-normal text-white">
            isn't an app.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 max-w-lg mx-auto font-normal">
          Just ask for what you need. One of our agents handles it — inside whatever limits you set. No cap.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Type1Button
            href="#hero"
            variant="light"
            className="!w-56 !h-12"
          >
            Get DopaMint
          </Type1Button>

          <Type1Button
            href="#trust"
            variant="light"
            className="!w-56 !h-12 !border-white/40 opacity-90 hover:opacity-100"
          >
            See How It Works
          </Type1Button>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-neutral-400">
          <span className="text-white">Policy-scoped execution</span>
          <span>·</span>
          <span className="text-white">Signed receipts</span>
          <span>·</span>
          <span className="text-white">Built in San Francisco</span>
        </div>
      </div>

    </section>
  );
};
