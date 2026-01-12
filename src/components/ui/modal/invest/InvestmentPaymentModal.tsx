import Modal from "../Modal";
import Button from "../../Button";
import Icon from "@mdi/react";
import { mdiWallet, mdiBankTransfer, mdiCreditCard, mdiShieldCheck } from "@mdi/js";
import { useState } from "react";
import type { InvestmentFormData } from "./InvestmentDetailsModal";

interface InvestmentPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
  investmentType: string;
  investmentData: InvestmentFormData | null;
}

export default function InvestmentPaymentModal({
  isOpen,
  onClose,
  onPaymentComplete,
  investmentType,
  investmentData,
}: InvestmentPaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

  if (!investmentData) return null;

  const amount = Number(investmentData.amount);
  const formattedAmount = `₦${amount.toLocaleString()}`;

  const paymentMethods = [
    {
      id: "wallet",
      icon: mdiWallet,
      title: "Wallet Balance",
      description: "Available: ₦8,500,000.00",
      color: "bg-purple-100 text-purple-600",
      available: true,
    },
    {
      id: "bank-transfer",
      icon: mdiBankTransfer,
      title: "Bank Transfer",
      description: "Transfer from your bank account",
      color: "bg-blue-100 text-blue-600",
      available: true,
    },
    {
      id: "card",
      icon: mdiCreditCard,
      title: "Debit/Credit Card",
      description: "Pay with your card",
      color: "bg-green-100 text-green-600",
      available: true,
    },
  ];

  const handlePayment = () => {
    if (!selectedPaymentMethod) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
    }, 3000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md" useBackgroundImage={false}>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Complete Payment
        </h2>
        <p className="text-gray-600 mb-6">
          Choose your preferred payment method to complete this investment
        </p>

        {/* Amount Summary */}
        <div className="bg-purple-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Investment Amount</p>
              <p className="text-2xl font-bold text-brand-purple">{formattedAmount}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Investment Type</p>
              <p className="font-semibold text-gray-900 capitalize">
                {investmentType.replace("-", " ")}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Select Payment Method</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedPaymentMethod(method.id)}
                disabled={!method.available || isProcessing}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  selectedPaymentMethod === method.id
                    ? "border-brand-purple bg-purple-50"
                    : "border-gray-200 hover:border-gray-300"
                } ${!method.available ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon path={method.icon} size={1.2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900">{method.title}</h4>
                      {selectedPaymentMethod === method.id && (
                        <div className="w-5 h-5 rounded-full bg-brand-purple flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-start gap-3">
          <Icon path={mdiShieldCheck} size={1} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-gray-700 font-medium mb-1">Secure Payment</p>
            <p className="text-xs text-gray-600">
              Your payment is secured with bank-level encryption. We never store your payment details.
            </p>
          </div>
        </div>

        {/* Payment Details for Bank Transfer */}
        {selectedPaymentMethod === "bank-transfer" && (
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Bank Transfer Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Bank Name:</span>
                <span className="font-medium text-gray-900">First Bank Nigeria</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Number:</span>
                <span className="font-medium text-gray-900">0123456789</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Name:</span>
                <span className="font-medium text-gray-900">Investment Holdings Ltd</span>
              </div>
            </div>
          </div>
        )}

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
            content={
              isProcessing 
                ? "Processing Payment..." 
                : selectedPaymentMethod 
                ? "Pay Now" 
                : "Select Payment Method"
            }
            classes="primary-btn btn-md flex-1"
            onClick={handlePayment}
            disabled={!selectedPaymentMethod || isProcessing}
          />
        </div>

        {/* Processing Indicator */}
        {isProcessing && (
          <div className="mt-4 p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-purple"></div>
              <p className="text-sm text-gray-700">
                Processing your payment securely. Please do not close this window...
              </p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}