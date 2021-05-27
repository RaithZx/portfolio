import React from "react";
import Header from "./Header";
import "fontsource-zilla-slab";
import "@fontsource/inter";
import Seo from "./seo";
import { useLocation } from "@reach/router";
// import "fontsource-inter";

const Layout = ({ location, children }) => {
  const { pathname } = useLocation();
  let displayHeader = pathname == "/" ? false : true;
  return (
    <>
      <Seo />
      {displayHeader && <Header locationProp={pathname} />}

      <main className="px-6 lg:px-32 w-screen ">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
