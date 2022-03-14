import styled from "styled-components";

export const Content = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  gap: 4px;

  padding: 0.875rem 1.125rem;

  background: var(--blue-600);
  color: var(--white);

  font-size: 1.125rem;
  font-weight: 500;

  border: 0;
  border-radius: 10px;

  transition: background-color 0.3s;

  &:hover {
    background: var(--blue-300);
  }

  .iconNewTask {
    font-size: 24px;
    color: var(--white);
  }
`;
