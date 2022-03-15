import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

:root{
  --white: #FFFFFF;
  --black: #121214;

  --gray-100: #CCCCCC;
  --gray-200: #rgba(0, 0, 0, 0.1);
  --gray-400: #737373;

  --blue-300: #418CFF;
  --blue-600: #0C3B79; 

  --blue-gradient: linear-gradient(90deg, #67A3FF 0%, #418CFF 100%);
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--white);
    color: var(--black);
    -webkit-font-smoothing: antialiased;
    
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--gray-200);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-400);
  }

  /* &::-webkit-scrollbar-thumb:hover {
    
  } */
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
}

p{
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.3125rem;
}

a{
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Roboto', sans-serif;
    font-size: 1.3125rem;
    font-weight: 700;
    line-height: 1.3125rem;
    color: var(--gray-100);
}

button {
    cursor: pointer;
}

span.highlightInformation{
    color: var(--blue-300);
}

.icon{
    font-size: 16px;
    color: var(--black);
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 368px;
    background: var(--white);
    padding: 25px;
    position: relative;
    border-radius: 10px;
  }

  .buttonCloseModal{
    width: fit-content;
    height: fit-content;

    position: absolute;
    right: 12px;
    top: 12px;

    border: 0;
    border-radius: 4px;

    padding: 2px;

    background: transparent;
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0;
    
    transition: background-color 0.3s;
    
    &:hover{
    background: var(--gray-100);
    }

    .iconCloseModal{
        font-size: 1.5rem;
    }
  }

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

.toastsAlerts{
  width: fit-content;
  height: auto;

  cursor: default;

  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;

  color: var(--black);
}
`;
