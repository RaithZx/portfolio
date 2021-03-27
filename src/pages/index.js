import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../pages/Hero";
import WorkExperience from "../pages/WorkExperience";
import About from "../pages/About";
function Index() {
  return <Layout>{<Hero />}</Layout>;
}
export default Index;
