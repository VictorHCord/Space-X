import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

html, body , #root{
  min-height: 100%;
}

body, input, button{
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 14px;
}
`;
