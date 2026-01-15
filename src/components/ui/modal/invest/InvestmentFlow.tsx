import { useState } from "react";
import InvestmentTypeModal, { type InvestmentPlan } from "@/components/ui/modal/invest/InvestmentTypeModal";
import InvestmentPlanDetailsModal from "@/components/ui/modal/invest/InvestmentPlanDetailsModal";
import InvestmentAmountModal from "@/components/ui/modal/invest/InvestmentAmountModal";
import InvestmentConfirmationModal from "@/components/ui/modal/invest/InvestmentConfirmationModal";
import InvestmentPaymentModal from "@/components/ui/modal/invest/InvestmentPaymentModal";
import InvestmentSuccessModal from "@/components/ui/modal/invest/InvestmentSuccessModal";

type ModalStep = "type" | "details" | "amount" | "confirmation" | "payment" | "success";

export default function InvestmentFlow() {
  const [currentStep, setCurrentStep] = useState<ModalStep>("type");
  const [selectedPlan, setSelectedPlan] = useState<InvestmentPlan | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number>(0);

  const handlePlanSelect = (plan: InvestmentPlan) => {
    setSelectedPlan(plan);
    setCurrentStep("details");
  };

  const handleLendClick = () => {
    setCurrentStep("amount");
  };

  const handleAmountSubmit = (amount: number) => {
    setInvestmentAmount(amount);
    setCurrentStep("confirmation");
  };

  const handleConfirm = () => {
    setCurrentStep("payment");
  };

  const handlePaymentComplete = () => {
    setCurrentStep("success");
  };

  const handleClose = () => {
    setCurrentStep("type");
    setSelectedPlan(null);
    setInvestmentAmount(0);
  };

  const handleSuccessClose = () => {
    handleClose();
  };

  return (
    <>
      {/* Select Investment Type */}
      <InvestmentTypeModal
        isOpen={currentStep === "type"}
        onClose={handleClose}
        onSelectType={handlePlanSelect}
      />

      {/* View Plan Details */}
      {selectedPlan && (
        <InvestmentPlanDetailsModal
          isOpen={currentStep === "details"}
          onClose={handleClose}
          onLend={handleLendClick}
          plan={selectedPlan}
        />
      )}

      {/* Enter Investment Amount */}
      {selectedPlan && (
        <InvestmentAmountModal
          isOpen={currentStep === "amount"}
          onClose={handleClose}
          onNext={handleAmountSubmit}
          minAmount={selectedPlan.minAmount}
          maxAmount={selectedPlan.maxAmount}
          planTitle={selectedPlan.title}
        />
      )}

      {/* Confirm Investment */}
      {selectedPlan && (
        <InvestmentConfirmationModal
          isOpen={currentStep === "confirmation"}
          onClose={handleClose}
          onConfirm={handleConfirm}
          investmentType={selectedPlan.title}
          amount={investmentAmount}
        />
      )}

      {/* Complete Payment */}
      {selectedPlan && (
        <InvestmentPaymentModal
          isOpen={currentStep === "payment"}
          onClose={handleClose}
          onPaymentComplete={handlePaymentComplete}
          investmentType={selectedPlan.title}
          amount={investmentAmount}
        />
      )}

      {/*  Success Confirmation */}
      {selectedPlan && (
        <InvestmentSuccessModal
          isOpen={currentStep === "success"}
          onClose={handleSuccessClose}
          investmentType={selectedPlan.title}
          amount={investmentAmount.toString()}
        />
      )}
    </>
  );
}
