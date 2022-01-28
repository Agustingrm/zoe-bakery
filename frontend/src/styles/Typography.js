import { createGlobalStyle } from "styled-components";
// import lightFont from "../assets/fonts/DongleLight.ttf";
// import regularFont from "../assets/fonts/DongleRegular.ttf";

const Typography = createGlobalStyle`
  html {
    font-family: Dongle, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-weight: 400;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    font-family: Dongle, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    color: var(--white);
    text-decoration-color: var(--deepPurple);

  }
  mark, .mark {
    color: var(--white);
    background: var(--black);
    padding: 0px 10px 2px 10px;
    margin: 0;
    display: inline;
    line-height: normal;
  }

  .center {
    text-align: center;
  }

`;

export default Typography;
