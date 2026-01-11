import type { WalletTransaction } from "@/types/wallet";
import { DataTable } from "../table/DataTable";
import { walletColumns } from "@/features/walletColumn";

// Mock data - replace with actual data from your API
const mockTransactions: WalletTransaction[] = [
  {
    id: "TXN001",
    amount: 50000,
    time: "2026-01-11 10:30 AM",
    detail: "Wallet Funding",
    status: "Success",
  },
  {
    id: "TXN002",
    amount: 25000,
    time: "2026-01-10 03:45 PM",
    detail: "Bill Payment",
    status: "Success",
  },
  {
    id: "TXN003",
    amount: 100000,
    time: "2026-01-09 11:20 AM",
    detail: "Loan Disbursement",
    status: "Pending",
  },
  {
    id: "TXN004",
    amount: 15000,
    time: "2026-01-08 02:15 PM",
    detail: "Transfer to Bank",
    status: "Success",
  },
  {
    id: "TXN005",
    amount: 75000,
    time: "2026-01-07 09:00 AM",
    detail: "Investment Return",
    status: "Success",
  },
];

export default function WalletTable() {
  return (
    <div className="py-4 text-start">
   
      <DataTable data={mockTransactions} columns={walletColumns} pageSize={10} />
    </div>
  );
}