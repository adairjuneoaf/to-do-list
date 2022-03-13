import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

import { BiTask } from "react-icons/bi";
import { FiInfo, FiUser, FiX } from "react-icons/fi";

import { MenuContext } from "../../contexts/contextMenuToggle";

import { Content } from "../../styles/components/Menu";

const Menu: React.FC = () => {
  const { closeSideBarMenu, isOpenMenu } = useContext(MenuContext);

  const { route } = useRouter();

  return (
    <Content className={`${isOpenMenu ? "activeMenu" : ""}`}>
      <button type="button" className="closeMenu" onClick={closeSideBarMenu} title="Fechar o menu lateral">
        <FiX className="iconButtonCloseMenu" />
      </button>

      <section className="userProfile">
        <FiUser className="avatarUser" />
        <div className="infoUser">
          <h3>Adair Juneo</h3>
          <p>Desenvolvedor</p>
        </div>
      </section>

      <div className="divider"></div>

      <section className="menuOptions">
        <Link href={"/tasks"} passHref>
          <button type="button" title="Tarefas" className={route === "/tasks" ? "activeRoute" : ""}>
            <BiTask className="iconOptionsMenu" />
            <p>Tarefas</p>
          </button>
        </Link>
        <Link href={"/about"} passHref>
          <button type="button" title="Sobre" className={route === "/about" ? "activeRoute" : ""}>
            <FiInfo className="iconOptionsMenu" />
            <p>Sobre</p>
          </button>
        </Link>
      </section>
    </Content>
  );
};

export default Menu;
