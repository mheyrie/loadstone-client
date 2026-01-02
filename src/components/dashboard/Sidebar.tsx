import { sideBar } from "@/data/landing";
import { mdiAccountVoiceOff, mdiContentCopy } from "@mdi/js";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";



const Sidebar = () => {
  return (
    <aside className="flex flex-col h-full mx-4 justify-between ">
      <div className="mt-24">
        {" "}
        <div className="mb-4">
          <small className="block text-start">Personal referral code:</small>
          <span className="bg-[#F3E8FF] text-brand-purple h-10 px-4 flex justify-between rounded-md items-center">
            <span className=" font-bold">CYMKRGB</span>
            <Icon path={mdiContentCopy} className="size-4" />
          </span>
        </div>
        <div className="flex flex-col space-y-6">
          {sideBar.map((link) => {
            return (
              <div className="relative group " key={link.text}>
                <NavLink
                  to={link.url}
                  end={link.url === "/dashboard"}
                  className={({ isActive }) =>
                    ` font-bold flex items-center px-4 space-x-2 py-2 ${
                      isActive
                        ? "text-brand-white flex bg-brand-purple rounded-md "
                        : " flex text-start text-gray-700"
                    }`
                  }
                >
                  {" "}
                  <Icon path={link.icon} className="size-4 font-bold" />
                  <span className="">{link.text}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>

      <div className="inline-flex items-center justify-start px-4 py-2 gap-2 mb-6 cursor-pointer hover:bg-red-300 rounded-md text-bold">
        <Icon path={mdiAccountVoiceOff} className="size-4 text-gray-800 " />
        <span className="">Sign Out</span>
      </div>
    </aside>
  );
};
export default Sidebar;
