import React from "react";

import Link from "next/link";

import { Container } from "../styles/components/Logo";

const Logo: React.FC = () => {
  return (
    <Container>
      <Link href={"/"} passHref>
        <a title="To.Do app">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.svg" alt="icon-logo" />
          <h1>To.Do app</h1>
        </a>
      </Link>
    </Container>
  );
};

export default Logo;
