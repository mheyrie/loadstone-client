import { useState } from "react";
import Spinner from "../ui/Spinner";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../dashboard/MobileSidebar";


const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading] = useState(false);
  return (
    <>
      {loading && <Spinner />}
      <div className="flex h-screen">
        <aside className="w-64 hidden lg:block ">
          <Sidebar />{" "}
        </aside>
        <MobileSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col bg-[#EFF0F7] min-h-screen">
          
            <Header onClick={() => setSidebarOpen((prev) => !prev)} isOpen={sidebarOpen}/>
            
          
<main className="flex overflow-y-auto p-4">
          <Outlet /></main>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
