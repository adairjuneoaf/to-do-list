import React from "react";

import { RiAddFill } from "react-icons/ri";

import { Content } from "../styles/components/ButtonNewTask";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonNewTask: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Content type="button" {...props} title="Nova tarefa">
      <RiAddFill className="iconNewTask" />
      &nbsp;Nova tarefa
    </Content>
  );
};

export default ButtonNewTask;
