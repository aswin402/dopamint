import React, { useState, useEffect } from 'react';
import { Terminal, Play, Pause, Copy, Check, ShieldCheck, Zap } from 'lucide-react';

interface LogEntry {
  id: string;
  time: string;
  agent: string;
  agentColor: string;
  message: string;
  type: 'action' | 'policy' | 'settlement' | 'info';
}

const INITIAL_LOGS: LogEntry[] = [
  {
    id: '1',
    time: '09:41:00',
    agent: 'Sol (Trading)',
    agentColor: 'text-amber-400',
    message: 'Watching ETH/USDC price feed... current: 3,402.10',
    type: 'info',
  },
  {
    id: '2',
    time: '09:41:02',
    agent: 'Sol (Trading)',
    agentColor: 'text-amber-400',
    message: 'Limit threshold hit (3,398.20). Proposing swap: 500 USDC → ETH on Base.',
    type: 'action',
  },
  {
    id: '3',
    time: '09:41:03',
    agent: 'Trust Layer',
    agentColor: 'text-emerald-400',
    message: 'Policy evaluated (wallet.swap, cap: $500, slippage: 0.2%). APPROVED ✓',
    type: 'policy',
  },
  {
    id: '4',
    time: '09:41:04',
    agent: 'Base L2',
    agentColor: 'text-cyan-400',
    message: 'Transaction 0x8a91c7…72bd confirmed onchain. Receipt #8F72A stored.',
    type: 'settlement',
  },
  {
    id: '5',
    time: '09:41:06',
    agent: 'Iris (Onchain)',
    agentColor: 'text-indigo-400',
    message: 'HTTP 402 challenge from api.hyperliquid.xyz. Settling 0.0021 ETH via x402.',
    type: 'action',
  },
  {
    id: '6',
    time: '09:41:08',
    agent: 'Ada (Travel)',
    agentColor: 'text-rose-400',
    message: 'Delta 418 SFO → JFK confirmed. Budget $450 compliant. E-ticket issued.',
    type: 'settlement',
  },
];

export const LiveAgentTerminal: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const moreLogs: LogEntry[] = [
        {
          id: Math.random().toString(),
          time: new Date().toLocaleTimeString('en-US', { hour12: false }),
          agent: 'Kai (Finance)',
          agentColor: 'text-emerald-400',
          message: 'Audited monthly subscriptions: $42 saved by auto-canceling duplicate SaaS tier.',
          type: 'info',
        },
        {
          id: Math.random().toString(),
          time: new Date().toLocaleTimeString('en-US', { hour12: false }),
          agent: 'Trust Layer',
          agentColor: 'text-emerald-400',
          message: 'Cryptographic receipt hash verified with zero tamper anomalies. Merkle root valid.',
          type: 'policy',
        },
        {
          id: Math.random().toString(),
          time: new Date().toLocaleTimeString('en-US', { hour12: false }),
          agent: 'Leo (Research)',
          agentColor: 'text-teal-400',
          message: 'Synthesized 54-page regulatory filing into 4 key risk indicators for user dashboard.',
          type: 'action',
        },
      ];

      const nextLog = moreLogs[Math.floor(Math.random() * moreLogs.length)];
      setLogs((prev) => [...prev.slice(-9), nextLog]);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCopy = () => {
    navigator.clipboard.writeText(logs.map((l) => `[${l.time}] ${l.agent}: ${l.message}`).join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredLogs = filter === 'All' ? logs : logs.filter((l) => l.agent.includes(filter));

  return (
    <div className={`rounded-3xl bg-slate-950 text-white border-2 border-slate-800 shadow-2xl p-6 font-mono text-xs overflow-hidden flex flex-col justify-between ${className}`}>
      
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-[11px]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-slate-400 font-bold ml-2">dopamint-telemetry.stream</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE (78ms)</span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title={isPlaying ? 'Pause stream' : 'Resume stream'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Copy logs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Log Feed */}
      <div className="py-4 space-y-2 min-h-[220px] max-h-[260px] overflow-y-auto font-mono text-[11px] leading-relaxed">
        {filteredLogs.map((log) => (
          <div key={log.id} className="flex items-start gap-2 animate-fadeIn">
            <span className="text-slate-500 select-none">[{log.time}]</span>
            <span className={`font-bold ${log.agentColor}`}>{log.agent}:</span>
            <span className="text-slate-200">{log.message}</span>
          </div>
        ))}
      </div>

      {/* Filter Tabs Footer */}
      <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400">
        <div className="flex gap-1.5">
          {['All', 'Sol', 'Iris', 'Ada', 'Trust Layer'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                filter === tab ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <span className="font-semibold text-slate-500">
          Base L2 · Linq iMessage · WebRTC v3
        </span>
      </div>

    </div>
  );
};
