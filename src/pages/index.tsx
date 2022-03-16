import type { NextPage } from "next";

import React from "react";

import Head from "next/head";

import { FiMenu, FiChevronRight } from "react-icons/fi";

import { Container } from "../styles/pages";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>To Do | Adair Juneo</title>
      </Head>

      <Container>
        <FiMenu className="iconSuggestPath" />
        &nbsp;
        <p>
          <FiChevronRight className="iconChevron" />
          Tarefas ou Sobre
        </p>
      </Container>
    </React.Fragment>
  );
};

export default Home;
