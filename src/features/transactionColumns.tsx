// features/transactions/transactionColumns.ts

import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "../components/dashboard/table/StatusBadge";


export type Transaction = {
  id: string;
  amount: number;
  time: string;
  detail: string;
  status: "Success" | "Pending";
};

export const transactionColumns: ColumnDef<Transaction>[] = [
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
    header: "Time",
    accessorKey: "time",
  },
  {
    header: "Detail",
    accessorKey: "detail",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => {
      return <StatusBadge status={info.getValue() as Transaction["status"]} />;
    },
  },
  {
    header: "Action",
    cell: () => {
      return (
        <button className="rounded-full bg-purple-100 px-4 py-2 text-xs text-purple-700">
          View more
        </button>
      );
    },
  },
];
