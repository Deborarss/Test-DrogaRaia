import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    @media screen and (max-width: 480px) {
      margin: 0;
    }
  }

  html, body, #root {
    height: 100%;
    margin: 0;
  }

  body {
    color: #fff;
    color:#868686;
    font-weight: 300;
    text-shadow:1px 1px 0px #fff;
    line-height: 1.2222222222em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', Helvetica, sans-serif, Arial;
    font-size: 18px;
  }

  h1, h2 {
    color:#007f56;
    font-weight: 800;
    font-size: 3.3333333333em;
    line-height: 1em;
    letter-spacing: -0.05em;

    @media screen and (max-width: 480px) {
      font-size: 1.4444444444em;
      letter-spacing: -0.0769230769230769em;
      color: #9C8CB9;
      margin-bottom: 15px;
    }
  }

  h3 {
    font-size: 1.7777777778em;
    font-weight: 400;
    letter-spacing: -0.0625em;
    line-height: 1.1875em;

    @media screen and (max-width: 480px) {
      font-size: 0.7777777778em;
    }
  }

  p {
    font-weight: 300;
    letter-spacing: -0.05555555556em;

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
