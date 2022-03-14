import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: auto;

  margin-top: 34px;
`;

export const Content = styled.section`
  .inputSearch {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 38px;

    .iconInputSearch {
      position: absolute;

      font-size: 24px;
      color: #000000;
      margin-left: 16px;
    }

    .searchTask {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;

      width: 100%;
      height: auto;

      padding: 14px 14px 14px 48px;
      font-size: 1.125rem;

      font-family: "Montserrat";
      font-weight: 300;

      border: 0;
      border-radius: 10px;
      background: var(--gray-100);

      color: #000000;

      transition: background-color 0.3s;

      &:hover {
        background: var(--gray-400);
      }

      &::placeholder {
        font-size: 1.125rem;
        font-family: "Montserrat";
        font-weight: 300;
        color: #000000;
      }
    }
  }

  h1 {
    font-size: 2rem;
    color: var(--black);

    font-family: "Montserrat";
    font-weight: 600;

    margin-bottom: 18px;
  }
`;

export const Footer = styled.footer`
  position: fixed;

  width: 92vw;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: row;

  justify-content: flex-end;

  background: transparent;

  bottom: 16px;
`;
