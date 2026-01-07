import StatCard from "../StatCard";
import RecentTable from "./RecentTable";
import Services from "./Services";


export default function Main() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <StatCard
          title="Wallet Balance"
          value="₦5,000,000.00"
          subtitle="LOANSTONE 01234567890"
          action={
            <button className="mt-4 px-4 py-2 bg-brand-purple text-white rounded-lg text-sm">
              Fund Wallet
            </button>
          }
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
      <div className="flex flex-col">
        <div className="flex items-center">
          <h3 className="uppercase font-extrabold text-sm! min-w-28 text-brand-purple ">our services</h3>
          <div className="bg-gray-300 h-0.5 w-full ml-4"></div>
        </div>
       <Services/>
      </div>
      <RecentTable/>
    </>
  );
}
