import { formatCurrency } from "@/lib/utils";
import type { Loan } from "@/types/loan";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";

interface LoanDetailsModalProps {
  loan: Loan | null;
  isLoading?: boolean;
}

const SkeletonLoader = () => (
  <div className="space-y-6">
    <div className="border-b pb-4">
      <Skeleton height={32} width="33%" className="mb-2" baseColor="#FAFAFA" />
      <Skeleton height={16} width="25%" baseColor="#FAFAFA" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="space-y-2 bg-brand-white p-4">
          <Skeleton height={16} width="33%" baseColor="#FAFAFA" />
          <Skeleton height={20} width="66%" />
        </div>
      ))}
    </div>
  </div>
);

export default function LoanDetailsModal({
  loan,
  isLoading = false,
}: LoanDetailsModalProps) {
  if (isLoading || !loan) {
    return <SkeletonLoader />;
  }

  return (
    <motion.div
      initial={{ x: 20 }}
      transition={{ duration: 0.1 }}
      animate={{ x: 0 }}
      className=""
    >
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900 capitalize">
            {loan.status} Loans
          </h2>
          <p className="text-sm text-gray-500 mt-1">Loan ID: {loan.id}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Purpose
            </label>
            <p className="text-gray-900">{loan.purpose}</p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Amount
            </label>
            <p className="text-gray-900 text-lg font-bold">
              {formatCurrency(loan.amount)}
            </p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Loan Type
            </label>
            <p className="text-gray-900">{loan.loanType}</p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Loan Tenor
            </label>
            <p className="text-gray-900">{loan.loanTenor}</p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Duration
            </label>
            <p className="text-gray-900">{loan.duration}</p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Monthly Interest
            </label>
            <p className="text-gray-900">{loan.monthlyInterest}</p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Status
            </label>
            <p className="text-gray-900 capitalize">{loan.status}</p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">Email</label>
            <p className="text-gray-900">{loan.email}</p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Created At
            </label>
            <p className="text-gray-900">{loan.createdAt}</p>
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            <label className="text-sm font-semibold text-gray-600">
              Reason
            </label>
            <p className="text-gray-900">{loan.reason}</p>
          </div>{" "}
          <div className="space-y-1 bg-brand-white p-4 text-start">
            {loan.approvedAt && (
              <div className="space-y-1 pt-4 ">
                <label className="text-sm font-semibold text-gray-600">
                  Additional Notes
                </label>
                <p className="text-gray-900">{loan.note}</p>
              </div>
            )}
          </div>
          <div className="space-y-1 bg-brand-white p-4 text-start">
            {loan.payBackDate && (
              <div className="space-y-1 pt-4 ">
                <label className="text-sm font-semibold text-gray-600">
                  Pay Back Date
                </label>
                <p className="text-gray-900">{loan.payBackDate}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
