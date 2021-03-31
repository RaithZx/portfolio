import React from "react";
import profilePic from "../images/profile.jpg";
import profilePicHat from "../images/profileHat.jpg";
import Card from "../components/Card";
import Media from "../components/SocialMedia";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center flex-wrap  h-screen relative background-red border-1">
      <h1 className="text-2xl md:text-6xl text-gray-700 font-bold title">
        I'm Yuri,
        <br /> a <span className="underline">Salesforce</span> developer
      </h1>
      <span className="mt-4 md:mt-8 text-base md:text-xl text-secondary">
        I'm an avid developer with 4+ years of{" "}
        <Link to="/WorkExperience">
          <span className="underline">
            <mark>work experience.</mark>
          </span>
        </Link>
        <br />
        I'm a Brazilian based in Spain currently working remotely from Africa
        🌴🥥. <br />
      </span>
      <span className="text-gray-600 text-base md:text-xl mt-8">
        Read my{" "}
        <mark>
          <Link to="/About" className="underline text-black-300">
            story
          </Link>{" "}
        </mark>
        and checkout my{" "}
        <a href="" className="underline text-black-300">
          <mark> projects</mark>
        </a>
      </span>
      {/* <div className="flex justify-start"><Card /></div> */}
      <Media />
    </div>
  );
};

export default Hero;
