import Button from "@/components/ui/Button";
import StatCard from "../StatCard";

export default function LoanMain() {
  return (
    <div className="bg-white">
      <div className="">
        <h3 className="uppercase font-bold text-sm! min-w-28">loan overview</h3>
        <Button content="Request for Laoan " classes="primary-btn btn" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <StatCard
          title="Approved Loan"
          value="₦5,000,000.00"
          //   subtitle="LOANSTONE 01234567890"
          //   action={
          //     <button className="mt-4 px-4 py-2 bg-brand-purple text-white rounded-lg text-sm">
          //       Fund Wallet
          //     </button>
          //   }
          variant="one"
        />

        <StatCard
          title="Unapproved Loan"
          value="₦0.00"
          //   action={<span className="text-sm underline">View all</span>}
          variant="two"
        />

        <StatCard
          title="Pind Loan"
          value="₦0.00"
          //   action={<span className="text-sm underline">View all</span>}
          variant="three"
        />
      </div>
    </div>
  );
}
