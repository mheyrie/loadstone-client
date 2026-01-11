import Button from "@/components/ui/Button";
import { Form } from "@/components/ui/form";
import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import type { BankTransferForm, WalletTransferForm } from "@/types/wallet";

import { useForm } from "react-hook-form";

export default function Transfer() {
  const bankTransferForm = useForm<BankTransferForm>({
    defaultValues: {
      bankName: "",
      accountNumber: "",
      accountName: "",
      amount: "",
      narration: "",
    },
  });

  const walletTransferForm = useForm<WalletTransferForm>({
    defaultValues: {
      walletId: "",
      amount: "",
      narration: "",
    },
  });

  const bankOptions = [
    { value: "access", label: "Access Bank" },
    { value: "gtbank", label: "GTBank" },
    { value: "firstbank", label: "First Bank" },
    { value: "zenith", label: "Zenith Bank" },
    { value: "uba", label: "UBA" },
    { value: "fidelity", label: "Fidelity Bank" },
  ];

  const handleCloseModal = () => {
    bankTransferForm.reset();
    walletTransferForm.reset();
  };

  const onBankTransferSubmit = (data: BankTransferForm) => {
    console.log("Bank transfer submitted:", data);
    handleCloseModal();
  };



  return (
    <Form form={bankTransferForm}>
      <form
        onSubmit={bankTransferForm.handleSubmit(onBankTransferSubmit)}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold text-brand-purple">
          Transfer to Bank
        </h3>
        <div className="space-y-3">
          <FormFieldSelect
            control={bankTransferForm.control}
            name="bankName"
            label="Select Bank"
            options={bankOptions}
            placeholder="Choose bank"
            className="text-gray-500"
          />
          <FormFieldText
            control={bankTransferForm.control}
            name="accountNumber"
            label="Account Number"
            type="text"
            placeholder="Enter account number"
            className="text-gray-500"
          />
          <FormFieldText
            control={bankTransferForm.control}
            name="accountName"
            label="Account Name"
            type="text"
            placeholder="Account name will appear here"
            className="text-gray-500"
          />
          <FormFieldText
            control={bankTransferForm.control}
            name="amount"
            label="Amount"
            type="text"
            placeholder="Enter amount"
            className="text-gray-500"
          />
          <FormFieldText
            control={bankTransferForm.control}
            name="narration"
            label="Narration (Optional)"
            type="text"
            placeholder="Add a note"
            className="text-gray-500"
          />
        </div>
        <div className="flex gap-3 justify-end mt-6">
          <Button
            content="Cancel"
            classes="secondary-btn btn-md"
            onClick={handleCloseModal}
            type="button"
          />
          <Button
            content="Transfer"
            classes="primary-btn btn-md"
            type="submit"
          />
        </div>
      </form>
    </Form>
  );
}
