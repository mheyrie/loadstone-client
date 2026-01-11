import Button from "@/components/ui/Button";
import StatCard from "../StatCard";
import { mdiWallet } from "@mdi/js";

export default function WalletMain() {
  return (
    <div className="bg-white shadow-2xl">
      <div className=" flex items-center justify-between  px-6 py-4">
        <h3 className=" font-bold text-brand-purple min-w-28">Wallet </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <StatCard
          title="Wallet Balance"
          icon={mdiWallet}
          value="₦5,000,000.00"
          action={
            <Button content=" Wallet DEtails" classes="primary-btn btn-md" />
          }
          variant="one"
        />
        <div className="">
          <div className=""></div>
          <div className="">
            
          </div>
        </div>
      </div>
    </div>
  );
}
