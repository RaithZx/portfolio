import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "fontsource-zilla-slab";

const layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main className="container px-6 md:px-6 lg:px-32 w-screen">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default layout;
