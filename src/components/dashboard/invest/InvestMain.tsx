import Button from "@/components/ui/Button";
import StatCard from "../StatCard";
import SearchInput from "@/components/_shared/SearchInput";
// import Modal from "@/components/ui/modal/Modal";
// import RequestLoan from "@/components/ui/modal/loan/RequestLoan";
// import { Form } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
import { useState } from "react";
// import type { LoanRequestForm } from "@/types/loan";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
// import InvestTable from "./InvestTable";
import AllTable from "./AllTable";


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




  if (isLoading) {
    return <InvestMainSkeleton />;
  }

  return (
    <div className="bg-white shadow-2xl">
      <motion.div initial={{ x: 20 }} transition={{ duration: 0.1 }} animate={{ x: 0 }}>
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
                onClick={() => console.log("Lend Now clicked")}
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
  );
}
