import { createGlobalStyle } from "styled-components";
// import "modern-normalize";
import "modern-normalize/modern-normalize.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  font-family: 'Roboto', sans-serif;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1{
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;
