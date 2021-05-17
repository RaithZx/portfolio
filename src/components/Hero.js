import React from "react";
import SocialMedia from "./SocialMedia";
import { Link, graphql } from "gatsby";

const Hero = () => {
  let years = calculateYears();
  return (
    <div className="flex flex-col justify-center h-screen relative background-red border-1">
      <h1 className="text-4xl md:text-6xl text-gray-700 font-bold title">
        {/* Hey! I'm Yuri,
        <br /> a <span className="underline">Salesforce</span> developer */}
        Yuri Leandro -
        <br />
        <span className="underline">Salesforce</span> developer
      </h1>
      <span id="presentation" className="mt-4 md:mt-8 text-xl md:text-xl text-secondary">
        Hi! I'm Yuri, an avid web developer with {years + "+ "}  years of{" "}
        <Link to="/WorkExperience">
          <span className="">
            <span className="underline-effect">work experience.</span>
          </span>
        </Link>
        {/* <br />
        I'm a Brazilian based in Spain currently working remotely from Africa
        🌴🥥. <br /> */}
      </span>
      <span className="text-gray-600 text-xl md:text-xl">
        Read my{" "}
        <span className="underline-effect">
          <Link to="/About" className="text-black-300">
            story
          </Link>
        </span>
        {" "}and checkout my{" "}
        <a href="" className="text-black-300">
          <span className="underline-effect"> 
            <Link to="/Projects" className="text-black-300">
              projects
            </Link>
          </span>
        </a>
      </span>
      <SocialMedia />
    </div>
  );
};

const calculateYears = () => {
  let d1 = new Date();
  let d2 = new Date(2017, 1, 1);
  let yearsDiff = d1.getFullYear() - d2.getFullYear();
  return yearsDiff;
}
export default Hero;
