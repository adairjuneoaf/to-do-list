import React, { useContext, useState } from "react";

import { useMutation, useQueryClient } from "react-query";

import { removeTaskOnTheList } from "../services/api";

import { FiMoreVertical, FiCheck, FiActivity, FiEdit, FiTrash } from "react-icons/fi";

import { GenericContext } from "../contexts/contextGenericApp";

import { Container } from "../styles/components/CardTask";

interface CardTaskProps {
  guid: string;
  title: string;
  situation: string;
  description: string;
}

const CardTask: React.FC<CardTaskProps> = ({ title, description, situation, guid }) => {
  const { openEditModalTask } = useContext(GenericContext);
  const [showMenu, setShowMenu] = useState<boolean>();

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(removeTaskOnTheList);

  async function handleDeleteTask(guid: string) {
    await mutateAsync(guid);
    queryClient.invalidateQueries("tasks");
  }

  return (
    <Container>
      <div className="menuAndContentTask">
        <div className="contentTask">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="menuTask">
          <button
            type="button"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            title="Menu de ações"
          >
            <FiMoreVertical className="iconMenuOptions" />
          </button>
          <nav
            className={`optionsMenu ${showMenu ? "activeTooltipMenuOptions" : "inactiveTooltipMenuOptions"}`}
            onMouseEnter={() => {
              setShowMenu(true);
            }}
            onMouseLeave={() => {
              setShowMenu(false);
            }}
          >
            <button
              title="Atualizar a tarefa"
              className="buttonOption"
              onClick={() => {
                setShowMenu(false);
                openEditModalTask(guid);
              }}
            >
              <FiEdit className="iconOption" />
              <p>Atualizar tarefa</p>
            </button>

            <button
              title="Excluir a tarefa"
              className="buttonOption"
              onClick={() => {
                setShowMenu(false);
                handleDeleteTask(guid);
              }}
            >
              <FiTrash className="iconOption" />
              <p>Excluir tarefa</p>
            </button>
          </nav>
        </div>
      </div>

      <div className="footerTask">
        <div title="Status da tarefa">
          {situation === "completed" ? (
            <React.Fragment>
              <FiCheck className="iconStatusTask" /> Concluída
            </React.Fragment>
          ) : (
            <React.Fragment>
              <FiActivity className="iconStatusTask" />
              Em progresso
            </React.Fragment>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CardTask;
