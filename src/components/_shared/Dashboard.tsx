import Spinner from "../ui/Spinner";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import MobileSidebar from "../dashboard/MobileSidebar";
import { Outlet } from "react-router-dom";
import { useSidebar } from "@/lib/hooks/useSidebar";


const Dashboard = () => {
  const { isOpen, toggle, close } = useSidebar();
  const loading = false;

  return (
    <>
      {loading && <Spinner />}

      <div className="flex h-screen">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 border-r">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={isOpen} onClose={close} />

        {/* Main content */}
        <div className="flex-1 flex flex-col bg-[#EFF0F7]">
          <Header isOpen={isOpen} onClick={toggle} />

          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
