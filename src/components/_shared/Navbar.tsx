import { navLink, productLinks, supportLinks } from "../../data/landing";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseDirectories from "../../baseDir/baseDirectories";
import Dropdown from "../ui/Dropdown";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getDropdownLinks = (text: string) => {
    switch (text.toLowerCase()) {
      case "products":
        return productLinks;
      case "support":
        return supportLinks;
      default:
        return null;
    }
  };

  return (
    <section
      className={`px-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/20 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="h-16 grid bg-linear-to-br from-[#A6A4A7] via-[#A9A7A9] to-[#D8D4D8] rounded-full place-items-center lg:flex lg:justify-between lg:px-20">
        <div className="text-white font-bold">
          <img
            src={`${BaseDirectories.LOGOS_DIR}/brand.png`}
            alt="Trade Lenda"
          />
        </div>
        <div className="flex gap-2 relative">
          {navLink.map((link) => {
            const dropdownLinks = getDropdownLinks(link.text);
            const hasDropdown = dropdownLinks && dropdownLinks.length > 0;

            return (
              <div
                key={link.text}
                className="relative group"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.text)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold bg-white text-brand-purple block text-start px-4 py-2 rounded-full"
                      : "block text-start px-4 py-2 text-white hover:text-brand-purple"
                  }
                >
                  {link.text}
                </NavLink>
                {hasDropdown && activeDropdown === link.text && (
                  <div
                    className="absolute top-full left-0 pt-2 w-full"
                    onMouseEnter={() => setActiveDropdown(link.text)}
                  >
                    <Dropdown heading={link.text} links={dropdownLinks} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex gap-6">
          <div className="text-white cursor-pointer hover:rounded-full hover:bg-brand-purple">
            Login
          </div>
          {/* <div className="text-white cursor-pointer hover:rounded-full hover:py-x hover:px-4 hover:bg-brand-purple">
            Signup
          </div>{" "} */}
          <Button
            classes="primary-btn btn-sm"
            content="Signup"
            onClick={() => {}}
          />
        </div>
      </nav>
    </section>
  );
}
