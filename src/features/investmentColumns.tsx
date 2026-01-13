// features/investments/investmentColumns.tsx

import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "../components/dashboard/table/StatusBadge";
import { formatCurrency } from "@/lib/utils";

export type Investment = {
  id: string;
  amount: number;
  duration: string;
  returns: number;
  startDate: string;
  maturityDate: string;
  status: "active" | "matured" | "pending" | "failed";
};

export const investmentColumns: ColumnDef<Investment>[] = [
  {
    header: "Investment ID",
    accessorKey: "id",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: (info) => formatCurrency(info.getValue<number>()),
  },
  {
    header: "Duration",
    accessorKey: "duration",
  },
  {
    header: "Expected Returns",
    accessorKey: "returns",
    cell: (info) => formatCurrency(info.getValue<number>()),
  },
  {
    header: "Start Date",
    accessorKey: "startDate",
  },
  {
    header: "Maturity Date",
    accessorKey: "maturityDate",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => {
      return <StatusBadge status={info.getValue() as Investment["status"]} />;
    },
  },
  {
    header: "Action",
    cell: () => {
      return (
        <button className="rounded-full bg-purple-100 px-4 py-2 text-xs text-purple-700">
          View details
        </button>
      );
    },
  },
];
