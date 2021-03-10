import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import profilePic from "../images/profile.jpg";
import profilePicHat from "../images/profileHat.jpg";
import Card from "./Card";
import Media from "./SocialMedia";

const Hero = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center  h-screen relative">
      <h1 className="text-5xl md:text-6xl text-gray-700 font-bold title">
        Hi! I'm Yuri 👋🏽,
        <br /> a <span className="underline">Salesforce</span> developer
      </h1>
      <span className="mt-4 md:mt-8 text-xl text-secondary">
        I'm an avid developer with +4 years of{" "}
        <AnchorLink to="#workExperience" >
          <span className="underline">
            <mark>work experience</mark>
          </span>
        </AnchorLink>
        <br />
      </span>
      {/* <span className="mt-8 text-xl text-secondary">
        I'm currently working <mark>remotely from Africa (Cape Verde)</mark> as
        a digital nomad
        <br />
      </span> */}
      <span className="text-gray-600 text-xl">
        Read my{" "}
        <AnchorLink to="#about" className="underline text-black-300">
          <mark>story</mark>
        </AnchorLink>{" "}
        and checkout my{" "}
        <a href="" className="underline text-black-300">
          <mark> projects</mark>
        </a>
      </span>
      <div className="flex justify-start">{/* <Card /> */}</div>
      <Media />
      <div className="flex justify-center w-full bottom-10 md:bottom-4 absolute">
        <svg
          className="w-12 animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
