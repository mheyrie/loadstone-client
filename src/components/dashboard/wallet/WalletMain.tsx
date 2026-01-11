import Button from "@/components/ui/Button";
import StatCard from "../StatCard";
import { mdiWallet } from "@mdi/js";
import BillPayment from "./BillPayment";
import Card from "./Card";
import SearchInput from "@/components/_shared/SearchInput";

import WalletTable from "./WalletTable";

export default function WalletMain() {
  return (
    <>
      <div className="bg-white shadow-2xl">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          <h3 className="font-bold text-brand-purple text-sm sm:text-base">
            Wallet
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 py-4 px-4 sm:px-6">
          <div className="w-full lg:w-1/3">
            <StatCard
              title="Wallet Balance"
              icon={mdiWallet}
              value="₦5,000,000.00"
              action={
                <Button content="Wallet Details" classes="primary-btn btn-md" />
              }
              variant="one"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <Card />
            <BillPayment />
          </div>
        </div>{" "}
        <div className="px-4 sm:px-6 py-4">
          <SearchInput />
        </div>
      </div>{" "}
      <WalletTable />
    </>
  );
}
