import styled from "styled-components";

export const Content = styled.aside`
  width: 196px;
  height: 100vh;

  padding: 2rem 1rem;

  top: 0;
  left: 0;

  background: linear-gradient(120deg, #67a3ff 0%, #418cff 100%);

  position: absolute;

  display: none;
  visibility: hidden;

  .closeMenu {
    position: absolute;

    z-index: 1000;
    width: fit-content;
    height: fit-content;

    top: 0.875rem;
    right: 0.875rem;

    border: 0;
    border-radius: 4px;
    font-size: 0;

    display: flex;
    align-items: center;

    background: transparent;

    transition: background-color 0.2s;

    &:hover {
      background: var(--blue-300);
    }

    .iconButtonCloseMenu {
      font-size: 24px;
      color: var(--white);
    }
  }

  .userProfile {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    gap: 1rem;

    .avatarUser {
      color: var(--white);
      font-size: 24px;
    }

    .infoUser {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 0.25rem;

      h3,
      p {
        color: var(--white);
        font-size: 0.875rem;
      }
    }
  }

  .divider {
    width: 100%;
    height: 1px;

    background: var(--white);

    margin: 2rem 0;
  }

  .menuOptions {
    display: flex;
    flex-direction: column;
    //justify-content: flex-start;

    gap: 0.5rem;

    button {
      width: 100%;
      height: 40px;

      border: 0;
      border-radius: 10px;

      font-size: 0;

      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;

      gap: 1rem;
      padding: 1rem;

      background: transparent;

      transition: background-color 0.2s;

      &:hover {
        background: var(--blue-300);
      }

      .iconOptionsMenu {
        font-size: 24px;
        color: var(--white);
      }

      p {
        font-size: 0.875rem;
        color: var(--white);
      }
    }

    .activeRoute {
      background: var(--blue-300);
    }
  }
`;
