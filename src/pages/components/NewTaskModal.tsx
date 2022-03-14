import React, { FormEvent, useContext, useState } from "react";

import Modal from "react-modal";
import { FiX } from "react-icons/fi";

import { MenuContext } from "../../contexts/contextMenuToggle";

import { ButtonsTaskStatus, Container, FormNewTask, StatusOption } from "../../styles/components/NewTaskModal";

interface NewTaskModalProps {
  isOpen: boolean;
  type: "newTask" | "editTask";
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen = false, type }) => {
  const [nameTask, setNameTask] = useState<string>();
  const [descTask, setDescTask] = useState<string>();
  const [statusTask, setStatusTask] = useState<string>("inProgress");

  const { isModalTaskOpen, closeModalTask } = useContext(MenuContext);

  async function handleResetTask(event: FormEvent) {
    event.preventDefault();

    setNameTask("");
    setDescTask("");
    setStatusTask("");

    closeModalTask();
  }

  async function handleSubmitTask(event: FormEvent) {
    event.preventDefault();

    setNameTask("");
    setDescTask("");
    setStatusTask("");

    closeModalTask();
  }

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
        <input type="text" id="inputDescriptionTask" placeholder="" value={descTask} onChange={(event) => setDescTask(event.target.value)} />

        {type === "editTask" && (
          <ButtonsTaskStatus>
            <StatusOption
              isActiveOption={statusTask === "inProgress"}
              onClick={() => {
                setStatusTask("inProgress");
              }}
              type="button"
            >
              <p>Em progreso</p>
            </StatusOption>
            <StatusOption
              isActiveOption={statusTask === "finished"}
              onClick={() => {
                setStatusTask("finished");
              }}
              type="button"
            >
              <p>Concluído</p>
            </StatusOption>
          </ButtonsTaskStatus>
        )}

        <div className="buttonsActionForm">
          <button type="reset">CANCELAR</button>
          <button type="submit">SALVAR</button>
        </div>
      </FormNewTask>
    </Modal>
  );
};

export default NewTaskModal;
