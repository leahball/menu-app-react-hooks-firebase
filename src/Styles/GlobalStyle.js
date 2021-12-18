import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif; 
    margin: 4%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    justify-content: space-between;
    }
    nav {
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
  h1, h2, h3 {
    font-family: 'Raleway', sans-serif;
  }
`;
