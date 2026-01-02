// import { useState } from "react";

export default function Header({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
 
  return (
    <header className="flex items-center px-4 border-b h-20 min-w-full">
      <div className=" bg-gray-200  mx-auto lg:flex hidden"> Desktop Header One</div>
      ;
      <button className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none" onClick={onClick}>
        <div className="flex items-center justify-center">
          <div className="relative top-0 right-4  w-8 h-6">
            <span
              className={`absolute h-0.5 w-6 bg-gray-600 transform transition duration-300 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isOpen ? "rotate-45" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-gray-600 transform transition duration-300 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-gray-600 transform transition duration-300 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isOpen ? "opacity-0" : "-translate-y-2"
              }`}
            />
          </div>
        </div>
      </button>
    </header>
  );
}
