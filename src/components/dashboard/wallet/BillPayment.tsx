import { mdiFlash, mdiTelevisionClassic, mdiWater, mdiWifi } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import Electricity from "./billPayment/Electricity";
import type { BillPaymentForm, BillType } from "@/types/wallet";
import Data from "./billPayment/Data";
import Cable from "./billPayment/Cable";
import Airtime from "./billPayment/Airtime";

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
            <Airtime />
          </div>
        );
      case "Data":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-purple">Buy Data</h3>
            <Data />
          </div>
        );
      case "Cable":
        return <Cable />;
      case "Electricity":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-purple">
              Pay Electricity Bill
            </h3>
            <Electricity />
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
