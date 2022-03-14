import Link from "next/link";
import React, { useState } from "react";

import { FiMoreVertical, FiCheck, FiActivity, FiEdit, FiTrash } from "react-icons/fi";

import { Container } from "../../styles/components/CardTask";

const CardTask: React.FC = () => {
  let statusTask: boolean = true;

  const [showMenu, setShowMenu] = useState<boolean>();

  return (
    <Container>
      <div className="menuContentTask">
        <div className="contentTask">
          <h2>Title Task</h2>
          <p>Description task card.</p>
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
          <div
            className={`optionsMenu ${showMenu ? "activeTooltipMenuOptions" : "inactiveTooltipMenuOptions"}`}
            onMouseEnter={() => {
              setShowMenu(true);
            }}
            onMouseLeave={() => {
              setShowMenu(false);
            }}
          >
            <Link href={"/"}>
              <a
                title="Option"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <FiEdit className="iconOption" />
                Atualizar tarefa
              </a>
            </Link>
            <Link href={"/about"}>
              <a
                title="Option"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <FiTrash className="iconOption" />
                Excluir tarefa
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="footerTask">
        <div title="Status da tarefa">
          {statusTask ? (
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
