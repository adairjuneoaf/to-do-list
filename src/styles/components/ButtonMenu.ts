import styled from "styled-components";

export const Content = styled.button`
  width: fit-content;
  height: fit-content;

  border: 0;
  font-size: 0;
  border-radius: 0;
  background: transparent;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  .iconButtonMenu {
    font-size: 2rem;
    color: var(--black);

    transition: color 0.3s;

    &:hover {
      color: var(--blue-300);
    }
  }

  @media only screen and (min-width: 1200px) {
    display: none;
    opacity: 0;
  }
`;
