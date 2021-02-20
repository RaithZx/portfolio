import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-end w-full fixed px-6 lg:px-32">
      <div className="mt-6 text-lg text-primary font-bold">
        <span className="mr-6">About me</span>
        <span className="mr-6">Contact</span>
      </div>
    </nav>
  );
};

export default Header;
