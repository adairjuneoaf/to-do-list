import React from "react";

import { FiMoreVertical, FiCheck, FiActivity } from "react-icons/fi";

import { Container } from "../../styles/components/CardTask";

const CardTask: React.FC = () => {
  let statusTask: boolean = true;

  return (
    <Container>
      <div className="menuContentTask">
        <div className="contentTask">
          <h2>Title Task</h2>
          <p>Description task card.</p>
        </div>

        <div className="menuTask">
          <button type="button">
            <FiMoreVertical className="iconMenuOptions" />
          </button>
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
