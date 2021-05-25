import React from "react";
import Layout from "../components/Layout";
import { calculateYearsBetweenDates } from "../helpers/helpers";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const About = ({ location }) => {
  const years = calculateYearsBetweenDates(new Date(), new Date(1999, 4, 29));
  return (
    <Layout location={location}>
      <section className="flex flex-col" id="about">
        <a href="">
          <div class="flex items-center mb-8">
            <div class="w-10 border-b border-solid border-black"></div>
            <h1 class="ml-3 text-4xl text-primary font-bold title">About me</h1>
          </div>
        </a>
        <div className="flex flex-wrap mb-10">
          <div className="text-lg text-secondary  w-full text-justify sm:w-1/2">
            Hey there! 👋🏽 My name is Yuri Leandro, I'm from from Brazil and now
            I'm living in sunny Spain.
            <p>
              I'm an avid developer with a solid analytical mind that helps me
              provide a problem-solving asset. Yep, give me a problem I will
              solve it :P. Enough of marketing pitch, here is some info about
              me:
            </p>
            <br />
            <span className="sectionTitle text-xl text-primary font-bold">
              How I started programming
            </span>
            <p>
              I'm a curious person and I love to learn so programming was the
              perfect challenge for me. My first{" "}
              <Link
                to="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
                target="_blank"
                className="underline-effect"
              >
                "Hello World"
              </Link>{" "}
              was at 12 with Java.
            </p>
            <br />
            <span className="sectionTitle text-xl text-primary font-bold mt-10">
              Languages
            </span>
            <p>Portugues 🇵🇹 | Spanish 🇪🇸 | English 🇬🇧</p>
            <br />
            <span className="sectionTitle text-xl text-primary font-bold">
              Things I enjoy
            </span>
            <p>
              Surf | Cyberpunk & Dystopic art | 3D | Physics engine simulators 
            </p>
          </div>
          <div className="flex flex-col items-center right w-full sm:w-1/2 space-y-2 sm:space-y-20 px-10  mt-10 sm:mt-0">
            <StaticImage
              className="shadow-lg"
              src="../images/6.jpeg"
              alt="A dinosaur"
              placeholder="blurred"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
