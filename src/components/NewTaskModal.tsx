import React, { FormEvent, useContext, useState } from "react";

import toast from "react-hot-toast";

import Modal from "react-modal";
import { FiX } from "react-icons/fi";

import { api } from "../services/axios";

import { GenericContext } from "../contexts/contextGenericApp";

import { Container, FormNewTask } from "../styles/components/NewTaskModal";
import { useMutation, useQueryClient } from "react-query";
import { createNewTask } from "../services/api";

const NewTaskModal: React.FC = () => {
  const { isModalTaskOpen, closeModalTask } = useContext(GenericContext);

  // Estados para trabalhar com o "FORM" dentro da MODAL.
  const [descTask, setDescTask] = useState<string>("");
  const [titleTask, setTitleTask] = useState<string>("");

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(createNewTask);

  async function handleResetTask(event: FormEvent) {
    event.preventDefault();

    setTitleTask("");
    setDescTask("");

    closeModalTask();
  }

  async function handleSubmitTask(event: FormEvent) {
    event.preventDefault();

    if (titleTask.trim() === "") {
      console.log("error! task name is empty");
      return;
    }

    if (descTask.trim() === "") {
      console.log("error! description task is empty");
      return;
    }

    await mutateAsync({ title: titleTask, description: descTask });
    queryClient.invalidateQueries("tasks");

    setTitleTask("");
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
        <input type="text" id="inputTitleTask" placeholder="" value={titleTask} onChange={(event) => setTitleTask(event.target.value)} />

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
function mutateAsync(arg0: { guid: any; title: any; description: any; situation: any }) {
  throw new Error("Function not implemented.");
}
