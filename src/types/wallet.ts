export type WalletTransaction = {
  id: string;
  amount: number;
  time: string;
  detail: string;
  status: "Success" | "Pending" | "Failed";
};