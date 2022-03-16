import { NextPage } from "next";

import React from "react";

import Head from "next/head";

import { FiLinkedin, FiGithub } from "react-icons/fi";

import { Container } from "../../styles/pages/about";

const PageAbout: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sobre o app | Adair Juneo</title>
      </Head>
      <Container>
        <div className="links">
          <p>
            Programado com <span title="CAFÉ!!!">☕</span> por{" "}
            <a href="https://portfolio-adairjuneo.vercel.app/" target="_blank" rel="noreferrer">
              Adair Juneo
            </a>
          </p>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/adair-juneo-74322a216/" target="_blank" rel="noreferrer">
              <FiLinkedin className="iconSocialMedia" />
            </a>
            <a href="https://github.com/adairjuneoaf" target="_blank" rel="noreferrer">
              <FiGithub className="iconSocialMedia" />
            </a>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default PageAbout;
