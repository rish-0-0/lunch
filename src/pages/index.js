import React from "react";

import Layout from "../components/layout";
import Logo from "../components/Logo";
import Title from "../components/Title";
import SEO from "../components/seo";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/index.css';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Logo>
          <Title title="Rishabh Anand" />
        </Logo>
      </section>
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
