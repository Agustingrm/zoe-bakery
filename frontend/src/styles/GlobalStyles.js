import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --tigerOrange: #FC6A03;
    --darkOrange: #d15700;
    --gray: #aaaaaa;
    --softBlack: #4b4b4b;
    --black: #1a1a1a;
    --yellow: #ffc600;
    --white: #fff;
    
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    max-width: calc(100vw - 6px);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--tigerOrange);
    color: var(--black);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--darkOrange);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--softBlack) var(--white);
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--softBlack) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
