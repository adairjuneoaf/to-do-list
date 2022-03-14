import React from "react";

import { NextPage } from "next";
import Head from "next/head";

import { FiSearch } from "react-icons/fi";

import CardTask from "../components/CardTask";

import { Container, Content, Footer } from "../../styles/pages/tasks";
import ButtonNewTask from "../components/ButtonNewTask";

const PageTasks: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Lista de tarefas | Adair Juneo</title>
      </Head>
      <Container>
        <Content>
          <div className="inputSearch">
            <FiSearch className="iconInputSearch" />

            <input id="searchTask" className="searchTask" type="search" title="Procurar tarefas" placeholder="Procurar tarefas" />
          </div>
          <h1>Tarefas</h1>
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
        </Content>
      </Container>
      <Footer>
        <ButtonNewTask />
      </Footer>
    </React.Fragment>
  );
};

export default PageTasks;
