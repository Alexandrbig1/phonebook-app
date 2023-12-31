import { createGlobalStyle } from "styled-components";
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

  @media(max-width:980px) {
    font-size: 55%;
  }

  body {
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
  
  h3 {
    margin: 0;
    padding: 0;
  }
  h5 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
