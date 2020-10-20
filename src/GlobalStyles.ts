import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Piazzolla:ital,wght@0,600;0,700;1,500;1,600;1,700&display=swap');

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
  font-family: 'Piazzolla', Arial, Helvetica, sans-serif;
  font-size: 14px;
}
`
