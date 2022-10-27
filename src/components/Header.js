import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="px-7 sm:px-4 py-5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <span className="self-center text-xl whitespace-nowrap dark:text-white opacity-80 font-light">
              Sleep tight
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden bg-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            ></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden bg-none">
              <li>Home</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
