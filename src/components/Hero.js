import React from "react";
import SocialMedia from "./SocialMedia";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { calculateYearsBetweenDates } from "../helpers/helpers";

const Hero = () => {
  let years = calculateYearsBetweenDates(new Date(), new Date(2017, 1, 1));
  return (
    <div className="flex flex-col justify-center h-screen relative">
      <div className="flex ">
        <div className="p-1 bg-gradient-to-tr hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 rounded-full mb-4 hover:shadow-xl">
          <div className="p-1 bg-white rounded-full">
            <StaticImage
              className="rounded-full"
              src="../images/6.jpeg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fixed"
              width={78}
              height={78}
            />
          </div>
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl text-gray-700 font-bold title">
        {/* Hey! I'm Yuri,
        <br /> a <span className="underline">Salesforce</span> developer */}
        Yuri Leandro -
        <br />
        <span className="underline">Salesforce</span> developer
      </h1>
      <span
        id="presentation"
        className="mt-4 md:mt-8 text-xl md:text-xl text-secondary"
      >
        Hi! I'm Yuri, an avid web developer with {years + "+ "} years of{" "}
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
        </span>{" "}
        and checkout my{" "}
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

// const calculateYears = () => {
//   let d1 = new Date();
//   let d2 = new Date(2017, 1, 1);
//   let yearsDiff = d1.getFullYear() - d2.getFullYear();
//   return yearsDiff;
// };
export default Hero;
