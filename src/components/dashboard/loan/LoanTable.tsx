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
import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";

export default function LoanTable() {
  const [activeTab, setActiveTab] = useState(0);
  const [isRequestLoanModalOpen, setIsRequestLoanModalOpen] = useState(false);
  const [isLoanDetailsModalOpen, setIsLoanDetailsModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);

  // Mock data for paid loans - replace with actual data from your API
  const allLoans: Loan[] = [
    {
      id: "LN001",
      purpose: "Business Expansion",
      amount: 5000000,
      loanTenor: "12 months",
      monthlyInterest: "5%",
      status: "paid",
      loanType: "Business Loan",
      email: "user@example.com",
      duration: "12 months",
      reason: "Business Expansion",
      note: "Fully repaid",
      createdAt: "2025-01-10",
      payBackDate: "2026-01-10",
      approvedAt: "2025-01-15",
    },
    {
      id: "LN002",
      purpose: "Education",
      amount: 2500000,
      loanTenor: "6 months",
      monthlyInterest: "4%",
      status: "paid",
      loanType: "Personal Loan",
      email: "user@example.com",
      duration: "6 months",
      reason: "Education",
      note: "Completed payment",
      createdAt: "2024-12-15",
      payBackDate: "2025-06-15",
      approvedAt: "2024-12-20",
    },
    {
      id: "LN003",
      purpose: "Home Renovation",
      amount: 3000000,
      loanTenor: "9 months",
      monthlyInterest: "4.5%",
      status: "unpaid",
      loanType: "Home Improvement Loan",
      email: "user@example.com",
      duration: "9 months",
      reason: "Home Renovation",
      note: "Completed payment",
      createdAt: "2024-11-20",
      payBackDate: "2025-08-20",
      approvedAt: "2024-11-25",
    }
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
            {allLoans.length > 0 ? (
              <DataTable
                data={allLoans}
                columns={paidLoanColumns(handleViewLoanDetails)}
                pageSize={10}
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
          <div className="p-4">
            {allLoans.filter(loan => loan.status === "approved").length > 0 ? (
              <DataTable
                data={allLoans.filter(loan => loan.status === "approved")}
                columns={paidLoanColumns(handleViewLoanDetails)}
                pageSize={10}
              />
            ) : (
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
          </div>
        )}
      {activeTab === 2 && (
          <div className="p-4">
            {allLoans.filter(loan => loan.status === "pending").length > 0 ? (
              <DataTable
                data={allLoans.filter(loan => loan.status === "pending")}
                columns={paidLoanColumns(handleViewLoanDetails)}
                pageSize={10}
              />
            ) : (
              <EmptyState
                title="No pending loans"
                message="You don't have any pending loans at the moment."
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
        {activeTab === 3 && (
          <div className="p-4">
            {allLoans.filter(loan => loan.status === "paid").length > 0 ? (
              <DataTable
                data={allLoans.filter(loan => loan.status === "paid")}
                columns={paidLoanColumns(handleViewLoanDetails)}
                pageSize={10}
              />
            ) : (
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
          </div>
        )}
     {activeTab === 4 && (
          <div className="p-4">
            {allLoans.filter(loan => loan.status === "unpaid").length > 0 ? (
              <DataTable
                data={allLoans.filter(loan => loan.status === "unpaid")}
                columns={paidLoanColumns(handleViewLoanDetails)}
                pageSize={10}
              />
            ) : (
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
          </div>
        )}
        <div className="h-4 flex justify-between items-center px-4 py-3 rounded-lg my-4">
          <span className="border"> See More</span>
          <span className="flex items-center gap-2">
            <Icon path={mdiChevronRight} size={1} className="rotate-180" />{" "}
            <span>Back</span>
          </span>
        </div>
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
              <Button
                content="Submit Request"
                classes="primary-btn btn-md"
                type="submit"
              />
            </div>
          </form>
        </Form>
      </Modal>

      {/* Loan Details Modal */}
      <Modal
        isOpen={isLoanDetailsModalOpen}
        onClose={() => setIsLoanDetailsModalOpen(false)}
        title=""
        maxWidth="xl"
        useBackgroundImage={false}
        className="bg-[#F5EFF7]"
      >
        {selectedLoan && <LoanDetailsModal loan={selectedLoan} />}
      </Modal>
    </div>
  );
}
