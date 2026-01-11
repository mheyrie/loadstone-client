export type WalletTransaction = {
  id: string;
  amount: number;
  time: string;
  detail: string;
  status: "Success" | "Pending" | "Failed";
};
export type BillType = "Airtime" | "Data" | "Cable" | "Electricity";

export type BillPaymentForm = {
  network?: string;
  phoneNumber?: string;
  amount?: string;
  dataPlan?: string;
  provider?: string;
  smartCardNumber?: string;
  package?: string;
  disco?: string;
  meterNumber?: string;
};