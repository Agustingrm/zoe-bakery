import styled from "styled-components";

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  fieldset {
    grid-column: span 2;
    max-height: 500px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    &.order,
    &.menu {
      grid-column: span 1;
      padding-bottom: 3rem;
    }
  }
  button[type="submit"] {
    font-size: 2.5rem;
    width: 15rem;
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
