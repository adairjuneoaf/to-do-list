import styled from "styled-components";

export const Container = styled.div`
  flex: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: fit-content;
    height: fit-content;

    img {
      width: 30px;
      height: auto;
    }

    h1 {
      font-size: 1.125rem;
      color: var(--black);
    }
  }
`;
