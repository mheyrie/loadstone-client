import type { Loan } from "@/types/loan";

interface LoanDetailsModalProps {
  loan: Loan;
}

export default function LoanDetailsModal({ loan }: LoanDetailsModalProps) {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Loan Details</h2>
        <p className="text-sm text-gray-500 mt-1">Loan ID: {loan.id}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Purpose</label>
          <p className="text-gray-900">{loan.purpose}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Amount</label>
          <p className="text-gray-900 text-lg font-bold">{loan.amount}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Loan Type</label>
          <p className="text-gray-900">{loan.loanType}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Loan Tenor</label>
          <p className="text-gray-900">{loan.loanTenor}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Duration</label>
          <p className="text-gray-900">{loan.duration}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Monthly Interest</label>
          <p className="text-gray-900">{loan.monthlyInterest}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Status</label>
          <p className="text-gray-900 capitalize">{loan.status}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Email</label>
          <p className="text-gray-900">{loan.email}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Created At</label>
          <p className="text-gray-900">{loan.createdAt}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600">Reason</label>
          <p className="text-gray-900">{loan.reason}</p>
        </div>
      </div>

      {loan.note && (
        <div className="space-y-1 pt-4 border-t">
          <label className="text-sm font-semibold text-gray-600">Additional Notes</label>
          <p className="text-gray-900">{loan.note}</p>
        </div>
      )}
    </div>
  );
}
