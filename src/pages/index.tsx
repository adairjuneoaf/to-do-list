import React from "react";

import Head from "next/head";
import type { NextPage } from "next";

import { Container } from "../styles/pages";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>To Do | Adair Juneo</title>
      </Head>

      <Container></Container>
    </React.Fragment>
  );
};

export default Home;
