import React, { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoSunny, IoMoon } from "react-icons/io5";

const Navbar = ({ navigationItems }) => {
  let [mobileMenu, setMobileMenu] = useState(false);

  // This function is ussed for mobile menu. It is basically change the value of state variable `mobileMenu` value.
  // If the value of mobileMenu is false it negate the value.
  const handleMobileMenu = () => {
    setMobileMenu((m) => !m);
  };
  return (
    <nav className="w-[95%] md:w-[98%] h-fit m-3 md:m-1 md:mt-2 lg:mt-4 rounded-t-[2.8rem]  md:rounded-t-[2.5rem] lg:rounded-t-[2rem] rounded-b-[2rem] bg-white flex justify-between items-center p-4 relative">
      {/* logo */}
      <div>
        <p className="w-8 h-8 rounded-full bg-gray"></p>
      </div>
      <div className="flex gap-3 lg:gap-4">
        {/* navigation-items */}
        <ul
          className={`absolute top-20 lg:relative lg:top-0 ${
            !mobileMenu
              ? "invisible lg:visible"
              : "visible right-4 translate-x-2"
          } lg:translate-x-0 lg:flex gap-3 transition-transform`}
        >
          {navigationItems.map((navItme, idx) => {
            return (
              <li className="font-edensor cursor-pointer text-lg font-bold" key={idx}>
                {navItme} /
              </li>
            );
          })}
        </ul>
        {/* Themes */}
        <div>
          <IoSunny className="text-2xl" />
          <IoMoon className="text-2xl hidden" />
        </div>
        {/* mobile menu */}
        <div
          className="flex lg:hidden transition-all"
          onClick={handleMobileMenu}
        >
          <CgMenuRight
            className={`text-2xl ${!mobileMenu ? "block" : "hidden"} lg:hidden`}
          />
          <CgClose className={`text-2xl ${!mobileMenu ? "hidden" : "block"}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
