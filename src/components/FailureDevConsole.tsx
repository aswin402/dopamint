import React, { useState } from 'react';
import { AlertOctagon, Terminal, ShieldCheck, CheckCircle2, XCircle, Code, Cpu, Lock } from 'lucide-react';

export const FailureDevConsole: React.FC = () => {
  const [isSimulatedViolation, setIsSimulatedViolation] = useState(false);

  return (
    <section id="architecture" className="py-24 sm:py-32 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-mono font-bold uppercase tracking-wider">
            <AlertOctagon className="w-3.5 h-3.5 text-red-600" />
            <span>FAILURE BOUNDS & DEV CONSOLE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-display text-slate-950 tracking-tight leading-[0.96]">
            Assume the agent will <br />
            <span className="text-red-600">eventually make a mistake.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
            We don't try to build an agent that never fails. We build a system where failure is bounded, observable, and recoverable.
          </p>
        </div>

        {/* Failure Bounds Interactive Card */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border-2 border-slate-800 shadow-2xl max-w-5xl mx-auto mb-16 space-y-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
            <span className="text-red-400 font-bold uppercase">POLICY VIOLATION INTERCEPTOR</span>
            <span className="text-slate-400">AUTOMATIC CIRCUIT BREAKER</span>
          </div>

          {/* Interactive Trigger */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-mono text-xs">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Agent requested:</span>
                  <span className="text-red-400 font-bold">transfer $10,000</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Allowed / transaction:</span>
                  <span className="text-slate-200">$100.00</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Authorization:</span>
                  <span className="text-red-400 font-bold">FAILED ✕</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Policy:</span>
                  <span className="text-red-400 font-bold">FAILED ✕</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Execution:</span>
                  <span className="text-red-400 font-bold">BLOCKED ✕</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-red-950/80 border border-red-500/80 text-red-300 font-bold text-center uppercase tracking-wider">
                🛑 AGENT FROZEN · CREDENTIAL REVOKED
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="text-slate-400 font-bold">Automatic Recovery Pipeline:</div>
              <div className="space-y-1.5 text-slate-300">
                <div className="p-2 rounded bg-slate-900">01. Policy violation detected</div>
                <div className="p-2 rounded bg-slate-900">02. Action blocked & intercepted</div>
                <div className="p-2 rounded bg-slate-900">03. Credential revoked instantly</div>
                <div className="p-2 rounded bg-slate-900">04. Agent frozen in sandbox</div>
                <div className="p-2 rounded bg-slate-900">05. Cryptographic evidence preserved</div>
                <div className="p-2 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                  06. Flagged for human review
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-center text-slate-400 pt-4 border-t border-slate-800 font-sans italic">
            "We don't design agents assuming they're perfect. We design the system assuming they aren't."
          </p>

        </div>

        {/* System Architecture & Dev Console Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left: Code Policy Inspector (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-400">
                  policy.payments-v2.ts
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Active Runtime Policy
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                Every agent is transparent by default.
              </h3>
              <p className="text-xs text-slate-600">
                Not a system-prompt promise. An explicit policy file the runtime checks on every call.
              </p>

              {/* Code Snippet Box */}
              <pre className="p-4 rounded-2xl bg-slate-950 text-slate-200 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner">
                <span className="text-slate-500">// policy.payments-v2.ts</span><br />
                <span className="text-blue-400">export const</span> <span className="text-emerald-400">policy</span>: AgentPolicy = &#123;<br />
                &nbsp;&nbsp;capability: <span className="text-amber-300">"payments.send"</span>,<br />
                &nbsp;&nbsp;version: <span className="text-amber-300">"payments-v2"</span>,<br />
                &nbsp;&nbsp;limits: &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;perTransaction: <span className="text-emerald-400">100</span>,   <span className="text-slate-500">// USD</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;dailyMax: <span className="text-emerald-400">250</span>,         <span className="text-slate-500">// USD</span><br />
                &nbsp;&nbsp;&#125;,<br />
                &nbsp;&nbsp;allow: [<span className="text-amber-300">"subscriptions"</span>, <span className="text-amber-300">"restaurants"</span>, <span className="text-amber-300">"travel"</span>],<br />
                &nbsp;&nbsp;block: [<span className="text-red-400">"withdrawals"</span>, <span className="text-red-400">"unknown_contracts"</span>, <span className="text-red-400">"unlimited_transfers"</span>],<br />
                &nbsp;&nbsp;onViolation: <span className="text-red-400">"block_and_revoke"</span>,<br />
                &#125;;
              </pre>
            </div>

            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100">
              This is the exact policy the payments demo checks against — not illustrative copy.
            </div>
          </div>

          {/* Right: Live Dev Console Dashboard (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-2 border-slate-800 space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <span className="text-emerald-400 font-bold">dopamint dev console</span>
                <span className="text-slate-400">agent: personal-agent-v0.4</span>
              </div>

              {/* Live Capabilities List */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-1 text-emerald-400">
                  <div className="text-[10px] text-slate-400 uppercase">Capabilities</div>
                  <div>✓ message.send</div>
                  <div>✓ calendar.read</div>
                  <div>✓ booking.create</div>
                  <div>✓ payment.create</div>
                  <div>✓ wallet.read</div>
                </div>
                <div className="space-y-1 text-red-400">
                  <div className="text-[10px] text-slate-400 uppercase">Restricted</div>
                  <div>✕ wallet.withdraw</div>
                  <div>✕ unlimited.transfer</div>
                  <div>✕ arbitrary.contract.call</div>
                </div>
              </div>

              {/* Trust Dashboard Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900">
                  <div className="text-lg font-black text-white">7</div>
                  <div className="text-[10px] text-slate-400">Active Caps</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900">
                  <div className="text-lg font-black text-emerald-400">141</div>
                  <div className="text-[10px] text-slate-400">Verified</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900">
                  <div className="text-lg font-black text-red-400">2</div>
                  <div className="text-[10px] text-slate-400">Blocked</div>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400">
              Demo data — reflects the shape of the production dashboard, not a live feed.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
