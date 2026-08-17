import React, { useState } from 'react';
import { Wallet, CreditCard, Plus, X } from 'lucide-react';

interface InteractiveWalletCardProps {
  balance?: string;
  perDay?: string;
  perAction?: string;
  className?: string;
}

export const InteractiveWalletCard: React.FC<InteractiveWalletCardProps> = ({
  balance = "$1,240.00",
  perDay = "$40 / $250",
  perAction = "$40 / $100",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState<'card1' | 'card2'>('card1');
  const [selectedCash, setSelectedCash] = useState<number>(40);

  return (
    <div
      className={`w-full max-w-[340px] border-2 border-neutral-300 rounded-[24px] bg-white transition-all duration-300 overflow-hidden shadow-lg ${
        !isOpen ? 'max-h-[86px] pb-0' : 'max-h-[500px] pb-3'
      } ${className}`}
    >
      {/* Header */}
      <header className="border-b-2 border-neutral-200">
        <div className="flex items-center justify-between p-3.5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-neutral-100 flex items-center justify-center text-black">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-neutral-500 uppercase">Available to spend</p>
              <p className="text-xl font-black font-mono text-black">{balance}</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 rounded-full border-2 border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Toggle wallet"
          >
            {isOpen ? <X className="w-4 h-4 text-neutral-600" /> : <Plus className="w-4 h-4 text-neutral-600" />}
          </button>
        </div>
      </header>

      {/* Expandable Content */}
      {isOpen && (
        <div className="p-4 space-y-4 font-sans text-xs">
          
          <div className="flex items-center justify-between">
            <p className="font-bold text-sm text-black">Connected Settlement</p>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/5 text-black">
              MPC ENCLAVE
            </span>
          </div>

          {/* Cards List */}
          <div className="space-y-2 font-mono">
            <div
              onClick={() => setSelectedCard('card1')}
              className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                selectedCard === 'card1'
                  ? 'bg-neutral-50 border-black ring-1 ring-black'
                  : 'bg-white border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${selectedCard === 'card1' ? 'border-black bg-black' : 'border-neutral-400'}`}>
                  {selectedCard === 'card1' && <div className="w-1.5 h-1.5 bg-white rounded-xs" />}
                </div>
                <span className="font-bold text-black">0x48a…210c (Base L2)</span>
              </div>
              <span className="font-bold text-neutral-500">ETH</span>
            </div>

            <div
              onClick={() => setSelectedCard('card2')}
              className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                selectedCard === 'card2'
                  ? 'bg-neutral-50 border-black ring-1 ring-black'
                  : 'bg-white border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${selectedCard === 'card2' ? 'border-black bg-black' : 'border-neutral-400'}`}>
                  {selectedCard === 'card2' && <div className="w-1.5 h-1.5 bg-white rounded-xs" />}
                </div>
                <span className="font-bold text-black">•••• 4321 (Visa Corporate)</span>
              </div>
              <span className="font-bold text-neutral-500">USD</span>
            </div>
          </div>

          {/* Limits & Quick Budgets */}
          <div className="pt-2 border-t border-neutral-200 space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-neutral-500">per day:</span>
              <span className="font-bold text-black">{perDay}</span>
            </div>
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-neutral-500">per action:</span>
              <span className="font-bold text-black">{perAction}</span>
            </div>

            <div className="pt-2">
              <p className="font-mono text-[10px] uppercase font-bold text-neutral-400 mb-1.5">
                Quick Test Allowance
              </p>
              <div className="grid grid-cols-3 gap-2 text-center font-mono font-bold text-xs">
                {[40, 100, 250].map((val) => (
                  <button
                    key={val}
                    onClick={() => setSelectedCash(val)}
                    className={`py-1.5 rounded-lg border transition-all cursor-pointer ${
                      selectedCash === val
                        ? 'bg-black text-white border-black'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:bg-neutral-100'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
