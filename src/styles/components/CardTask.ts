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
    position: relative;

    .activeTooltipMenuOptions {
      display: block;
      visibility: visible;

      transition: all 0.3s;
      opacity: 1;
    }

    .inactiveTooltipMenuOptions {
      display: none;
      visibility: hidden;

      transition: all 0.3s;
      opacity: 0;
    }

    .optionsMenu {
      position: absolute;
      min-width: 120px;
      height: auto;

      padding: 0.5rem;

      background: var(--white);

      border-radius: 6px 0 6px 6px;

      top: 0;
      left: -131px;

      display: flex;
      align-items: flex-start;
      flex-direction: column;

      gap: 0.25rem;

      box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.1);

      a {
        width: 100%;

        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;

        gap: 0.25rem;

        font-size: 0.75rem;

        padding: 0.5rem;
        border-radius: 4px;

        background: var(--white);
        color: var(--black);

        transition: background-color 0.3s;

        &:hover {
          background: var(--blue-300);
        }

        .iconOption {
          font-size: 14px;
        }
      }

      &::after {
        content: "";
        width: 9px;
        height: 25px;
        background: var(--white);

        position: absolute;

        right: -8.5px;
        top: -0.5px;

        clip-path: polygon(100% 50%, 0 0, 0 100%);
      }
    }
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
