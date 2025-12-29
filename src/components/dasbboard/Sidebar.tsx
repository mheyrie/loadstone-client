import { sideBar } from "@/data/landing";
import { mdiContentCopy } from "@mdi/js";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full justify-around ">
      <div className="">
        {" "}
        <div className="">
          <span className="">Personal referral code:</span>
          <span className="bg-[#F3E8FF] flex justify-between items-center">
            <span className="text-brand-purple">CYMKRGB</span>
            <Icon path={mdiContentCopy} className="size-4" />
          </span>
        </div>
        <div className="flex flex-col">
          {sideBar.map((link) => {
            return (
              <div className="relative group " key={link.text}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                   `flex px-4 ${isActive
                      ? "text-brand-white flex px-4 bg-brand-purple"
                      : " flex text-start text-gray-800"
                 }`  }
                >
                  {" "}
                  <Icon path={link.icon} className="size-4" />
                  <span>{link.text}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <h3 className="">Sign out</h3>
      </div>
    </div>
  );
};
export default Sidebar;
