import * as React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import About from "../components/About";
function Index(){

  return(
    <Layout>
      <Hero/>
      <WorkExperience/>
      <About/>
    </Layout>
  );
}
export default Index;
