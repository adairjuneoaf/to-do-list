import styled from "styled-components";

export const Container = styled.section`
  .headerFormNewTask {
    h2 {
      font-size: 1.5rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;

      color: var(--black);
    }
  }
`;

export const FormNewTask = styled.form`
  margin-top: 24px;

  input,
  textarea {
    position: relative;
    width: 100%;
    height: 48px;

    margin-bottom: 14px;

    padding: 8px 16px;

    font-size: 1rem;
    font-weight: 400;

    border-radius: 8px;
    border: 1px solid var(--gray-100);
  }

  textarea {
    resize: vertical;
    padding: 16px;

    min-height: 5rem;
  }

  label {
    display: flex;
    flex-direction: column;

    width: fit-content;
    height: fit-content;

    padding: 0px 3px;

    z-index: 1000;

    position: absolute;

    color: var(--black);
    background: var(--white);

    &.labelTitle {
      margin-top: -6px;
      margin-left: 14px;
    }
    &.labelDescription {
      margin-top: -6px;
      margin-left: 14px;
    }
  }

  .buttonsActionForm {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    gap: 12px;

    margin-top: 12px;

    button {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      border: 0;
      padding: 8px 12px;

      border-radius: 4px;

      font-size: 1rem;

      color: var(--blue-300);
      background: transparent;

      transition: background-color 0.3s;

      &:hover {
        background: var(--gray-100);
      }
    }
  }
`;
