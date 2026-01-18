import Modal from "../Modal";
import Button from "../../Button";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";

interface InvestmentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  investmentType?: string;
  amount?: string;
}

export default function InvestmentSuccessModal({
  isOpen,
  onClose,
  investmentType = "Investment",
  amount = "0",
}: InvestmentSuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="sm" useBackgroundImage={false}>
      <div className="p-6">
      
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <Icon path={mdiCheckCircleOutline} size={2.5} className="text-green-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Investment Successful!
          </h2>
          <p className="text-gray-600 mb-4">
            Your investment has been successfully created and is now active.
          </p>
          
          <div className="bg-purple-50 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-600 mb-2">Investment Amount</p>
            <p className="text-2xl font-bold text-brand-purple">
              ₦{Number(amount).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mt-2 capitalize">
              {investmentType.replace("-", " ")}
            </p>
          </div>
        </div>

       
        <Button
          content="View Investments"
          classes="primary-btn btn-md w-full"
          onClick={onClose}
        />
      </div>
    </Modal>
  );
}