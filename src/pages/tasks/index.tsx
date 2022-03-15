import React, { useContext, useMemo, useState } from "react";

import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { FiSearch } from "react-icons/fi";

import ButtonNewTask from "../../components/ButtonNewTask";
import CardTask from "../../components/CardTask";

import { api } from "../../services/axios";

import { GenericContext } from "../../contexts/contextGenericApp";

import { Container, Content, Footer } from "../../styles/pages/tasks";
import toast from "react-hot-toast";

interface TaskProps {
  guid: string;
  refId: string;
  title: string;
  situation: string;
  description: string;
}

interface PageTasksProps {
  data: Array<TaskProps>;
  status: number;
  statusText: string;
}

const PageTasks: NextPage<PageTasksProps> = ({ data, status, statusText }) => {
  const { openModalTask } = useContext(GenericContext);

  // Estado para trabalhar com o INPUT de pesquisa das tarefas.
  const [searchValue, setSearchValue] = useState("");

  // Teste simples para verificar se existe algum dado na constante sendo assim evitando erros no "filteredData".
  if (!data) {
    data = [];
  }

  // Testes simples para informar ao usuário erros caso ocorram.
  if (status === 400) {
    toast.error(`Status: ${statusText} ❌`);
  }

  if (status === 500) {
    toast.error(`Status: ${statusText} ❌`);
  }

  // Constante responsavel por entregar os dados filtrados utilizando o input de pesquisa.
  const filteredData = useMemo(() => data.filter(({ title }) => title.toLowerCase().includes(searchValue.toLowerCase())), [data, searchValue]);

  return (
    <React.Fragment>
      <Head>
        <title>Lista de tarefas | Adair Juneo</title>
      </Head>
      <Container>
        <Content>
          <div className="inputSearch">
            <FiSearch className="iconInputSearch" />

            <input
              id="searchTask"
              className="searchTask"
              type="search"
              onChange={({ target }) => setSearchValue(target.value)}
              value={searchValue}
              title="Procurar tarefas"
              placeholder="Procurar tarefas"
            />
          </div>
          <h1>Tarefas</h1>

          {searchValue.trim()
            ? filteredData?.map((task) => <CardTask key={task.guid} {...task} />)
            : data?.map((task) => <CardTask key={task.guid} {...task} />)}

          {status === 204 && <p>Não há tarefas na sua lista... 😓</p>}
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
  const { data, status, statusText } = await api.get<PageTasksProps>("/tasks");

  return {
    props: { data, status, statusText },
    revalidate: 60 * 60 * 1, //1 Hora,
  };
};

export default PageTasks;
