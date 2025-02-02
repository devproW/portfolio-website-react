import { navLinks } from "../constants";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky py-5 top-0 bg-gray-50 z-50 pb-5 transition-shadow ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="flex justify-between items-center min-h-12 mx-auto px-12 max-w-7xl max-lg:max-w-4xl">
        <a
          href="#"
          className="pt-2 font-poppins text-[25px] font-bold leading-[1.2] text-black cursor-pointer no-underline"
        >
          Firdaus K.
        </a>
        <ul className="flex justify-between items-center gap-12 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="list-none">
              <a
                href={item.href}
                className="font-poppins font-medium leading-normal text-black hover:text-orange-400 no-underline text-[14px] relative group"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-orange-400 group-hover:w-9 transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <HamburgerMenu
            isOpen={isOpen}
            toggleMenu={() => setIsOpen(!isOpen)}
          />
          {/* Menu */}
          <div
            className={`absolute top-16 right-0 w-full bg-white rounded-lg shadow-lg transform transition-transform duration-300 ${
              isOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col px-20 py-10 space-y-2 max-h-[200px] overflow-y-auto">
              {navLinks.map((item) => (
                <li key={item.label} className="list-none">
                  <a
                    href={item.href}
                    className="font-poppins font-medium leading-normal text-black no-underline text-[14px] relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-black group-hover:w-9 transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
