import React from "react";
import Card from "./Card";
import SocialMedia from "./SocialMedia";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-screen relative background-red border-1">
      <h1 className="text-3xl md:text-6xl text-gray-700 font-bold">
        Hey! I'm Yuri,
        <br /> a <span className="underline">Salesforce</span> developer
      </h1>
      <span className="mt-4 md:mt-8 text-xl md:text-xl text-secondary">
        I'm an avid developer with 4+ years of{" "}
        <Link to="/WorkExperience">
          <span className="">
            <span className="underline-effect">work experience.</span>
          </span>
        </Link>
        <br />
        I'm a Brazilian based in Spain currently working remotely from Africa
        🌴🥥. <br />
      </span>
      <span className="text-gray-600 text-xl md:text-xl mt-8">
        Read my{" "}
        <span className="underline-effect">
          <Link to="/About" className="text-black-300">
            story
          </Link>{" "}
        </span>
        and checkout my{" "}
        <a href="" className="text-black-300">
          <span className="underline-effect"> projects</span>
        </a>
      </span>
      <SocialMedia />
    </div>
  );
};

export default Hero;
