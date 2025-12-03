import { navLink } from "../../data/landing";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`px-4 py-2 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/20 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="h-16 grid bg-linear-to-br from-orange-400 via-yellow-500 to-green-900 rounded-full place-items-center lg:flex lg:justify-between lg:px-20">
        <div className="text-white font-bold">Logo Here</div>
        <div className="flex gap-2">
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
        <div className="flex gap-6">
          <div className="text-white cursor-pointer hover:underline">Login</div>
          <div className="text-white cursor-pointer hover:underline">Signup</div>
        </div>
      </nav>
    </section>
  );
}
