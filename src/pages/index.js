import React from "react";

import Layout from "../components/layout";
import Logo from "../components/Logo";
import Title from "../components/Title";

const width = window.screen.width;

const IndexPage = () => (
  <Layout>
    <Logo width={width}>
      <Title title="Rishabh Anand" />
    </Logo>
  </Layout>
);

export default IndexPage;
