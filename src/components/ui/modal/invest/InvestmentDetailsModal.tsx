import Modal from "../Modal";
import Button from "../../Button";
import { Form } from "../../form";
import { FormFieldText } from "../../forms/FormFieldText";
import { FormFieldSelect } from "../../forms/FormFieldSelect";
import { useForm } from "react-hook-form";

interface InvestmentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (data: InvestmentFormData) => void;
  investmentType: string;
}

export type InvestmentFormData = {
  amount: string;
  duration: string;
  paymentMethod: string;
};

export default function InvestmentDetailsModal({
  isOpen,
  onClose,
  onNext,
  investmentType,
}: InvestmentDetailsModalProps) {
  const form = useForm<InvestmentFormData>({
    defaultValues: {
      amount: "",
      duration: "",
      paymentMethod: "",
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: InvestmentFormData) => {
    onNext(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md" useBackgroundImage={false}>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Investment Details
        </h2>
        <p className="text-gray-600 mb-1">
          Investment Type: <span className="font-semibold text-brand-purple capitalize">{investmentType}</span>
        </p>
        <p className="text-gray-600 mb-6 text-sm">
          Fill in the details for your investment
        </p>

        <Form form={form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormFieldText
              control={control}
              name="amount"
              label="Investment Amount"
              placeholder="Enter amount (e.g., 100000)"
              type="text"
              required
            />

            <FormFieldSelect
              control={control}
              name="duration"
              label="Investment Duration"
              options={[
                { value: "3-months", label: "3 Months" },
                { value: "6-months", label: "6 Months" },
                { value: "12-months", label: "12 Months" },
                { value: "24-months", label: "24 Months" },
                { value: "36-months", label: "36 Months" },
              ]}
              placeholder="Select duration"
            />

            <FormFieldSelect
              control={control}
              name="paymentMethod"
              label="Payment Method"
              options={[
                { value: "wallet", label: "Wallet Balance" },
                { value: "bank-transfer", label: "Bank Transfer" },
                { value: "card", label: "Debit/Credit Card" },
              ]}
              placeholder="Select payment method"
            />

            <div className="flex gap-4 mt-6">
              <Button
                content="Back"
                classes="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition btn-md flex-1"
                onClick={onClose}
                type="button"
              />
              <Button
                content="Continue"
                classes="primary-btn btn-md flex-1"
                type="submit"
              />
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
}