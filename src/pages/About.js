import React from "react";
import Layout from "../components/Layout";
const About = () => {
  return (
    <Layout>
      <section className="flex flex-col flex-wrap mt-10 h-screen" id="about">
        <a href="">
          <div class="flex items-center justify-start mb-8">
            <div class="w-10 border-b border-solid border-black"></div>
            <h1 class="ml-3 text-4xl text-primary font-bold">About me</h1>
            {/* <h1 class="ml-3 text-3xl text-gray-700 font-bold title">Work Experience</h1> */}
          </div>
        </a>
        <div class="text-xl text-secondary mb-10">
          Nice to meet you! My name is Yuri, I'm 21 years old. I was born in Brazil but lived most of my life in Europe between Portugal and Spain. <br />
          I'm a curious person and I love to learn. That's how I got into programming.
          HOW I STARTED?
          My dad works in IT and since younger ages my brother and I had the chance to play around with some computer that my dad would bring home.
          I believe that knowledge should be free and no one should depend on institutions to learn new skills. I proved to myself that when I was 12. My 
          At 12 I started to learn programming by my-self (with internet's help). 
          I'm an avid web developer based in Spain. I love to learn and explore
          so I ask a lot of questions :P <br />
          I always look forward to improve and adopt best practices in my
          workflow. I have an strong analytical mindset that helps me provide a
          problem solving asset. <br />I have +4 years of experience working for
          large and small companies.
        </div>
      </section>
    </Layout>
  );
};

export default About;
