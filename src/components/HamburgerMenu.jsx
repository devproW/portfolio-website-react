function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-between w-6 h-4 cursor-pointer focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-1 w-full bg-black rounded-lg transform transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black rounded-lg transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black rounded-lg transform transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}

export default HamburgerMenu;
