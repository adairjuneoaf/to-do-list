import styled from "styled-components";

export const Container = styled.section`
  width: 92vw;
  height: auto;

  margin: 0 auto;

  padding: 16px 0rem;
  @media only screen and (min-width: 1200px) {
    width: calc(92vw - 196px);
    margin-right: 3rem;
  }
`;

export const Content = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media only screen and (min-width: 1200px) {
    width: calc(92vw - 196px);
    margin-right: 3rem;
  }
`;
