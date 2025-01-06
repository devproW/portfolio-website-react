import { navLinks } from "../constants";

function Nav() {
  return (
    <header className="py-5">
      <nav className="flex justify-between items-center mx-auto px-12 max-w-7xl min-h-12">
        <a
          href="#"
          className="pt-2 font-poppins text-[25px] font-bold leading-[1.2] text-black cursor-pointer no-underline"
        >
          Firdaus
        </a>
        <ul className="flex justify-between items-center gap-12">
          {navLinks.map((item) => (
            <li key={item.label} className="list-none">
              <a
                href={item.href}
                className="font-poppins font-medium leading-normal text-black no-underline text-[14px]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
