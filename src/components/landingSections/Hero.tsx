import { navLink } from "../../data/landing";
import { NavLink } from "react-router-dom";
export default function Hero() {

  
  return (
    <section className="relative bg-white">
      <nav className="bg-linear-to-r from-b-[#A4A3A5] to-[#D6D2D6] rounded-3xl ">
        <div className="">Logo Here</div>
        <div className="bg-linear-to-br from-orange-400 via-yellow-500 to-green-900">
          {navLink.map((link) => (
            <NavLink
              key={link.text}
              to={link.url}
              className="px-4 py-2 text-white hover:underline"
            >
              {link.text}
            </NavLink>
          ))} 
        </div>
      </nav>
      <div className="grid grid-cols-2 bg-linear-to-br from-blue-400 via-purple-500 to-pink-600">
        <div className="">Text</div>
        <div className="">Image</div>
      </div>
    </section>
  );
}
