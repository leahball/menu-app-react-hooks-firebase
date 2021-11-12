import React from "react";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;  
    }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <div>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      </div>
    </>
  );
};
export default App;
