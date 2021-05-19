import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "fontsource-zilla-slab";
import "@fontsource/inter";
import { Location } from '@reach/router';
import Seo from "./seo";
// import "fontsource-inter";

const layout = ({ location, children }) => {
  console.log('LAYOUT')
  console.log(getCurrentPath(location))
  console.log(location)
  let displayHeader = getCurrentPath(location) == '/' ? false : true;
  return (
    <>
    <Seo />
      {displayHeader && <Header location={location} />}

      <main className="px-6 lg:px-32 w-screen ">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

const getCurrentPath = (location) => {
  // strip every '/' of the string
  // return location.pathname.replaceAll('/','');
  return location.pathname;
  
}

export default layout;
