import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, LucideMenu, XIcon } from "lucide-react";

import logo from "/logo.svg";

const NAV_ITEMS = [
  {
    label: "Shop",
    link: "/",
  },
  {
    label: "Mens",
    link: "/mens",
  },
  {
    label: "Womens",
    link: "/womens",
  },
  {
    label: "Kids",
    link: "/kids",
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("/");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location !== activeLink) {
      setActiveLink("");
    }
  }, [location]);

  return (
    <header className="sticky top-0 left-0 bg-white shadow-md shadow-cyan-400/30 z-[99999]">
      <div className="container mx-auto flex items-center justify-between px-2 py-4">
        <Link
          to="/"
          onClick={() => setActiveLink("/")}
          className="flex items-center gap-1"
        >
          <div className="w-8 h-8">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-semibold text-cyan-800">E-Store</span>
        </Link>

        {/* NAV MENU FOR LARGER SCREENS */}
        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-6">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.link}
                  onClick={() => setActiveLink(item.link)}
                  className={`${
                    activeLink === item.link ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item.label}
                </Link>
                <hr
                  className={`absolute bottom-0 left-0 border-b-2 border-cyan-300 group-hover:w-full transition-all duration-200 ${
                    activeLink === item.link ? "w-full" : "w-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* NAV MENU FOR MOBILE SCREENS */}
        <nav
          className={`md:hidden absolute top-0 left-0 right-0 flex items-center justify-center p-10 bg-white shadow-md shadow-cyan-400/30 transition-all duration-200 ${
            showMenu ? "translate-y-16" : "-translate-y-[300px]"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-5">
            {NAV_ITEMS.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.link}
                  onClick={() => setActiveLink(item.link)}
                  className={`${
                    activeLink === item.link ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item.label}
                </Link>
                <hr
                  className={`absolute bottom-0 left-0 border-b-2 border-cyan-300 group-hover:w-full transition-all duration-200 ${
                    activeLink === item.link ? "w-full" : "w-0"
                  }`}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <Link
            to="/login"
            className="border-2 border-cyan-300 px-2 rounded-md hover:bg-cyan-300 hover:shadow-md scale-100 hover:scale-110 transition-all duration-200"
          >
            Login
          </Link>
          <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <XIcon /> : <LucideMenu />}
          </button>
          <Link to="/shoppingBag" className="relative">
            <ShoppingBag />
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
