import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
const WorkExperience = ({ location }) => {
  return (
    <StaticQuery
      query={graphql`
        query WorkExperience {
          allWorkExperienceJson {
            edges {
              node {
                jobTitle
                company
                dateFrom
                dateTo
              }
            }
          }
        }
      `}
      render={(data) => (
        <Layout location={location}>
          <div id="workExperience">
            <div className="flex flex-col">
              <a href="">
                <div className="flex items-center justify-start mb-8">
                  <div className="w-10 border-b border-solid border-black"></div>
                  <h1 className="ml-3 text-4xl text-primary font-bold title">
                    Work Experience
                  </h1>
                </div>
              </a>
              <div className="experienceList flex flex-col">
                {data.allWorkExperienceJson.edges.map((item, index) => {
                  return (
                    // border-b border-gray p-4
                    <div className="experienceItem flex items-center mb-4 p-4 shadow-sm hover:shadow-lg">
                      <span className="relative flex h-4 w-4 mr-6">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-transparent border-2 border-green-400"></span>{" "}
                        <span
                          className={
                            "relative inline-flex rounded-full h-4 w-4 bg-transparent border-2 border-green-400 dark:border-dark-accent " +
                            (item.node.dateTo == "Current"
                              ? "animate-ping"
                              : "")
                          }
                        ></span>
                      </span>
                      <div className="flex-1  flex-wrap">
                        <span className="text-secondary text-base">
                          {item.node.dateFrom} - {item.node.dateTo}
                        </span>{" "}
                        <h1 className="text-xl text-primary font-bold ">
                          {item.node.jobTitle}
                        </h1>
                        <h2 className="text-lg text-secondary font-bold w-full">
                          {item.node.company}
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Layout>
      )}
    />
  );
};

export default WorkExperience;
