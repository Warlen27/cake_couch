import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
    height: 100%;
    font-family: 'Encode Sans Expanded', sans-serif;
    background-color: #E7E7E7;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end; 
    justify-content: center;
    overflow: hidden;
    padding: 0px 1%;

  }
  *, button, input {
    border: 0;
    outline: 0;
  }

  button {
      cursor: pointer;
      background-color: transparent;
  }




`;