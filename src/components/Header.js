import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-end w-full  px-6 lg:px-32 bg-white">
      <div className="mt-6 text-lg text-primary font-bold">
        <span className="mr-6">Blog</span>
        <span className="mr-6">About</span>
        <span className="mr-6">Uses</span>
        <span className="mr-6 border border-2-gray">Email me</span>
      </div>
    </nav>
  );
};

export default Header;
