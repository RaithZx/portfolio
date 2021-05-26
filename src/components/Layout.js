import React from "react";
import Header from "./Header";
import "fontsource-zilla-slab";
import "@fontsource/inter";
import Seo from "./seo";
import { useLocation } from "@reach/router";
// import "fontsource-inter";

const layout = ({ location, children }) => {
  console.log("LAYOUT");
  console.log(location);
  console.log("useLocation from react router");
  const { pathname } = useLocation();
  console.log(pathname);
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

export default layout;
