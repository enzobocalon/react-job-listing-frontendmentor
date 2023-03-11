import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    width: 100%;
    font-family: 'League Spartan', sans-serif;
    font-size: 15px;
    background-color: ${({ theme }) => theme.neutral.grayishCyanBackground};
  }

  button, a {
    font-family: inherit;
  }
`;
