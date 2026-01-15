import Modal from "../Modal";
import Button from "../../Button";

interface InvestmentConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  investmentType: string;
  amount: number;
  userId?: string;
}

export default function InvestmentConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  investmentType,
  amount,
  userId = "USR-2024-12345",
}: InvestmentConfirmationModalProps) {
  const transactionFee = (amount || 0) * 0.015; // 1.5% transaction fee
  const total = (amount || 0) + transactionFee;

  const formatAmount = (value: number) => {
    if (value === undefined || value === null || isNaN(value)) {
      return '₦0.00';
    }
    return `₦${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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
              <span className="text-gray-600">User ID:</span>
              <span className="font-semibold text-gray-900">
                {userId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Investment Plan:</span>
              <span className="font-semibold text-gray-900 capitalize">
                {investmentType}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-semibold text-gray-900">
                {formatAmount(amount)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction Fee (1.5%):</span>
              <span className="font-semibold text-gray-900">
                {formatAmount(transactionFee)}
              </span>
            </div>
            <div className="border-t border-purple-200 pt-3 mt-3">
              <div className="flex justify-between">
                <span className="text-gray-900 font-semibold">Total:</span>
                <span className="font-bold text-brand-purple text-lg">
                  {formatAmount(total)}
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
          />
          <Button
            content="Confirm"
            classes="primary-btn btn-md flex-1"
            onClick={onConfirm}
          />
        </div>
      </div>
    </Modal>
  );
}