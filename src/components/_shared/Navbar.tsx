import { navLink, productLinks, companyLinks, supportLinks } from "../../data/landing";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import BaseDirectories from "../../baseDir/baseDirectories";
import Dropdown from "../ui/Dropdown";

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
      case 'products':
        return productLinks.map(link => ({ text: link.text, url: link.url }));
      case 'company':
        return companyLinks.map(link => ({ text: link.text, url: link.url }));
      case 'support':
        return supportLinks.map(link => ({ text: link.text, url: link.url }));
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
      <nav className="h-16 grid bg-linear-to-br from-orange-400 via-yellow-500 to-green-900 rounded-full place-items-center lg:flex lg:justify-between lg:px-20">
        <div className="text-white font-bold">
          <img src={`${BaseDirectories.LOGOS_DIR}/brand.png`}  alt="Trade Lenda"/>
        </div>
        <div className="flex gap-2 relative">
          {navLink.map((link) => {
            const dropdownLinks = getDropdownLinks(link.text);
            const hasDropdown = dropdownLinks && dropdownLinks.length > 0;

            return (
              <div
                key={link.text}
                className="relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.text)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.url}
                  className="px-4 py-2 text-white hover:underline block"
                >
                  {link.text}
                </NavLink>
                {hasDropdown && activeDropdown === link.text && (
                  <Dropdown heading={link.text} links={dropdownLinks} />
                )}
              </div>
            );
          })}
        </div>
        <div className="flex gap-6">
          <div className="text-white cursor-pointer hover:underline">Login</div>
          <div className="text-white cursor-pointer hover:underline">Signup</div>
        </div>
      </nav>
    </section>
  );
}
