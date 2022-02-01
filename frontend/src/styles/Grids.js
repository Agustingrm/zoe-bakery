import styled from "styled-components";

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  p {
    font-size: 2.5rem;
  }
  @media (max-width: 800px) {
    --columns: 1;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

// HomePage grids
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  img {
    height: auto;
    // inline element have a ghost space
    font-size: 0;
  }
  p {
    font-size: 3rem;
    transform: translateY(-10px);
    position: absolute;
    width: 100%;
    left: 0;
    margin: 0;
  }
  .mark {
    display: inline;
  }
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }
  img.loading {
    --shine: white;
    --background: var(--gray);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }
  @media (max-width: 475px) {
    p {
      font-size: 2rem;
    }
  }
`;
