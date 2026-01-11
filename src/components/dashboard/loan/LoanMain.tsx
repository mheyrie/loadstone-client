import Button from "@/components/ui/Button";
import StatCard from "../StatCard";
import SearchInput from "@/components/_shared/SearchInput";
import LoanTable from "./LoanTable";
import Modal from "@/components/ui/modal/Modal";
import RequestLoan from "@/components/ui/modal/loan/RequestLoan";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { LoanRequestForm } from "@/types/loan";

export default function LoanMain() {
  const [isRequestLoanModalOpen, setIsRequestLoanModalOpen] = useState(false);

  const form = useForm<LoanRequestForm>({
    defaultValues: {
      email: "useremail@test.com",
      amount: "",
      loanType: "",
      duration: "",
      reason: "",
      note: "",
    },
  });

  const onSubmit = (data: LoanRequestForm) => {
    console.log("Loan request submitted:", data);
    // Handle loan request submission here
    setIsRequestLoanModalOpen(false);
    form.reset();
  };

  const handleRequestLoan = () => {
    setIsRequestLoanModalOpen(true);
  };

  return (
    <div className="bg-white shadow-2xl">
      <div className=" flex items-center justify-between  px-6 py-4">
        <h3 className=" font-bold text-brand-purple min-w-28">Loans </h3>
        <Button 
          content="Request for Loan " 
          classes="primary-btn btn-md"
          onClick={handleRequestLoan}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <StatCard
          title="Approved Loan"
          value="₦5,000,000.00"
          titleSize="lg"
          variant="one"
        />

        <StatCard
          title="Unapproved Loan"
          value="₦0.00"
          variant="two"
          titleSize="lg"
        />

        <StatCard
          title="Paid Loan"
          value="₦0.00"
          variant="three"
          titleSize="lg"
        />
      </div>
      <SearchInput/>
      <LoanTable/>

      {/* Request Loan Modal */}
      <Modal
        isOpen={isRequestLoanModalOpen}
        onClose={() => setIsRequestLoanModalOpen(false)}
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
                onClick={() => setIsRequestLoanModalOpen(false)}
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
      </Modal>
    </div>
  );
}
