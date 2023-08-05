import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ReactLogo from "./ReactLogo";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 text-white">
      <ReactLogo type="spin" size={48} />
      <div className="hidden md:flex">
        <p className="header-link">Home</p>
        <p className="header-link">Account</p>
        <p className="header-link">Sign In</p>
        <p className="header-link">Sign Up</p>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] max-w-[300px] border-r border-gray-800 bg-gray-950 duration-500 ease-in-out"
            : "fixed left-[-100vw]"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-emerald-400">
          Navbar
        </h1>
        <ul>
          <li className="navbar-link">Sign In</li>
          <li className="navbar-link">Home</li>
          <li className="navbar-link">Company</li>
          <li className="navbar-link">Resources</li>
          <li className="navbar-link">About</li>
          <li className="p-4 hover:cursor-pointer hover:underline">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
