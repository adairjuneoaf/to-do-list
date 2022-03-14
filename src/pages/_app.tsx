import React, { useContext } from "react";

import type { AppProps } from "next/app";

import ButtonMenu from "../components/ButtonMenu";
import Menu from "../components/Menu";
import Logo from "../components/Logo";

import MenuContextProvider, { MenuContext } from "../contexts/contextMenuToggle";

import { Container, Content } from "../styles/pages/_app";
import GlobalStyle from "../styles/global";
import NewTaskModal from "../components/NewTaskModal";

function MyApp({ Component, pageProps }: AppProps) {
  const { isModalTaskOpen } = useContext(MenuContext);

  return (
    <MenuContextProvider>
      <Container>
        <NewTaskModal isOpen={isModalTaskOpen} type={"newTask"} />
        <Content>
          <ButtonMenu />
          <Logo />
        </Content>
        <Component {...pageProps} />
        <Menu />
      </Container>
      <GlobalStyle />
    </MenuContextProvider>
  );
}

export default MyApp;
