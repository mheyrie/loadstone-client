import StatCard from "../StatCard";
import RecentTable from "./RecentTable";
import Services from "./Services";


export default function Main() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        <StatCard
        
        />

        
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <h3 className="uppercase font-bold text-sm! min-w-28">our services</h3>
          <div className="bg-gray-300 h-0.5 w-full ml-4"></div>
        </div>
       <Services/>
      </div>
      <RecentTable/>
    </>
  );
}
