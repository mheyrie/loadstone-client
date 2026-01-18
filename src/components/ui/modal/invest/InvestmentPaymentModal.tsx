import Modal from "../Modal";
import Button from "../../Button";
import Icon from "@mdi/react";
import { mdiWallet, mdiCreditCard, mdiBankCheck } from "@mdi/js";
import { useState } from "react";

interface InvestmentPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
  investmentType: string;
  amount: number;
  walletId?: string;
}

export default function InvestmentPaymentModal({
  isOpen,
  onClose,
  onPaymentComplete,
  investmentType,
  amount,
  walletId = "WLT-2024-67890",
}: InvestmentPaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

  const transactionFee = amount * 0.015;
  const total = amount + transactionFee;

   const formatAmount = (value: number) => {
    if (value === undefined || value === null || isNaN(value)) {
      return '₦0.00';
    }
    return `₦${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const paymentMethods = [
    {
      id: "wallet",
      icon: mdiWallet,
      title: "Pay with Wallet",
      description: "Use your wallet balance",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "card",
      icon: mdiCreditCard,
      title: "Pay with Card",
      description: "Debit or Credit card",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "direct-debit",
      icon: mdiBankCheck,
      title: "Direct Debit",
      description: "Bank account direct debit",
      color: "bg-green-100 text-green-600",
    },
  ];

  const handlePayment = () => {
    if (!selectedPaymentMethod) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="5xl" useBackgroundImage={false}>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Complete Payment
        </h2>
        <p className="text-gray-600 mb-6">
          Choose your payment method and review the summary
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="space-y-3 mb-6">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                  disabled={isProcessing}
                  className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                    selectedPaymentMethod === method.id
                      ? "border-brand-purple bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
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

            <Button
              content={isProcessing ? "Processing..." : "Make Payment"}
              classes="primary-btn btn-md w-full"
              onClick={handlePayment}
              disabled={!selectedPaymentMethod || isProcessing}
            />
          </div>

        
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Payment Summary</h3>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-purple-200">
                  <span className="text-gray-600">Investment Type:</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {investmentType}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-purple-200">
                  <span className="text-gray-600">Wallet ID:</span>
                  <span className="font-semibold text-gray-900">
                    {walletId}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-purple-200">
                  <span className="text-gray-600">Investment Amount:</span>
                  <span className="font-semibold text-gray-900">
                    {formatAmount(amount)}
                  </span>
                </div>
                <div className="flex justify-between pb-3 border-b border-purple-200">
                  <span className="text-gray-600">Transaction Fee:</span>
                  <span className="font-semibold text-gray-900">
                    {formatAmount(transactionFee)}
                  </span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-900 font-bold text-lg">Total:</span>
                  <span className="font-bold text-brand-purple text-xl">
                    {formatAmount(total)}
                  </span>
                </div>
              </div>
            </div>
\
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Payment Information</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Your payment is secured with bank-level encryption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Transaction fee is 1.5% of the investment amount</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">•</span>
                  <span>Confirmation receipt will be sent to your email</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {isProcessing && (
          <div className="mt-4 p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-purple"></div>
              <p className="text-sm text-gray-700">
                Processing your payment securely. Please wait...
              </p>
            </div>
          </div>
        )}

    
      </div>
    </Modal>
  );
}