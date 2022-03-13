import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 88vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .links {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 1rem;

    a {
      font-weight: 700;
      color: var(--blue-300);

      transition: color 0.3s;

      &:hover {
        color: var(--blue-600);
      }
    }

    .socialMedia {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 48px;
        height: 48px;

        border-radius: 8px;

        background: var(--blue-300);

        transition: background-color 0.3s;

        &:hover {
          background-color: var(--blue-600);
        }

        .iconSocialMedia {
          font-size: 28px;
          color: var(--white);
        }
      }
    }
  }
`;
