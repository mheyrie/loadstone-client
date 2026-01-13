export type WalletTransaction = {
  id: string;
  amount: number;
  time: string;
  detail: string;
  status: "success" | "pending" | "failed";
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
export type TransferType = "Bank Transfer" | "Wallet Transfer" | "Generated E-statement";

export type BankTransferForm = {
  bankName?: string;
  accountNumber?: string;
  accountName?: string;
  amount?: string;
  narration?: string;
};

export type WalletTransferForm = {
  walletId?: string;
  amount?: string;
  narration?: string;
};

export type EStatementForm = {
  startDate?: string;
  endDate?: string;
  format?: string;
};