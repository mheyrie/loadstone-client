import type { ColumnDef } from "@tanstack/react-table";
import type { Loan } from "@/types/loan";
import Button from "@/components/ui/Button";
import { StatusBadge } from "@/components/dashboard/table/StatusBadge";


export const paidLoanColumns = (
  onViewDetails: (loan: Loan) => void
): ColumnDef<Loan>[] => [
  {
    accessorKey: "purpose",
    header: "Purpose",
    cell: ({ row }) => (
      <div className="font-medium text-gray-900">{row.original.purpose}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="font-semibold text-gray-900">{row.original.amount}</div>
    ),
  },
  {
    accessorKey: "loanTenor",
    header: "Loan Tenor",
    cell: ({ row }) => (
      <div className="text-gray-700">{row.original.loanTenor}</div>
    ),
  },
  {
    accessorKey: "monthlyInterest",
    header: "Monthly Interest",
    cell: ({ row }) => (
      <div className="text-gray-700">{row.original.monthlyInterest}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <Button
        content="View More"
        classes="btn-sm secondary-btn"
        onClick={() => onViewDetails(row.original)}
      />
    ),
  },
];
