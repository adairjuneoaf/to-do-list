import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import toast from "react-hot-toast";

import { FiMoreVertical, FiCheck, FiActivity, FiEdit, FiTrash } from "react-icons/fi";

import { GenericContext } from "../contexts/contextGenericApp";
import { api } from "../services/axios";

import { Container } from "../styles/components/CardTask";

interface CardTaskProps {
  guid: string;
  refId: string;
  title: string;
  situation: string;
  description: string;
}

const CardTask: React.FC<CardTaskProps> = ({ title, description, situation, guid }) => {
  const { openEditModalTask } = useContext(GenericContext);
  const [showMenu, setShowMenu] = useState<boolean>();

  const router = useRouter();

  async function handleDeleteTask(id: string) {
    await api
      .delete(`/tasks/${id}`)
      .then((response) => {
        toast.success("Tarefa excluida com sucesso! ❌");
        router.push("/tasks");
      })
      .catch((error) => {
        toast.error("Ops... Houve algum erro! 😥");
        return;
      });
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
