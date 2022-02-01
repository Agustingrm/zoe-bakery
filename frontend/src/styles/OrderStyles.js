import styled from "styled-components";

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  z-index: 2;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    &.order,
    &.menu {
      height: calc(100% - 2rem);
      grid-column: span 1;
    }
  }
  .total {
    p {
      margin: 0;
    }
    h3 {
      font-size: 4rem;
    }
  }
  button[type="submit"] {
    font-size: 2.5rem;
  }
  .error {
    color: var(--red);
    margin: 2px 0;
    font-size: 2.5rem;
  }
  .marshmallow {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export default OrderStyles;
