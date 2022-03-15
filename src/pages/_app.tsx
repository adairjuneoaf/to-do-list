import React from "react";

import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";

import EditTaskModal from "../components/EditTaskModal";
import NewTaskModal from "../components/NewTaskModal";
import ButtonMenu from "../components/ButtonMenu";
import Menu from "../components/Menu";
import Logo from "../components/Logo";

import GenericContextProvider from "../contexts/contextGenericApp";

import { Container, Content } from "../styles/pages/_app";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GenericContextProvider>
      <Toaster position="top-right" reverseOrder={false} toastOptions={{ className: "toastAlerts", duration: 2500 }} />
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
    </GenericContextProvider>
  );
}

export default MyApp;
