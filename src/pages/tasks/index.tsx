import React, { useContext } from "react";

import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { FiSearch } from "react-icons/fi";

import ButtonNewTask from "../../components/ButtonNewTask";
import CardTask from "../../components/CardTask";

import { api } from "../../services/axios";

import { MenuContext } from "../../contexts/contextMenuToggle";

import { Container, Content, Footer } from "../../styles/pages/tasks";

interface TaskProps {
  guid: string;
  refId: string;
  title: string;
  situation: string;
  description: string;
}

interface PageTasksProps {
  data: Array<TaskProps>;
}

const PageTasks: NextPage<PageTasksProps> = ({ data }) => {
  const { openModalTask } = useContext(MenuContext);

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

          {data.map((task) => (
            <CardTask key={task.guid} {...task} />
          ))}
        </Content>
      </Container>
      <Footer>
        <ButtonNewTask
          onClick={() => {
            openModalTask();
          }}
        />
      </Footer>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<PageTasksProps>("/tasks");

  return {
    props: { data },
    revalidate: 60 * 60 * 1, //1 Hora,
  };
};

export default PageTasks;
