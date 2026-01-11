/* eslint-disable @typescript-eslint/no-explicit-any */
import { mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";
import type { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  heading: string;
  links: any;
};

const Dropdown: FC<Props> = ({ heading, links }) => {
  return (
    <div className="absolute bg-[#E4E4E4] z-10 rounded-md shadow-lg pt-2 w-[324px] top-full left-0">
      <h5 className="flex items-center font-semibold border-b border-gray-300">
        <Icon path={mdiCircleSmall} size={2} />
        <span className="text-brand-purple">{heading}</span>
      </h5>
      <div className="">
        {links &&
          links.map((link: any, i: number) => (
            <NavLink
              key={i}
              to={link.url}
              className="block text-start px-4 py-6 hover:bg-gray-200 text-gray-700"
            >
              <div className="flex items-center gap-3">
                <span className="">
                  <Icon
                    className="text-brand-purple bg-brand-white p-1 rounded-full"
                    path={link.icon}
                    size={1.2}
                  />
                </span>

                <div>
                  <span className="">{link.text}</span>
                  {/* <div className="">
                    <p className="">{link.description}</p>
                  </div> */}
                </div>
              </div>
              {/* {link.comingSoon && <span className="">Coming Soon</span>} */}
            </NavLink>
          ))}
      </div>
    </div>
  );
};
export default Dropdown;
