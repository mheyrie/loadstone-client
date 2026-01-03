import BaseDirectories from "@/baseDir/baseDirectories";
import { mdiAccount, mdiBellAlert, mdiMenuDown } from "@mdi/js";
import Icon from "@mdi/react";

export default function Header({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 h-20 flex items-center px-4">
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
      <div className="hidden lg:flex mx-auto font-semibold">
        <div className="">
          <h2 className="text-xl font-bold">Welcome Zee!</h2>
          <p className="">let’s boost your business today</p>
        </div>
        <div className="flex gap-2 justify-end items-center">
          <Icon path={mdiBellAlert} className="" size={2} />
          <span className="bg-yellow-300 rounded-full p-2">
            <Icon path={mdiAccount} className="" size={2} />
            <h4 className="">Zion Imago-Dei</h4>
          </span>
          <Icon path={mdiMenuDown} size={1} className="" />
        </div>
      </div>
    </header>
  );
}
