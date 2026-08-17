import React from 'react';

export const RenaissanceExecution: React.FC = () => {
  return (
    <section id="execution" className="py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none border-t border-neutral-300/70">
      
      {/* Chapter Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-8 pb-3 border-b border-neutral-300">
        <span>CHAPTER V // RUNTIME ISOLATION</span>
        <span className="font-serif italic text-base text-black">V</span>
      </div>

      {/* Editorial Title */}
      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <h2 className="text-4xl sm:text-6xl font-black text-display text-black tracking-tight leading-[0.96]">
          Your agent shouldn't live in <br />
          <span className="font-serif italic font-normal text-black">
            someone else's sandbox.
          </span>
        </h2>
        <p className="text-base text-neutral-700 font-normal leading-relaxed">
          Everything your agent knows or can touch stays in its own lane — not some shared server it's crashing on.
        </p>
      </div>

      {/* Internal Scope Architecture Box */}
      <div className="rounded-3xl bg-black text-white p-8 sm:p-12 shadow-xl mb-16 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono">
          <span className="text-white font-bold uppercase">DopaMint Agent — internal scope</span>
          <span className="text-neutral-400">ISOLATED RUNTIME</span>
        </div>

        {/* Scope Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center font-mono text-xs">
          {['Model', 'System prompt', 'Memory', 'Tool registry', 'Credentials', 'Policies'].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-white font-bold">
              {item}
            </div>
          ))}
        </div>

        {/* Trust Boundary Banner */}
        <div className="py-3 px-6 rounded-2xl bg-neutral-900 border border-white/20 text-center font-mono text-xs font-extrabold text-white tracking-widest uppercase">
          🔒 TRUST BOUNDARY — DETERMINISTIC INTERCEPTOR
        </div>

        {/* External Access Surfaces */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono text-xs">
          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300">
            <span className="font-bold text-white">iMessage</span>
            <div className="text-[10px] text-neutral-500 mt-0.5">Linq Protocol</div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300">
            <span className="font-bold text-white">External APIs</span>
            <div className="text-[10px] text-neutral-500 mt-0.5">Scoped Tokens</div>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300">
            <span className="font-bold text-white">Web3 & Wallets</span>
            <div className="text-[10px] text-neutral-500 mt-0.5">MPC Enclave</div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="parchment-card p-6 rounded-3xl space-y-2 text-left">
          <h3 className="text-base font-extrabold text-black">Scoped</h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-normal">
            Each credential is issued for one capability, one agent, one context — never a blanket key.
          </p>
        </div>

        <div className="parchment-card p-6 rounded-3xl space-y-2 text-left">
          <h3 className="text-base font-extrabold text-black">Isolated</h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-normal">
            The agent's memory and tool access live inside its own runtime, not a shared pool across tenants.
          </p>
        </div>

        <div className="parchment-card p-6 rounded-3xl space-y-2 text-left">
          <h3 className="text-base font-extrabold text-black">Revocable</h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-normal">
            Any credential can be pulled instantly. Revocation doesn't wait for a code deploy.
          </p>
        </div>

        <div className="parchment-card p-6 rounded-3xl space-y-2 text-left">
          <h3 className="text-base font-extrabold text-black">Never over-exposed</h3>
          <p className="text-xs text-neutral-600 leading-relaxed font-normal">
            The model sees what a task requires — not the full set of keys it could theoretically use.
          </p>
        </div>
      </div>

      {/* Badges Footer */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-neutral-300 text-xs font-mono text-neutral-600 font-bold">
        <span className="text-black">Scoped credentials</span>
        <span className="text-neutral-400">·</span>
        <span className="text-black">Capability tokens</span>
        <span className="text-neutral-400">·</span>
        <span className="text-black">Isolated runtime</span>
        <span className="text-neutral-400">·</span>
        <span className="text-black">Confidential execution (TEE) — planned</span>
      </div>

    </section>
  );
};
