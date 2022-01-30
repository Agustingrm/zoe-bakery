import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import SEO from "../components/SEO";

const CakeGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: auto;
  ul {
    margin: 0;
  }
  h3 {
    margin-top: 10px;
    font-size: 3rem;
  }
  li {
    font-size: 2.5rem;
    list-style-type: " • ";
  }
`;

export default function SingleCakePage({ data: { cake } }) {
  const image = getImage(cake.image.asset);
  return (
    <>
      <SEO title={cake.name} image={cake.image?.asset?.gatsbyImageData.images?.fallback?.src} />
      <CakeGrid>
        <GatsbyImage image={image} alt={cake.name} />
        <div>
          <h2 className="mark">{cake.name}</h2>
          <h3>Ingredients:</h3>
          <ul>
            {cake.ingredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      </CakeGrid>
    </>
  );
}

// Query based on slug
export const query = graphql`
  query ($slug: String!) {
    cake: sanityCake(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          gatsbyImageData(width: 800)
        }
      }
      ingredients {
        name
        id
        celiac
        lactose
      }
    }
  }
`;
