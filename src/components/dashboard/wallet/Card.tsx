import { mdiAccessPoint, mdiChevronRight, mdiRecycle, mdiWallet } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";
import { FormFieldDate } from "@/components/ui/forms/FormFieldDate";

type TransferType = "Bank Transfer" | "Wallet Transfer" | "Generated E-statement";

type BankTransferForm = {
  bankName?: string;
  accountNumber?: string;
  accountName?: string;
  amount?: string;
  narration?: string;
};

type WalletTransferForm = {
  walletId?: string;
  amount?: string;
  narration?: string;
};

type EStatementForm = {
  startDate?: string;
  endDate?: string;
  format?: string;
};

export default function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TransferType | null>(null);

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

  const eStatementForm = useForm<EStatementForm>({
    defaultValues: {
      startDate: "",
      endDate: "",
      format: "pdf",
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

  const formatOptions = [
    { value: "pdf", label: "PDF" },
    { value: "csv", label: "CSV" },
    { value: "excel", label: "Excel" },
  ];

  const content = [
    {
      title: "Bank Transfer" as TransferType,
      Icon: mdiWallet,
      Icon2: mdiChevronRight,
    },
    {
      title: "Wallet Transfer" as TransferType,
      Icon: mdiRecycle,
      Icon2: mdiChevronRight,
    },
    {
      title: "Generated E-statement" as TransferType,
      Icon: mdiAccessPoint,
      Icon2: mdiChevronRight,
    },
  ];

  const handleCardClick = (option: TransferType) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOption(null);
    bankTransferForm.reset();
    walletTransferForm.reset();
    eStatementForm.reset();
  };

  const onBankTransferSubmit = (data: BankTransferForm) => {
    console.log("Bank transfer submitted:", data);
    handleCloseModal();
  };

  const onWalletTransferSubmit = (data: WalletTransferForm) => {
    console.log("Wallet transfer submitted:", data);
    handleCloseModal();
  };

  const onEStatementSubmit = (data: EStatementForm) => {
    console.log("E-statement request submitted:", data);
    handleCloseModal();
  };

  const renderModalContent = () => {
    switch (selectedOption) {
      case "Bank Transfer":
        return (
          <Form form={bankTransferForm}>
            <form onSubmit={bankTransferForm.handleSubmit(onBankTransferSubmit)} className="space-y-4">
              <h3 className="text-xl font-bold text-brand-purple">Transfer to Bank</h3>
              <div className="space-y-3">
                <FormFieldSelect
                  control={bankTransferForm.control}
                  name="bankName"
                  label="Select Bank"
                  options={bankOptions}
                  placeholder="Choose bank"
                />
                <FormFieldText
                  control={bankTransferForm.control}
                  name="accountNumber"
                  label="Account Number"
                  type="text"
                  placeholder="Enter account number"
                />
                <FormFieldText
                  control={bankTransferForm.control}
                  name="accountName"
                  label="Account Name"
                  type="text"
                  placeholder="Account name will appear here"
                />
                <FormFieldText
                  control={bankTransferForm.control}
                  name="amount"
                  label="Amount"
                  type="text"
                  placeholder="Enter amount"
                />
                <FormFieldText
                  control={bankTransferForm.control}
                  name="narration"
                  label="Narration (Optional)"
                  type="text"
                  placeholder="Add a note"
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
      case "Wallet Transfer":
        return (
          <Form form={walletTransferForm}>
            <form onSubmit={walletTransferForm.handleSubmit(onWalletTransferSubmit)} className="space-y-4">
              <h3 className="text-xl font-bold text-brand-purple">Transfer to Wallet</h3>
              <div className="space-y-3">
                <FormFieldText
                  control={walletTransferForm.control}
                  name="walletId"
                  label="Wallet ID / Email"
                  type="text"
                  placeholder="Enter wallet ID or email"
                />
                <FormFieldText
                  control={walletTransferForm.control}
                  name="amount"
                  label="Amount"
                  type="text"
                  placeholder="Enter amount"
                />
                <FormFieldText
                  control={walletTransferForm.control}
                  name="narration"
                  label="Narration (Optional)"
                  type="text"
                  placeholder="Add a note"
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
      case "Generated E-statement":
        return (
          <Form form={eStatementForm}>
            <form onSubmit={eStatementForm.handleSubmit(onEStatementSubmit)} className="space-y-4">
              <h3 className="text-xl font-bold text-brand-purple">Generate E-Statement</h3>
              <div className="space-y-3">
                <FormFieldDate
                  control={eStatementForm.control}
                  name="startDate"
                  label="Start Date"
                  placeholder="Select start date"
                />
                <FormFieldDate
                  control={eStatementForm.control}
                  name="endDate"
                  label="End Date"
                  placeholder="Select end date"
                />
                <FormFieldSelect
                  control={eStatementForm.control}
                  name="format"
                  label="File Format"
                  options={formatOptions}
                  placeholder="Choose format"
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
                  content="Generate"
                  classes="primary-btn btn-md"
                  type="submit"
                />
              </div>
            </form>
          </Form>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-4 rounded-2xl">
        {content.map((service, index) => (
          <span
            className="bg-white flex items-center gap-2 order-2 p-2 py-4 shadow-2xl rounded-lg hover:bg-gray-100 cursor-pointer justify-between"
            key={index}
            onClick={() => handleCardClick(service.title)}
          >
            <span className="flex items-center gap-2">
              <Icon path={service.Icon} size={1} className="text-brand-purple" />
              <h4 className="">{service.title}</h4>
            </span>
            {service.Icon2 && (
              <Icon path={service.Icon2} size={1} className="text-brand-purple text-end" />
            )}
          </span>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        useBackgroundImage={false}
      >
        <div className="p-4">
          {renderModalContent()}
        </div>
      </Modal>
    </>
  );
}
