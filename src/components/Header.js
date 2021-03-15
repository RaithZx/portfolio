import React from "react";

const Header = () => {
  const navToggle = () => {
    console.log("Hello World");
  };
  return (
    // <nav classNameName="flex justify-end w-full px-6 lg:px-32 bg-white">
    //   <div classNameName="mt-6 text-lg text-primary font-bold">
    //     <span classNameName="mr-6">Blog</span>
    //     <span classNameName="mr-6">About</span>
    //     <span classNameName="mr-6">Uses</span>
    //     <span classNameName="mr-6 border border-2-gray">Email me</span>
    //   </div>
    // </nav>
    <header
      id="top"
      className="w-full flex flex-col fixed sm:absolute bg-white pin-t pin-r pin-l"
    >
      <nav
        id="site-menu"
        className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:shadow-none"
      >
        <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          //
          <a href="#" className="no-underline py-1">
            //<h1 className="font-bold text-lg tracking-widest">LOGO</h1>
            //
          </a>
          <button
            id="menuBtn"
            className="hamburger block sm:hidden focus:outline-none"
            type="button"
            onClick={navToggle}
          >
            {/* <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span> */}
            {/* <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-line-width="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          id="menu"
          className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden"
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
