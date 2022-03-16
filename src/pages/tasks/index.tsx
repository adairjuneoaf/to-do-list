import React, { useContext, useMemo, useState } from "react";

import { NextPage } from "next";
import Head from "next/head";

import { useQuery } from "react-query";

import toast from "react-hot-toast";

import { FiSearch } from "react-icons/fi";

import ButtonNewTask from "../../components/ButtonNewTask";
import CardTask from "../../components/CardTask";

import { GenericContext } from "../../contexts/contextGenericApp";

import { Container, Content, Footer } from "../../styles/pages/tasks";

import { getAllTasks } from "../../services/api";

interface TaskProps {
  guid: string;
  title: string;
  situation: string;
  description: string;
}

const PageTasks: NextPage = () => {
  const { openModalTask } = useContext(GenericContext);

  const { data, error, isLoading, isError } = useQuery("tasks", getAllTasks);

  // Estado para trabalhar com o INPUT de pesquisa das tarefas.
  const [searchValue, setSearchValue] = useState("");

  // Teste simples para verificar se existe algum dado na constante sendo assim evitando erros no "filteredData".
  if (isError) {
    console.log(error);
  }

  // Constante responsavel por entregar os dados filtrados utilizando o input de pesquisa.

  const filteredData = useMemo(() => data?.filter(({ title }) => title.toLowerCase().includes(searchValue.toLowerCase())), [data, searchValue]);

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

          {isLoading && (
            <p>
              Carregando...
              <br />
              <br />
            </p>
          )}

          {!data && <p>Não há tarefas na sua lista... 😓</p>}

          {searchValue.trim()
            ? filteredData?.map((task) => <CardTask key={task.guid} {...task} />)
            : data?.map((task: TaskProps) => <CardTask key={task.guid} {...task} />)}

          {/* {!data ?  : data.map((task: TaskProps) => <CardTask key={task.guid} {...task} />)} */}
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

export default PageTasks;
