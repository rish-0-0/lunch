import React from "react";

import Layout from "../components/layout";
import Logo from "../components/Logo";
import Title from "../components/Title";
import SEO from "../components/seo";
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Logo>
        <Title title="Rishabh Anand" />
      </Logo>
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
