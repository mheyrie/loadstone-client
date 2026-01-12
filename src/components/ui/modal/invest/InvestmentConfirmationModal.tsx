import Modal from "../Modal";
import Button from "../../Button";
import { useState } from "react";
import type { InvestmentFormData } from "./InvestmentDetailsModal";

interface InvestmentConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  investmentType: string;
  investmentData: InvestmentFormData | null;
}

export default function InvestmentConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  investmentType,
  investmentData,
}: InvestmentConfirmationModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirm = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      onConfirm();
    }, 2000);
  };

  if (!investmentData) return null;

  const formatAmount = (amount: string) => {
    return `₦${Number(amount).toLocaleString()}`;
  };

  const formatDuration = (duration: string) => {
    return duration.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  };

  const formatPaymentMethod = (method: string) => {
    return method.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md" useBackgroundImage={false}>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Confirm Investment
        </h2>
        <p className="text-gray-600 mb-6">
          Please review your investment details before confirming
        </p>

        {/* Investment Summary */}
        <div className="bg-purple-50 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Investment Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Investment Type:</span>
              <span className="font-semibold text-gray-900 capitalize">
                {investmentType.replace("-", " ")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-semibold text-gray-900">
                {formatAmount(investmentData.amount)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-semibold text-gray-900">
                {formatDuration(investmentData.duration)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-semibold text-gray-900">
                {formatPaymentMethod(investmentData.paymentMethod)}
              </span>
            </div>
            <div className="border-t border-purple-200 pt-3 mt-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Expected Returns (15%):</span>
                <span className="font-bold text-brand-purple text-lg">
                  {formatAmount(String(Number(investmentData.amount) * 1.15))}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600">
            By confirming this investment, you agree to our terms and conditions. 
            Your investment will be locked for the selected duration and cannot be withdrawn early.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            content="Back"
            classes="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition btn-md flex-1"
            onClick={onClose}
            type="button"
            disabled={isProcessing}
          />
          <Button
            content={isProcessing ? "Processing..." : "Confirm Investment"}
            classes="primary-btn btn-md flex-1"
            onClick={handleConfirm}
            disabled={isProcessing}
          />
        </div>
      </div>
    </Modal>
  );
}