import React, { useContext } from "react";

import { FiMenu } from "react-icons/fi";
import { MenuContext } from "../../contexts/contextMenuToggle";

import { Content } from "../../styles/components/ButtonMenu";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonMenu: React.FC<ButtonProps> = ({ ...props }) => {
  const { openSideBarMenu } = useContext(MenuContext);

  return (
    <Content type="button" onClick={openSideBarMenu} {...props} title="Menu">
      <FiMenu className="iconButtonMenu" />
    </Content>
  );
};

export default ButtonMenu;
