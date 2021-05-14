import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --navbar-bg-color: rgb(2, 11, 48);
    --navbar-color: white;
    --navbar-option-color: rgb(255,255,255,.17);
    --accent-color:rgb(181, 106, 0);
    --primary-bg-color: rgb(229, 229, 229);
}

html,
body,
div,
span {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: "Kepler Std",sans-serif
}


`;
