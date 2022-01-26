import React from "react";
import styled from "styled-components";
import font from "../assets/fonts/PTSerifCaption.ttf";

const LogoStyles = styled.nav`
  @font-face {
    font-family: PTSerifCaption;
    src: url(${font});
  }
  font-family: PTSerifCaption;
  color: white;
  background-color: black;
  margin: auto;
`;

export default function Logo() {
  return <LogoStyles>ZOE</LogoStyles>;
}
