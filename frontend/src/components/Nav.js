import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const NavStyles = styled.nav`
  margin-bottom: 2rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    align-items: center;
  }
  li {
    order: 1;
    &:nth-child(1) {
      grid-column: 1 / 6;
    }
  }
  a {
    font-weight: 400;
    color: var(--black);
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--tigerOrange);
    }
  }
  [aria-current="page"] {
    color: var(--tigerOrange);
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cakes">Cakes</Link>
        </li>
        <li>
          <Link to="/coffes">Coffe</Link>
        </li>
        <li>
          <Link to="/bakers">Bakers</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
