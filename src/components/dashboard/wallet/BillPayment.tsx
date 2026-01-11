import { mdiFlash, mdiTelevisionClassic, mdiWater, mdiWifi } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { FormFieldText } from "@/components/ui/forms/FormFieldText";
import { FormFieldSelect } from "@/components/ui/forms/FormFieldSelect";

type BillType = "Airtime" | "Data" | "Cable" | "Electricity";

type BillPaymentForm = {
  network?: string;
  phoneNumber?: string;
  amount?: string;
  dataPlan?: string;
  provider?: string;
  smartCardNumber?: string;
  package?: string;
  disco?: string;
  meterNumber?: string;
};

export default function BillPayment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState<BillType | null>(null);

  const form = useForm<BillPaymentForm>({
    defaultValues: {
      network: "",
      phoneNumber: "",
      amount: "",
      dataPlan: "",
      provider: "",
      smartCardNumber: "",
      package: "",
      disco: "",
      meterNumber: "",
    },
  });

  const networkOptions = [
    { value: "mtn", label: "MTN" },
    { value: "airtel", label: "Airtel" },
    { value: "glo", label: "Glo" },
    { value: "9mobile", label: "9mobile" },
  ];

  const dataPlanOptions = [
    { value: "1gb", label: "1GB - ₦500" },
    { value: "2gb", label: "2GB - ₦1,000" },
    { value: "5gb", label: "5GB - ₦2,500" },
    { value: "10gb", label: "10GB - ₦5,000" },
  ];

  const cableProviderOptions = [
    { value: "dstv", label: "DSTV" },
    { value: "gotv", label: "GOTV" },
    { value: "startimes", label: "Startimes" },
  ];

  const cablePackageOptions = [
    { value: "compact", label: "Compact - ₦10,500" },
    { value: "premium", label: "Premium - ₦24,500" },
    { value: "compactplus", label: "Compact Plus - ₦16,200" },
  ];

  const discoOptions = [
    { value: "ikedc", label: "IKEDC" },
    { value: "ekedc", label: "EKEDC" },
    { value: "aedc", label: "AEDC" },
    { value: "phed", label: "PHED" },
  ];

  const billPaymentCards = [
    {
      title: "Airtime" as BillType,
      Icon: mdiFlash,
    },
    {
      title: "Data" as BillType,
      Icon: mdiWater,
    },
    {
      title: "Cable" as BillType,
      Icon: mdiWifi,
    },
    {
      title: "Electricity" as BillType,
      Icon: mdiTelevisionClassic,
    },
  ];

  const handleCardClick = (billType: BillType) => {
    setSelectedBill(billType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBill(null);
    form.reset();
  };

  const onSubmit = (data: BillPaymentForm) => {
    console.log("Bill payment submitted:", data);
    // Handle bill payment submission here
    handleCloseModal();
  };

  const renderModalContent = () => {
    switch (selectedBill) {
      case "Airtime":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-purple">Buy Airtime</h3>
            <div className="space-y-3">
              <FormFieldSelect
                control={form.control}
                name="network"
                label="Select Network"
                options={networkOptions}
                placeholder="Choose network"
              />
              <FormFieldText
                control={form.control}
                name="phoneNumber"
                label="Phone Number"
                type="text"
                placeholder="080XXXXXXXX"
                className="text-gray-700"
              />
              <FormFieldText
                control={form.control}
                name="amount"
                label="Amount"
                type="text"
                placeholder="Enter amount"
                className="text-gray-500"
              />
            </div>
          </div>
        );
      case "Data":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-purple">Buy Data</h3>
            <div className="space-y-3">
              <FormFieldSelect
                control={form.control}
                name="network"
                label="Select Network"
                options={networkOptions}
                placeholder="Choose network"
              />
              <FormFieldText
                control={form.control}
                name="phoneNumber"
                label="Phone Number"
                type="text"
                placeholder="080XXXXXXXX"
                className="text-gray-700"
              />
              <FormFieldSelect
                control={form.control}
                name="dataPlan"
                label="Select Data Plan"
                options={dataPlanOptions}
                placeholder="Choose data plan"
              />
            </div>
          </div>
        );
      case "Cable":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-purple">
              Cable Subscription
            </h3>
            <div className="space-y-3">
              <FormFieldSelect
                control={form.control}
                name="provider"
                label="Select Provider"
                options={cableProviderOptions}
                placeholder="Choose provider"
              />
              <FormFieldText
                control={form.control}
                name="smartCardNumber"
                label="Smart Card Number"
                type="text"
                placeholder="Enter smart card number"
              />
              <FormFieldSelect
                control={form.control}
                name="package"
                label="Select Package"
                options={cablePackageOptions}
                placeholder="Choose package"
              />
            </div>
          </div>
        );
      case "Electricity":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-purple">
              Pay Electricity Bill
            </h3>
            <div className="space-y-3">
              <FormFieldSelect
                control={form.control}
                name="disco"
                label="Select Disco"
                options={discoOptions}
                placeholder="Choose disco"
                className="text-gray-600"
              />
              <FormFieldText
                control={form.control}
                name="meterNumber"
                label="Meter Number"
                type="text"
                placeholder="Enter meter number"
                className="text-gray-600"
              />
              <FormFieldText
                control={form.control}
                name="amount"
                label="Amount"
                type="text"
                placeholder="Enter amount"
                className="text-gray-600"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 my-4 rounded-2xl">
        {billPaymentCards.map((service, index) => (
          <span
            className="bg-[#F3E8FF] flex items-center gap-2 p-2 py-4 shadow-2xl rounded-lg hover:bg-gray-100 cursor-pointer justify-center"
            key={index}
            onClick={() => handleCardClick(service.title)}
          >
            <Icon path={service.Icon} size={1} className="text-brand-purple" />
            <h4 className="font-bold text-brand-purple">{service.title}</h4>
          </span>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="md"
        useBackgroundImage={false}
      >
        <Form form={form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
            {renderModalContent()}
            <div className="flex gap-3  mt-6 w-full">
              <Button
                content="Cancel"
                classes="secondary-btn btn-md"
                onClick={handleCloseModal}
                type="button"
              />
              <Button
                content={`Buy ${selectedBill} `}
                classes="primary-btn btn-md flex-1"
                type="submit"
              />
            </div>
          </form>
        </Form>
      </Modal>
    </>
  );
}
