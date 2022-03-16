import React, { useContext } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { BiTask } from "react-icons/bi";
import { FiInfo, FiUser, FiX } from "react-icons/fi";

import { GenericContext } from "../contexts/contextGenericApp";

import { Content } from "../styles/components/Menu";

const Menu: React.FC = () => {
  const { closeSideBarMenu, isOpenMenu } = useContext(GenericContext);

  const { route } = useRouter();

  return (
    <Content className={`${isOpenMenu ? "activeMenu" : "inactiveMenu"}`}>
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

      <nav className="menuOptions">
        <ul>
          <Link href={"/tasks"} passHref>
            <li className={route === "/tasks" ? "activeRoute" : ""}>
              <button type="button" title="Tarefas">
                <BiTask className="iconOptionsMenu" />
              </button>
              Tarefas
            </li>
          </Link>
          <Link href={"/about"} passHref>
            <li className={route === "/about" ? "activeRoute" : ""}>
              <button type="button" title="Sobre">
                <FiInfo className="iconOptionsMenu" />
              </button>
              Sobre
            </li>
          </Link>
        </ul>
      </nav>
    </Content>
  );
};

export default Menu;
