import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const CakeGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 400px;
`;

const CakeStyles = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
  a {
    text-decoration-thickness: 2px;
  }
`;

function SingleCake({ cake }) {
  const image = getImage(cake.image.asset);
  return (
    <CakeStyles>
      <Link to={`/cake/${cake.slug.current}`}>
        <h2>
          <span className="mark">{cake.name}</span>
        </h2>
      </Link>
      <p>{cake.ingredients.map((ingredient) => ingredient.name).join(", ")}</p>
      <GatsbyImage image={image} alt={cake.name} />
    </CakeStyles>
  );
}

export default function CakeList({ cakes }) {
  let orderedCake = cakes.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return (
    <CakeGridStyles>
      {orderedCake.map((cake) => (
        <SingleCake key={cake.id} cake={cake} />
      ))}
    </CakeGridStyles>
  );
}
