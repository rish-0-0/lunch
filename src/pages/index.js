import React from "react";

import Layout from "../components/layout";
import Logo from "../components/Logo";
import Title from "../components/Title";
import SEO from "../components/seo";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/index.css';
import Experience from "../components/Experience";
import Stack from '../components/Stack';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Logo>
          <Title title="Rishabh Anand" />
          <Stack />
        </Logo>
      </section>
      <Experience />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
