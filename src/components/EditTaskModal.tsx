import React, { FormEvent, useContext, useState } from "react";

import Modal from "react-modal";
import { FiX } from "react-icons/fi";

import { api } from "../services/axios";

import { MenuContext } from "../contexts/contextMenuToggle";

import { ButtonsTaskStatus, Container, FormNewTask, StatusOption } from "../styles/components/EditTaskModal";

interface EditTaskModalProps {
  guid: string;
  // title: string;
  // situation: string;
  // description: string;
}

const EditTaskModal: React.FC = () => {
  const { isModalEditTaskOpen, closeEditModalTask, idSelectedTaskEdit } = useContext(MenuContext);

  console.log(idSelectedTaskEdit);

  const [nameTaskEdit, setNameTaskEdit] = useState<string>("");
  const [descTaskEdit, setDescTaskEdit] = useState<string>("");
  const [statusTaskEdit, setStatusTaskEdit] = useState<string>("uncompleted");

  async function handleResetTaskEdit(event: FormEvent) {
    event.preventDefault();

    setNameTaskEdit("");
    setDescTaskEdit("");
    setStatusTaskEdit("");

    closeEditModalTask();
  }

  async function handleSubmitTaskEdit(event: FormEvent) {
    event.preventDefault();

    if (nameTaskEdit.trim() === "") {
      console.log("error! task name is empty");
      return;
    }

    if (descTaskEdit.trim() === "") {
      console.log("error! description task is empty");
      return;
    }

    // await api
    //   .post("/tasks", {
    //     title: nameTask,
    //     description: descTask,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     router.push("/tasks");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     return;
    //   });

    setNameTaskEdit("");
    setDescTaskEdit("");
    setStatusTaskEdit("");

    closeEditModalTask();
  }

  Modal.setAppElement("#__next");

  return (
    <Modal isOpen={isModalEditTaskOpen} onRequestClose={closeEditModalTask} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button" className="buttonCloseModal" onClick={closeEditModalTask}>
        <FiX className="icon iconCloseModal" />
      </button>

      <Container>
        <div className="headerFormNewTask">
          <h2>Editar tarefa</h2>
        </div>
      </Container>

      <FormNewTask onReset={handleResetTaskEdit} onSubmit={handleSubmitTaskEdit}>
        <label htmlFor="inputTitleTask" className="labelTitle">
          Nome da tarefa
        </label>
        <input type="text" id="inputTitleTask" placeholder="" value={nameTaskEdit} onChange={(event) => setNameTaskEdit(event.target.value)} />

        <label htmlFor="inputDescriptionTask" className="labelDescription">
          Descrição da tarefa
        </label>
        <textarea id="inputDescriptionTask" placeholder="" value={descTaskEdit} onChange={(event) => setDescTaskEdit(event.target.value)} />

        <ButtonsTaskStatus>
          <StatusOption
            isActiveOption={statusTaskEdit === "uncompleted"}
            onClick={() => {
              setStatusTaskEdit("uncompleted");
            }}
            type="button"
          >
            <p>Em progreso</p>
          </StatusOption>
          <StatusOption
            isActiveOption={statusTaskEdit === "completed"}
            onClick={() => {
              setStatusTaskEdit("completed");
            }}
            type="button"
          >
            <p>Concluído</p>
          </StatusOption>
        </ButtonsTaskStatus>

        <div className="buttonsActionForm">
          <button type="reset">CANCELAR</button>
          <button type="submit">SALVAR</button>
        </div>
      </FormNewTask>
    </Modal>
  );
};

export default EditTaskModal;
