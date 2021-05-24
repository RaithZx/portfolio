import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Projects = ({ location }) => {
  return (
    <Layout location={location}>
      <div id="projects">
        <div className="flex flex-col">
          <div className="flex items-center justify-start mb-8">
            <div className="w-10 border-b border-solid border-black"></div>
            <h1 className="ml-3 text-4xl text-primary font-bold title">
              <Link to="/Projects">Projects</Link>
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-4">
          <p className="">Page under construction</p>
          <StaticImage
            src="../images/underConstruction.png"
            placeholder="blurred"
            className="w-2/3"
          />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
