
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/modal/Modal";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Success!",
  message = "Operation completed successfully.",
  buttonText = "Close",
}: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="sm" useBackgroundImage={false}>
      <div className="p-6">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <Icon path={mdiCheckCircleOutline} size={2} className="text-green-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600">
            {message}
          </p>
        </div>

        {/* Action Button */}
        <Button
          content={buttonText}
          classes="primary-btn btn-md w-full"
          onClick={onClose}
        />
      </div>
    </Modal>
  );
}