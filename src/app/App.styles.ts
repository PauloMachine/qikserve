import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      scroll-behavior: smooth;

      ::-webkit-scrollbar {
        width: 2px;
      }

      ::-webkit-scrollbar-track {
        background: #000;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #000;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #000;
      }
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    position: relative;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 18.75px;
    overflow-x: hidden;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
