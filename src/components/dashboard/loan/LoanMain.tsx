import Button from "@/components/ui/Button";
import StatCard from "../StatCard";
import SearchInput from "@/components/_shared/SearchInput";
import LoanTable from "./LoanTable";

export default function LoanMain() {
  return (
    <div className="bg-white shadow-2xl">
      <div className=" flex items-center justify-between  px-6 py-4">
        <h3 className=" font-bold text-brand-purple min-w-28">Loans </h3>
        <Button content="Request for Loan " classes="primary-btn btn-md" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <StatCard
          title="Approved Loan"
          value="₦5,000,000.00"
          titleSize="lg"
          variant="one"
        />

        <StatCard
          title="Unapproved Loan"
          value="₦0.00"
          variant="two"
          titleSize="lg"
        />

        <StatCard
          title="Paid Loan"
          value="₦0.00"
          variant="three"
          titleSize="lg"
        />
      </div>
      <SearchInput/>
      <LoanTable/>
    </div>
  );
}
