import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 320,
};

const linkStyles = {
  fontWeight: "bold",
  color: "black",
  fontSize: "4rem",
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p>Sorry, couldn’t find what you were looking for.</p>
      <Link to="/" style={linkStyles}>
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;
