import React from "react";
import styled from "styled-components";

const LogoStyles = styled.nav`
  font-family: "PT Serif Caption", serif;
  color: white;
  background-color: var(--black);
  margin: auto;
`;

export default function Logo() {
  return <LogoStyles>ZOE</LogoStyles>;
}
