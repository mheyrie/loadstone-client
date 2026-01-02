import { useState } from "react";
import Spinner from "../ui/Spinner";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [loading] = useState(false);
  return (
    <>
      {loading && <Spinner />}
      <div className="flex h-screen">
        <div className=" hidden lg:block ">
          <Sidebar />{" "}
        </div>
        <div className="w-full bg-[#EFF0F7] ">
          <div className="hidden lg:block">
            <Header />
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
