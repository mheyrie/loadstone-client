export type Savings = {
  id: string;
  name: string;
  amount: number;
  targetAmount: number;
  duration: string;
  interest: number;
  startDate: string;
  maturityDate: string;
  status: "active" | "completed" | "pending" | "paused";
};