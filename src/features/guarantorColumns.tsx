import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "../components/dashboard/table/StatusBadge";
import Icon from "@mdi/react";
import { mdiEye, mdiTrashCan } from "@mdi/js";

export type Guarantor = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  status: "approved" | "pending" | "inactive";
};

export const guarantorColumns = (
  onView?: (guarantor: Guarantor) => void,
  onDelete?: (guarantor: Guarantor) => void
): ColumnDef<Guarantor>[] => [
  {
    header: "Full Name",
    accessorKey: "fullName",
    cell: ({ row }) => (
      <div className="font-medium text-gray-900">{row.original.fullName}</div>
    ),
  },
  {
    header: "Email",
    accessorKey: "email",
    cell: ({ row }) => (
      <div className="text-gray-700">{row.original.email}</div>
    ),
  },
  {
    header: "Phone Number",
    accessorKey: "phoneNumber",
    cell: ({ row }) => (
      <div className="text-gray-700">{row.original.phoneNumber}</div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      return <StatusBadge status={row.getValue("status") as Guarantor["status"]} />;
    },
  },
  {
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <button
            onClick={() => onView?.(row.original)}
            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition"
            title="View details"
          >
            <Icon path={mdiEye} size={0.8} />
          </button>
          <button
            onClick={() => onDelete?.(row.original)}
            className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-700 transition"
            title="Delete"
          >
            <Icon path={mdiTrashCan} size={0.8} />
          </button>
        </div>
      );
    },
  },
];