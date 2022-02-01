import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import styled from "styled-components";

const SiteBorderStyles = styled.div`
  max-width: 1100px;
  margin: 1rem auto 1rem auto;
  padding: 5px 20px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: 800px) {
    margin: 0 auto;
  }
  @media (max-width: 360px) {
    padding: 5px 0;
  }
`;

const ContentStyles = styled.div`
  background: white;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </div>
  );
}
