import React from "react";
import Header from "./Header";
import "fontsource-zilla-slab";
import "@fontsource/inter";
import Seo from "./seo";
import { useLocation } from "@reach/router";
// import "fontsource-inter";

const layout = ({ location, children }) => {
  console.log("LAYOUT");
  console.log(getCurrentPath(location));
  console.log(location);
  console.log("useLocation from react router");
  const { pathname } = useLocation();
  console.log(pathname);
  let displayHeader = getCurrentPath(location) == "/" ? false : true;
  return (
    <>
      <Seo />
      {displayHeader && <Header location={pathname} />}

      <main className="px-6 lg:px-32 w-screen ">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

const getCurrentPath = (location) => {
  // strip every '/' of the string
  // return location.pathname.replaceAll('/','');
  return location.pathname;
};

export default layout;
