import styled from "styled-components";

const PreorderItemStyles = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  align-content: center;
  align-items: center;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
    width: 100%;
  }
  p {
    margin: 0;
  }
  button {
    font-size: 2rem;
  }
  button + button {
    margin-left: 1rem;
  }
  .remove {
    background: none;
    color: var(--deepPurple);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
`;

export default PreorderItemStyles;
