export type LoanRequestForm = {
  email: string;
  amount: string;
  loanType: string;
  duration: string;
  reason: string;
  note: string;
};

export type Loan = {
  id: string;
  purpose: string;
  amount: string;
  loanTenor: string;
  monthlyInterest: string;
  status: "paid" | "unpaid" | "approved" | "pending";
  loanType: string;
  email: string;
  duration: string;
  reason: string;
  note: string;
  createdAt: string;
};