import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EmptyState from "./EmptyState";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/modal/Modal";
import RequestLoan from "@/components/ui/modal/loan/RequestLoan";
import LoanDetailsModal from "@/components/ui/modal/loan/LoanDetailsModal";
import { Form } from "@/components/ui/form";
import { DataTable } from "../table/DataTable";
import { paidLoanColumns } from "@/features/loanColumns";
import type { LoanRequestForm, Loan } from "@/types/loan";



export default function LoanTable() {
  const [activeTab, setActiveTab] = useState(0);
  const [isRequestLoanModalOpen, setIsRequestLoanModalOpen] = useState(false);
  const [isLoanDetailsModalOpen, setIsLoanDetailsModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  
  // Mock data for paid loans - replace with actual data from your API
  const paidLoans: Loan[] = [
    {
      id: "LN001",
      purpose: "Business Expansion",
      amount: "₦5,000,000.00",
      loanTenor: "12 months",
      monthlyInterest: "5%",
      status: "paid",
      loanType: "Business Loan",
      email: "user@example.com",
      duration: "12 months",
      reason: "Business Expansion",
      note: "Fully repaid",
      createdAt: "2025-01-10",
    },
    {
      id: "LN002",
      purpose: "Education",
      amount: "₦2,500,000.00",
      loanTenor: "6 months",
      monthlyInterest: "4%",
      status: "paid",
      loanType: "Personal Loan",
      email: "user@example.com",
      duration: "6 months",
      reason: "Education",
      note: "Completed payment",
      createdAt: "2024-12-15",
    },
  ];

  const handleViewLoanDetails = (loan: Loan) => {
    setSelectedLoan(loan);
    setIsLoanDetailsModalOpen(true);
  };
  
  const form = useForm<LoanRequestForm>({
    defaultValues: {
      email: "uuseremail@test.com",
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

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  return (
    <div className="px-2 sm:px-4">
      <div className="border-b border-gray-200 overflow-x-auto">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#000000", // Black indicator
            },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "#6B7280 !important", // Gray text for inactive tabs
              textTransform: "none",
              fontWeight: 700,
              minWidth: { xs: "80px", sm: "120px" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
            },
            "& .Mui-selected": {
              color: "#000000 !important", // Black text for active tab
            },
            "& .MuiTabs-flexContainer": {
              borderBottom: "1px solid #E5E7EB", // Light gray bottom border
            },
          }}
        >
          <Tab label="All " />
          <Tab label="Approved" />
          <Tab label="Unapproved" />
          <Tab label="Paid" />
          <Tab label="Unpaid" />
        </Tabs>
        {/* Table content here */}
        {activeTab === 0 && (
          <div className="p-4">
            {paidLoans.length > 0 ? (
              <DataTable 
                data={paidLoans} 
                columns={paidLoanColumns(handleViewLoanDetails)} 
              />
            ) : (
              <EmptyState
                title="No paid loans"
                message="You haven't fully paid off any loans yet."
                actionButton={
                  <Button 
                    content="Request for Loan" 
                    classes="primary-btn btn-md"
                    onClick={handleRequestLoan}
                  />
                }
              />
            )}
          </div>
        )}
        {activeTab === 1 && (
          <EmptyState
            title="No approved loans"
            message="You don't have any approved loans at the moment."
            actionButton={
              <Button 
                content="Request for Loan" 
                classes="primary-btn btn-md"
                onClick={handleRequestLoan}
              />
            }
          />
        )}
        {activeTab === 2 && (
          <EmptyState
            title="No unapproved loans"
            message="You don't have any pending loan applications."
            actionButton={
              <Button 
                content="Request for Loan" 
                classes="primary-btn btn-md"
                onClick={handleRequestLoan}
              />
            }
          />
        )}
        {activeTab === 3 && (
          <EmptyState
            title="No paid loans"
            message="You haven't fully paid off any loans yet."
            actionButton={
              <Button 
                content="Request for Loan" 
                classes="primary-btn btn-md"
                onClick={handleRequestLoan}
              />
            }
          />
        )}
        {activeTab === 4 && (
          <EmptyState
            title="No unpaid loans"
            message="All your loans are paid up. Great job!"
            actionButton={
              <Button 
                content="Request for Loan" 
                classes="primary-btn btn-md"
                onClick={handleRequestLoan}
              />
            }
          />
        )}
      </div>

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

      {/* Loan Details Modal */}
      <Modal
        isOpen={isLoanDetailsModalOpen}
        onClose={() => setIsLoanDetailsModalOpen(false)}
        title=""
        maxWidth="2xl"
        useBackgroundImage={false}
      >
        {selectedLoan && <LoanDetailsModal loan={selectedLoan} />}
      </Modal>
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
