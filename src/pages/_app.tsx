import React, { useContext } from "react";

import type { AppProps } from "next/app";

import NewTaskModal from "../components/NewTaskModal";
import ButtonMenu from "../components/ButtonMenu";
import Menu from "../components/Menu";
import Logo from "../components/Logo";

import MenuContextProvider, { MenuContext } from "../contexts/contextMenuToggle";

import { Container, Content } from "../styles/pages/_app";
import GlobalStyle from "../styles/global";
import EditTaskModal from "../components/EditTaskModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Container>
        <NewTaskModal />
        <EditTaskModal />
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
