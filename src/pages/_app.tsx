import React from "react";

import type { AppProps } from "next/app";

import ButtonMenu from "./components/ButtonMenu";
import Menu from "./components/Menu";
import Logo from "./components/Logo";

import MenuContextProvider from "../contexts/contextMenuToggle";

import { Container, Content } from "../styles/pages/_app";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Container>
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
