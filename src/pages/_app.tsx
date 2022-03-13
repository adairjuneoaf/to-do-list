import React from "react";

import type { AppProps } from "next/app";

import ButtonMenu from "./components/ButtonMenu";
import Menu from "./components/Menu";
import Logo from "./components/Logo";

import MenuContextProvider from "../contexts/contextMenuToggle";

import { Container } from "../styles/pages/_app";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Container>
        <section className="topPage">
          <ButtonMenu />
          <Logo />
        </section>
        <Menu />
        <Component {...pageProps} />
      </Container>
      <GlobalStyle />
    </MenuContextProvider>
  );
}

export default MyApp;
