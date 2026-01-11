import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "../components/dashboard/table/StatusBadge";
import Icon from "@mdi/react";
import { mdiEye } from "@mdi/js";
import type { Savings } from "@/types/invest";



export const savingsColumns = (
  onView?: (savings: Savings) => void
): ColumnDef<Savings>[] => [
  {
    header: "Savings ID",
    accessorKey: "id",
    cell: ({ row }) => (
      <div className="font-medium text-gray-900">{row.original.id}</div>
    ),
  },
  {
    header: "Savings Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="text-gray-900">{row.original.name}</div>
    ),
  },
  {
    header: "Current Amount",
    accessorKey: "amount",
    cell: ({ row }) => (
      <div className="text-gray-900">
        ₦{row.original.amount.toLocaleString()}
      </div>
    ),
  },
  {
    header: "Target Amount",
    accessorKey: "targetAmount",
    cell: ({ row }) => (
      <div className="text-gray-900">
        ₦{row.original.targetAmount.toLocaleString()}
      </div>
    ),
  },
  {
    header: "Duration",
    accessorKey: "duration",
    cell: ({ row }) => (
      <div className="text-gray-700">{row.original.duration}</div>
    ),
  },
  {
    header: "Interest Rate",
    accessorKey: "interest",
    cell: ({ row }) => (
      <div className="text-gray-900">{row.original.interest}%</div>
    ),
  },
  {
    header: "Start Date",
    accessorKey: "startDate",
    cell: ({ row }) => (
      <div className="text-gray-700">{row.original.startDate}</div>
    ),
  },
  {
    header: "Maturity Date",
    accessorKey: "maturityDate",
    cell: ({ row }) => (
      <div className="text-gray-700">{row.original.maturityDate}</div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      return <StatusBadge status={row.getValue("status") as Savings["status"]} />;
    },
  },
  {
    header: "Action",
    cell: ({ row }) => {
      return (
        <button
          onClick={() => onView?.(row.original)}
          className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition"
          title="View details"
        >
          <Icon path={mdiEye} size={0.8} />
        </button>
      );
    },
  },
];