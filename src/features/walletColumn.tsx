import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "../components/dashboard/table/StatusBadge";
import type { WalletTransaction } from "@/types/wallet";



export const walletColumns: ColumnDef<WalletTransaction>[] = [
  {
    header: "Transaction ID",
    accessorKey: "id",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: (info) => `₦${info.getValue<number>().toLocaleString()}`,
  },
  {
    header: "Time/Date",
    accessorKey: "time",
  },
  {
    header: "Details",
    accessorKey: "detail",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => {
      return <StatusBadge status={info.getValue() as WalletTransaction["status"]} />;
    },
  },
  {
    header: "Action",
    cell: () => {
      return (
        <button className="rounded-full bg-purple-100 px-4 py-2 text-xs text-purple-700 hover:bg-purple-200 transition">
          View more
        </button>
      );
    },
  },
];