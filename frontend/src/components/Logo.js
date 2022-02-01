import React from "react";
import styled from "styled-components";

const LogoStyles = styled.nav`
  font-family: "PT Serif Caption", serif;
  color: white;
  background-color: var(--black);
  margin: auto;
  width: calc(100% + 40px);
  transform: translateX(-20px) translateY(-5px);
  @media (max-width: 360px) {
    width: 100%;
    transform: translateX(0) translateY(-5px);
  }
`;

export default function Logo() {
  return <LogoStyles>ZOE</LogoStyles>;
}
