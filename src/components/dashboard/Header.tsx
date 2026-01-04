import BaseDirectories from "@/baseDir/baseDirectories";
import { mdiAccount, mdiBell, mdiMenuDown } from "@mdi/js";
import Icon from "@mdi/react";

export default function Header({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 h-20 flex justify-between items-center px-10 pt-12">
      {/* Mobile hamburger */}
      <div className="flex lg:hidden w-full items-center justify-between">
        {" "}
        <button
          onClick={onClick}
          className="lg:hidden relative w-6 h-6"
          aria-label="Toggle sidebar"
          aria-expanded={isOpen}
        >
          <span
            className={`absolute h-0.5 w-6 bg-gray-700 transition ${
              isOpen ? "rotate-45 top-3" : "top-1"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-gray-700 transition ${
              isOpen ? "opacity-0" : "top-3"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-gray-700 transition ${
              isOpen ? "-rotate-45 top-3" : "top-5"
            }`}
          />
        </button>
        <div className="">
          {" "}
          <img
            src={`${BaseDirectories.LOGOS_DIR}/brand.png`}
            alt="LoadStone logo"
            className="h-8"
          />
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden lg:flex justify-between items-center w-full font-semibold">
        <div className="text-left">
          <h2 className="text-xl font-extrabold! -mb-2">Welcome Zee!</h2>
          <p className="">let’s boost your business today</p>
        </div>
        <div className="flex gap-2 justify-end items-center">
          <Icon path={mdiBell} className="" size={.7} />
          <span className=" flex items-center  gap-2">
            <Icon path={mdiAccount} size={1} className="bg-yellow-300 rounded-full p-auto p-1" />
            <h4 className="">Zion Imago-Dei</h4>
          </span>
          <Icon path={mdiMenuDown} size={1} className="" />
        </div>
      </div>
    </header>
  );
}
