import Modal from "../Modal";
import Button from "../../Button";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

interface InvestmentAmountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (amount: number) => void;
  minAmount: number;
  maxAmount: number;
  planTitle: string;
}

export default function InvestmentAmountModal({
  isOpen,
  onClose,
  onNext,
  minAmount,
  maxAmount,
  planTitle,
}: InvestmentAmountModalProps) {
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === "" || /^\d+$/.test(value)) {
      setAmount(value);
      setError("");
    }
  };

  const handleSubmit = () => {
    const numAmount = Number(amount);

    if (!amount || numAmount === 0) {
      setError("Please enter an amount");
      return;
    }

    if (numAmount < minAmount) {
      setError(`Minimum investment amount is ₦${minAmount.toLocaleString()}`);
      return;
    }

    if (numAmount > maxAmount) {
      setError(`Maximum investment amount is ₦${maxAmount.toLocaleString()}`);
      return;
    }

    onNext(numAmount);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="md"
      useBackgroundImage={false}
    >
      <span className="flex cursor-pointer items-start text-start" onClick={onClose}>
        <Icon path={mdiArrowLeft} size={1} className="text-gray-500" /> Back
      </span>
     
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Amount
        </h2>
        <p className="text-gray-600 mb-6">
          How much would you like to invest in the{" "}
          <span className="font-semibold text-brand-purple capitalize">
            {planTitle}
          </span>{" "}
          plan?
        </p>

        <div className="space-y-6">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investment Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-semibold">
                ₦
              </span>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-purple focus:outline-none text-lg font-semibold"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Investment Limit */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              Investment Limits
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Minimum Amount:</span>
                <span className="font-semibold text-gray-900">
                  ₦{minAmount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Maximum Amount:</span>
                <span className="font-semibold text-gray-900">
                  ₦{maxAmount.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-purple-200 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Available Balance:</span>
                  <span className="font-semibold text-brand-purple">
                    ₦8,500,000.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Quick Select
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                minAmount,
                Math.floor((minAmount + maxAmount) / 2),
                maxAmount,
              ].map((quickAmount) => (
                <button
                  key={quickAmount}
                  onClick={() => setAmount(String(quickAmount))}
                  className="py-2 px-3 border-2 border-gray-300 rounded-lg hover:border-brand-purple hover:bg-purple-50 transition text-sm font-semibold text-gray-700"
                >
                  ₦{(quickAmount / 1000).toFixed(0)}K
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              content="Invest Now"
              classes="primary-btn btn-md flex-1"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
