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

  --gray-200: #rgba(0, 0, 0, 0.1);
  --gray-400: #737373;

  --blue-300: #418CFF;
  --blue-600: #0C3B79; 

  --background: linear-gradient(90deg, #67A3FF 0%, #418CFF 100%);
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

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}
`;
