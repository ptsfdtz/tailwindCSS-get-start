import React from "react";
import Logo from "../assets/react.svg";

function Header() {
  return (
    <header className="flex justify-between items-center h-20">
      <img src={Logo} alt="" className="w-16 h-16" />
      <nav className="flex items-center">
        <a
          href="#"
          className="ml-8 bg-white px-4 py-2 rounded text-gray-900 flex items-center justify-center w-36 text-center hover:bg-zinc-600 hover:text-white transition duration-250 delay-100"
        >
          log in
        </a>
        <a
          href="#"
          className="ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 flex items-center justify-center w-36 text-center hover:bg-zinc-700 transition duration-250 delay-100"
        >
          sign up
        </a>
      </nav>
    </header>
  );
}

export default Header;
