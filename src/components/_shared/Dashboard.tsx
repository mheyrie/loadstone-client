import { useState } from "react";
import Spinner from "../ui/Spinner";
import Header from "../dasbboard/Header";
import Sidebar from "../dasbboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [loading] = useState(false);
  return (
    <>
      {loading && <Spinner />}
      <div className="flex">
        <div className="w-[275px] h-screen left-0 top-0">
          <Sidebar />{" "}
        </div>
        <div className="w-full bg-[#EFF0F7] min-h-screen">
          <div className="">
            <Header />
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
