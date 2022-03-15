import React, { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Modal from "react-modal";
import { FiX } from "react-icons/fi";

import toast from "react-hot-toast";

import { api } from "../services/axios";

import { GenericContext } from "../contexts/contextGenericApp";

import { ButtonsTaskStatus, Container, FormNewTask, StatusOption } from "../styles/components/EditTaskModal";

interface TaskEditType {
  guid: string;
  title: string;
  situation: string;
  description: string;
}

const EditTaskModal: React.FC = () => {
  const { isModalEditTaskOpen, closeEditModalTask, idSelectedTaskEdit } = useContext(GenericContext);

  // Estados para trabalhar com o "FORM" dentro da MODAL.
  const [descTaskEdit, setDescTaskEdit] = useState<string>("");
  const [titleTaskEdit, setTitleTaskEdit] = useState<string>("");
  const [statusTaskEdit, setStatusTaskEdit] = useState<string>("uncompleted");

  const router = useRouter();

  useEffect(() => {
    if (isModalEditTaskOpen) {
      (async () => {
        const { data, status } = await api.get<TaskEditType>(`/tasks/${idSelectedTaskEdit}`);

        if (status !== 200) {
          toast.error("Ops... Houve algum erro! 😥");
          return;
        }

        setTitleTaskEdit(data.title);
        setDescTaskEdit(data.description);
        setStatusTaskEdit(data.situation);
      })();
    }
  }, [idSelectedTaskEdit, isModalEditTaskOpen]);

  async function handleResetTaskEdit(event: FormEvent) {
    event.preventDefault();

    setTitleTaskEdit("");
    setDescTaskEdit("");
    setStatusTaskEdit("");

    closeEditModalTask();
  }

  async function handleSubmitTaskEdit(event: FormEvent) {
    event.preventDefault();

    if (titleTaskEdit.trim() === "") {
      toast.error("Houve algum erro com o Título da sua tarefa! 😥");
      return;
    }

    if (descTaskEdit.trim() === "") {
      toast.error("Houve algum erro com a Descrição da sua tarefa! 😥");
      return;
    }

    await api
      .put("/tasks", {
        guid: idSelectedTaskEdit,
        title: titleTaskEdit,
        description: descTaskEdit,
        situation: statusTaskEdit,
      })
      .then((response) => {
        toast.success("Tarefa alterada com sucesso! 🥳");
        router.push("/tasks");
      })
      .catch((error) => {
        toast.error("Ops... Houve algum erro! 😥");
        return;
      });

    setTitleTaskEdit("");
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
        <input type="text" id="inputTitleTask" placeholder="" value={titleTaskEdit} onChange={(event) => setTitleTaskEdit(event.target.value)} />

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
