import React from "react";

const WorkExperience = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap h-screen">
        {/* <h1 className="text-lg md:text-2lg text-gray-700 font-bold title">
          Work Experience
        </h1> */}
        <a href="">
          <div class="flex items-center justify-start mb-8">
            <div class="w-10 border-b border-solid border-black"></div>
            <h1 class="ml-3 text-3xl text-primary title">Work Experience</h1>
            {/* <h1 class="ml-3 text-3xl text-gray-700 font-bold title">Work Experience</h1> */}
          </div>
        </a>
        <div class="experienceList flex flex-col">
          <div class="experienceItem flex-col mb-4">
            <div class="firstRow">
            <span className="text-xl text-gray-800 font-bold">Salesforce Developer</span>
            <span className="ml-5 text-gray-500 text-md">February 20129 - Present</span>
            </div>
            <p className="text-md text-gray-700 font-bold">K-LAGAN</p>
            </div>
          <div class="experienceItem flex-col mb-8">
            <div class="firstRow">
            <span className="text-xl text-black-700 font-bold">Salesforce Developer</span><span className="ml-5 text-gray-400 text-lg">February 20129 - Present</span>
            </div>
            <p className="ml-2 text-md text-gray-600 font-bold">K-LAGAN</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
