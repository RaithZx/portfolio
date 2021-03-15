import React from "react";
import WorkData from "../../content/workExperience.json";
import Layout from "../components/Layout";
const WorkExperience = () => {
  return (
    <Layout>
      <div id="workExperience">
        <div className="flex flex-col flex-wrap">
          <a href="">
            <div className="flex items-center justify-start mb-8">
              <div className="w-10 border-b border-solid border-black"></div>
              <h1 className="ml-3 text-4xl text-primary title">
                Work Experience
              </h1>
            </div>
          </a>
          <div className="experienceList flex flex-col">
            {WorkData.list.map((data) => {
              return (
                <div className="experienceItem flex items-center mb-4">
                  <span className="relative flex h-4 w-4 mr-6">
                    <span className=" absolute inline-flex h-full w-full rounded-full bg-transparent border-2 border-green-400"></span>{" "}
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-transparent border-2 border-green-400 dark:border-dark-accent"></span>
                  </span>
                  <div className="flex-1  flex-wrap">
                    <span className="text-secondary text-base">
                      {data.dateFrom} - {data.dateTo}
                    </span>{" "}
                    <h1 className="text-xl text-primary font-bold underline">
                      {data.jobTitle}
                    </h1>
                    <h2 className="text-lg text-secondary font-bold w-full">
                      {data.company}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkExperience;
