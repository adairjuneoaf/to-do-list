import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 160px;

  border-radius: 10px;
  padding: 18px 24px;

  background: var(--blue-300);
  color: (--white);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 18px;

  .menuTask {
    flex: 1;
  }

  .menuContentTask {
    width: 100%;

    flex: 100;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    .contentTask {
      flex: 100;

      h2 {
        color: var(--white);
        margin-bottom: 0.5rem;
      }

      p {
        font-weight: 400;
        color: var(--white);
      }
    }

    .menuTask {
      flex: 1;

      button {
        width: fit-content;
        height: fit-content;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.25rem 0;

        font-size: 0;
        border: 0;
        border-radius: 3px;

        background: transparent;

        transition: background-color 0.3s;

        &:hover {
          background: var(--blue-600);
        }

        .iconMenuOptions {
          font-size: 18px;
          color: var(--white);
        }
      }
    }
  }

  .footerTask {
    flex: 1;

    div {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      gap: 0.25rem;

      padding: 6px;

      color: var(--black);
      background: var(--white);

      border: 0;
      border-radius: 4px;

      font-size: 1rem;

      cursor: default;

      .iconStatusTask {
        font-size: 16px;
        color: var(--black);
      }
    }
  }
`;
