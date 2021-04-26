import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
const Index = ({location}) => {
  return (
    <Layout location={location}>
      <Hero />
    </Layout>
  );
}
export default Index;
