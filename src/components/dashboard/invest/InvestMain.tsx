import Button from "@/components/ui/Button";
import StatCard from "../StatCard";
import SearchInput from "@/components/_shared/SearchInput";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import AllTable from "./AllTable";
import InvestmentTypeModal, { type InvestmentPlan } from "@/components/ui/modal/invest/InvestmentTypeModal";
import InvestmentPlanDetailsModal from "@/components/ui/modal/invest/InvestmentPlanDetailsModal";
import InvestmentAmountModal from "@/components/ui/modal/invest/InvestmentAmountModal";
import InvestmentConfirmationModal from "@/components/ui/modal/invest/InvestmentConfirmationModal";
import InvestmentPaymentModal from "@/components/ui/modal/invest/InvestmentPaymentModal";
import InvestmentSuccessModal from "@/components/ui/modal/invest/InvestmentSuccessModal";

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
  
  // Modal states for the new flow
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
  const [isPlanDetailsModalOpen, setIsPlanDetailsModalOpen] = useState(false);
  const [isAmountModalOpen, setIsAmountModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Investment data
  const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number>(0);

  // Step 1: Open type selection modal
  const handleInvestNowClick = () => {
    setIsTypeModalOpen(true);
  };

  // Step 2: Plan selected, show details
  const handleSelectType = (plan: InvestmentPlan) => {
    setSelectedPlan(plan);
    setIsTypeModalOpen(false);
    setIsPlanDetailsModalOpen(true);
  };

  // Step 3: From plan details, click "Lend" to go to amount input
  const handleLendClick = () => {
    setIsPlanDetailsModalOpen(false);
    setIsAmountModalOpen(true);
  };

  // Step 4: Amount entered, go to confirmation
  const handleAmountSubmit = (amount: number) => {
    setInvestmentAmount(amount);
    setIsAmountModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  // Step 5: Confirmed, go to payment
  const handleConfirmInvestment = () => {
    setIsConfirmationModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  // Step 6: Payment complete, show success
  const handlePaymentComplete = () => {
    setIsPaymentModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  // Close handlers
  const handleCloseSuccess = () => {
    setIsSuccessModalOpen(false);
    // Reset all data
    setSelectedPlan(null);
    setInvestmentAmount(0);
  };

  const handleCloseTypeModal = () => {
    setIsTypeModalOpen(false);
    setSelectedPlan(null);
  };

  const handleClosePlanDetailsModal = () => {
    setIsPlanDetailsModalOpen(false);
    setIsTypeModalOpen(true);
  };

  const handleCloseAmountModal = () => {
    setIsAmountModalOpen(false);
    setIsPlanDetailsModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setIsAmountModalOpen(true);
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
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <h3 className="font-bold text-brand-purple min-w-20 sm:min-w-28 text-sm sm:text-base">Invest</h3>
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
        </motion.div>
      </div>

      {/* Investment Modals - New Sequential Flow */}
      {/* Select Investment Type */}
      <InvestmentTypeModal
        isOpen={isTypeModalOpen}
        onClose={handleCloseTypeModal}
        onSelectType={handleSelectType}
      />

      {/* View Plan Details with Graph */}
      <InvestmentPlanDetailsModal
        isOpen={isPlanDetailsModalOpen}
        onClose={handleClosePlanDetailsModal}
        onLend={handleLendClick}
        plan={selectedPlan}
      />

      {/* Enter Investment Amount */}
      {selectedPlan && (
        <InvestmentAmountModal
          isOpen={isAmountModalOpen}
          onClose={handleCloseAmountModal}
          onNext={handleAmountSubmit}
          minAmount={selectedPlan.minAmount}
          maxAmount={selectedPlan.maxAmount}
          planTitle={selectedPlan.title}
        />
      )}

      {/* Confirm with User ID and Fees */}
      <InvestmentConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={handleCloseConfirmationModal}
        onConfirm={handleConfirmInvestment}
        investmentType={selectedPlan?.title || ""}
        amount={investmentAmount}
      />

      {/* Payment Options & Summary */}
      <InvestmentPaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
        onPaymentComplete={handlePaymentComplete}
        investmentType={selectedPlan?.title || ""}
        amount={investmentAmount}
      />

      {/* Success */}
      <InvestmentSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccess}
        investmentType={selectedPlan?.title}
        amount={investmentAmount.toString()}
      />
    </>
  );
}
