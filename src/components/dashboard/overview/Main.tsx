import { mdiContentCopy, mdiWallet } from "@mdi/js";
import StatCard from "../StatCard";
import RecentTable from "./RecentTable";
import Services from "./Services";
import Button from "@/components/ui/Button";

export default function Main() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <StatCard
          title="Wallet Balance"
          icon={mdiWallet}
          value="₦5,000,000.00"
          title2="LOANSTONE"
          value2="01234567890"
          icon2={mdiContentCopy}
          action={<Button content="Fund Wallet" classes="primary-btn btn-md" />}
          variant="one"
        />

        <StatCard
          title="Loans"
          value="₦0.00"
          action={<span className="text-sm underline">View all</span>}
          variant="two"
        />

        <StatCard
          title="Investment"
          value="₦0.00"
          action={<span className="text-sm underline">View all</span>}
          variant="three"
        />
      </div>
      <div className="flex flex-col my-4">
        <div className="flex items-center">
          <h1 className="uppercase font-extrabold text-sm! min-w-28 text-brand-purple ">
            our services
          </h1>
          <div className="bg-gray-300 h-0.5 w-full ml-4"></div>
        </div>
        <Services />
      </div>
      <RecentTable />
    </>
  );
}
