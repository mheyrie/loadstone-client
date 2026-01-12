import Button from "@/components/ui/Button";
import StatCard from "../StatCard";
import SearchInput from "@/components/_shared/SearchInput";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import AllTable from "./AllTable";
import InvestmentTypeModal from "@/components/ui/modal/invest/InvestmentTypeModal";
import InvestmentDetailsModal, { type InvestmentFormData } from "@/components/ui/modal/invest/InvestmentDetailsModal";
import InvestmentConfirmationModal from "@/components/ui/modal/invest/InvestmentConfirmationModal";
import InvestmentSuccessModal from "@/components/ui/modal/invest/InvestmentSuccessModal";
import InvestmentPaymentModal from "@/components/ui/modal/invest/InvestmentPaymentModal";

type InvestmentType = "basic" | "classic" | "elite" | "diamond";

const InvestMainSkeleton = () => (
  <div className="bg-white shadow-2xl">
    <div className="flex items-center justify-between px-6 py-4">
      <Skeleton width={100} height={24} />
      <Skeleton width={150} height={40} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 px-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 bg-gray-50 rounded-lg">
          <Skeleton height={20} width="60%" className="mb-2" />
          <Skeleton height={28} width="80%" />
        </div>
      ))}
    </div>
    <div className="px-6">
      <Skeleton height={40} width="100%" className="mb-4" />
    </div>
    <div className="px-6 pb-6">
      <Skeleton height={400} width="100%" />
    </div>
  </div>
);

export default function InvestMain() {
  const [isLoading] = useState(false);
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
 
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Investment data
  const [selectedType, setSelectedType] = useState<InvestmentType | "">("");
  const [investmentData, setInvestmentData] =
    useState<InvestmentFormData | null>(null);

  const handleInvestNowClick = () => {
    setIsTypeModalOpen(true);
  };

  const handleSelectType = (type: InvestmentType) => {
    setSelectedType(type);
    setIsTypeModalOpen(false);
    setIsDetailsModalOpen(true);
  };

  const handleDetailsNext = (data: InvestmentFormData) => {
    setInvestmentData(data);
    setIsDetailsModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmInvestment = () => {
    setIsConfirmationModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handlePaymentComplete = () => {
    setIsPaymentModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccessModalOpen(false);
    // Reset all data
    setSelectedType("");
    setInvestmentData(null);
  };

  const handleCloseTypeModal = () => {
    setIsTypeModalOpen(false);
    setSelectedType("");
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setIsTypeModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setIsDetailsModalOpen(true);
  };

   const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setIsConfirmationModalOpen(true);
  };
  
  if (isLoading) {
    return <InvestMainSkeleton />;
  }

  return (
    <>
      <div className="bg-white shadow-2xl">
        <motion.div
          initial={{ x: 20 }}
          transition={{ duration: 0.1 }}
          animate={{ x: 0 }}
        >
          <div className=" flex items-center justify-between  px-6 py-4">
            <h3 className=" font-bold text-brand-purple min-w-28">Invest </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 py-4">
            <StatCard
              title="Lend"
              value="₦5,000,000.00"
              titleSize="lg"
              variant="one"
              action={
                <Button
                  content="Lend Now"
                  classes="secondary-btn btn-sm sm:btn-md"
                    onClick={handleInvestNowClick}
              
                />
              }
            />
            <StatCard
              title="Invest"
              value="₦0.00"
              variant="two"
              titleSize="lg"
              action={
                <Button
                  content="Save Now"
                  classes="secondary-btn btn-sm sm:btn-md"
                  onClick={() => console.log("Save Now clicked")}
                />
              }
            />
          </div>

          <div className="px-4 sm:px-6">
            <SearchInput />
          </div>
          <AllTable />
          {/* Request Loan Modal */}
          {/* <Modal
          isOpen={isAddGuarantorOpen}
          onClose={() => setIsAddGuarantorOpen(false)}
          title=""
          maxWidth="lg"
          useBackgroundImage={false}
        >
          <Form form={form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <RequestLoan control={form.control} />
              <div className="flex gap-3 justify-end mt-6">
                <Button
                  content="Cancel"
                  classes="secondary-btn btn-md"
                  onClick={() => setIsAddGuarantorOpen(false)}
                  type="button"
                />
                <Button
                  content="Submit Request"
                  classes="primary-btn btn-md"
                  type="submit"
                />
              </div>
            </form>
          </Form>
        </Modal> */}
        </motion.div>
      </div>

      {/* Investment Modals - Sequential Flow */}
      <InvestmentTypeModal
        isOpen={isTypeModalOpen}
        onClose={handleCloseTypeModal}
        onSelectType={handleSelectType}
      />

      <InvestmentDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={handleCloseDetailsModal}
        onNext={handleDetailsNext}
        investmentType={selectedType}
      />

      <InvestmentConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={handleCloseConfirmationModal}
        onConfirm={handleConfirmInvestment}
        investmentType={selectedType}
        investmentData={investmentData}
      />

       <InvestmentPaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
        onPaymentComplete={handlePaymentComplete}
        investmentType={selectedType}
        investmentData={investmentData}
      />

      <InvestmentSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccess}
        investmentType={selectedType}
        amount={investmentData?.amount || "0"}
      />
    </>
  );
}
