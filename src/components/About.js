import React from "react";

const About = () => {
  return (
    <section className="flex flex-wrap mt-10 h-screen" id="about">
      <a href="">
        <div class="flex items-center justify-start mb-8">
          <div class="w-10 border-b border-solid border-black"></div>
          <h1 class="ml-3 text-4xl text-primary title">About me</h1>
          {/* <h1 class="ml-3 text-3xl text-gray-700 font-bold title">Work Experience</h1> */}
        </div>
      </a>
      <div class="text-xl text-secondary mb-10">
        My name is Yuri and I'm 21 years old. I started coding when I was 12 and fell in love with web
        technologies. <br />
        I'm an avid web developer based in Spain.
        I love to learn and explore so I ask a lot of questions :P <br />
        I always look forward to improve and adopt best practices in my workflow. I
        have an strong analytical mindset that helps me provide a problem
        solving asset. <br/>
        I have +4 years of experience working for large and small companies.
      </div>
    </section>
  );
};

export default About;
