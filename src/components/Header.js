import React from "react";

const Header = () => {
  const navToggle = () => {
    console.log("Hello World");
    alert("Hello World");
  };
  return (
    <header
      id="top"
      className=" flex flex-col bg-white container mx-auto py-4"
    >
      <nav
        id="site-menu"
        className="flex flex-col sm:flex-row  justify-end items-center px-4 sm:px-6 py-1 bg-white sm:shadow-none"
      >
        <div
          id="menu"
          className="w-full w-auto  sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 "
        >
          <a
            className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
            href="https://ttntm.me/blog/tailwind-responsive-menu/"
            target="_blank"
          >
            About
          </a>
          <a
            className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
            href="#bottom"
          >
            Features
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
