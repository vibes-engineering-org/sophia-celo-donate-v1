"use client";

import { useState } from "react";
import { DaimoPayTransferButton } from "~/components/daimo-pay-transfer-button";

const DONATION_AMOUNTS = [5, 10, 25, 50];
const RECIPIENT_ADDRESS = "0x4858aBb6dfF69904f1c155D40A48CD8846AEA2f6" as const;

export function DonationApp() {
  const [showThanks, setShowThanks] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handlePaymentCompleted = () => {
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
      setSelectedAmount(null);
    }, 3000);
  };

  if (showThanks) {
    return (
      <div className="w-full max-w-md mx-auto px-4 py-8 text-center">
        <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-8 rounded-2xl shadow-2xl border-4 border-orange-300">
          <div className="text-6xl mb-4">☕</div>
          <h2 className="text-2xl font-bold text-white mb-2 font-mono tracking-wide">
            Thanks for the coffee!
          </h2>
          <p className="text-orange-100 text-lg font-mono">
            Your support means everything
          </p>
          <div className="mt-4 w-16 h-1 bg-white mx-auto rounded-full opacity-60"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-1 rounded-2xl shadow-2xl">
        <div className="bg-gray-900 rounded-xl p-6 shadow-inner">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">☕</div>
            <h1 className="text-2xl font-bold text-white mb-2 font-mono tracking-wide">
              Buy Me a Coffee
            </h1>
            <p className="text-gray-300 text-sm font-mono">
              Support with USDC on Base
            </p>
          </div>

          {/* Recipient Address */}
          <div className="mb-6 p-3 bg-gray-800 rounded-lg border border-gray-700">
            <p className="text-xs text-gray-400 font-mono mb-1">Recipient:</p>
            <p className="text-sm text-green-400 font-mono break-all">
              {RECIPIENT_ADDRESS}
            </p>
          </div>

          {/* Amount Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {DONATION_AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`
                  p-4 rounded-xl font-mono font-bold text-lg transition-all duration-200
                  border-2 hover:scale-105 active:scale-95
                  ${
                    selectedAmount === amount
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-cyan-300 shadow-lg shadow-cyan-500/50"
                      : "bg-gray-800 text-white border-gray-600 hover:border-cyan-400 hover:bg-gray-700"
                  }
                `}
              >
                ${amount} USDC
              </button>
            ))}
          </div>

          {/* Payment Button */}
          {selectedAmount && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-0.5 rounded-xl">
                <div className="bg-gray-900 rounded-lg p-1">
                  <DaimoPayTransferButton
                    text={`Send $${selectedAmount} USDC`}
                    toAddress={RECIPIENT_ADDRESS}
                    amount={selectedAmount.toString()}
                    onPaymentCompleted={handlePaymentCompleted}
                  />
                </div>
              </div>
              
              <button
                onClick={() => setSelectedAmount(null)}
                className="w-full p-2 text-gray-400 text-sm font-mono hover:text-white transition-colors"
              >
                Choose Different Amount
              </button>
            </div>
          )}

          {!selectedAmount && (
            <p className="text-center text-gray-500 text-sm font-mono">
              Select an amount above to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
}