import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: auto;

  margin: 0 auto;

  margin-top: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray-100);
  //opacity: 0.5;

  .iconSuggestPath {
    font-size: 24px;
    color: var(--gray-100);
    //opacity: 0.5;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;

    .iconChevron {
      font-size: 18px;
      color: var(--gray-100);
    }
    font-size: 1rem;
    font-weight: 300;
  }
`;
