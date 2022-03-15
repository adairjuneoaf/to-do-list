import React, { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";

import Modal from "react-modal";
import { FiX } from "react-icons/fi";

import { api } from "../services/axios";

import { MenuContext } from "../contexts/contextMenuToggle";

import { Container, FormNewTask } from "../styles/components/NewTaskModal";

const NewTaskModal: React.FC = () => {
  const [nameTask, setNameTask] = useState<string>("");
  const [descTask, setDescTask] = useState<string>("");

  const { isModalTaskOpen, closeModalTask } = useContext(MenuContext);

  const router = useRouter();

  async function handleResetTask(event: FormEvent) {
    event.preventDefault();

    setNameTask("");
    setDescTask("");

    closeModalTask();
  }

  async function handleSubmitTask(event: FormEvent) {
    event.preventDefault();

    if (nameTask.trim() === "") {
      console.log("error! task name is empty");
      return;
    }

    if (descTask.trim() === "") {
      console.log("error! description task is empty");
      return;
    }

    await api
      .post("/tasks", {
        title: nameTask,
        description: descTask,
      })
      .then(function (response) {
        console.log(response);
        router.push("/tasks");
      })
      .catch(function (error) {
        console.log(error);
        return;
      });

    setNameTask("");
    setDescTask("");

    closeModalTask();
  }

  Modal.setAppElement("#__next");

  return (
    <Modal isOpen={isModalTaskOpen} onRequestClose={closeModalTask} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button" className="buttonCloseModal" onClick={closeModalTask}>
        <FiX className="icon iconCloseModal" />
      </button>

      <Container>
        <div className="headerFormNewTask">
          <h2>Criar tarefa</h2>
        </div>
      </Container>

      <FormNewTask onReset={handleResetTask} onSubmit={handleSubmitTask}>
        <label htmlFor="inputTitleTask" className="labelTitle">
          Nome da tarefa
        </label>
        <input type="text" id="inputTitleTask" placeholder="" value={nameTask} onChange={(event) => setNameTask(event.target.value)} />

        <label htmlFor="inputDescriptionTask" className="labelDescription">
          Descrição da tarefa
        </label>
        <textarea id="inputDescriptionTask" placeholder="" value={descTask} onChange={(event) => setDescTask(event.target.value)} />

        <div className="buttonsActionForm">
          <button type="reset">CANCELAR</button>
          <button type="submit">SALVAR</button>
        </div>
      </FormNewTask>
    </Modal>
  );
};

export default NewTaskModal;
