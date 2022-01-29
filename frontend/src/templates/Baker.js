import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const BakerPageStyles = styled.div`
  max-width: 1000px;
  margin: auto;
  h2 {
    font-size: 5rem;
    z-index: 2;
    position: relative;
    top: -50px;
  }
  p {
    position: relative;
    top: -50px;
    font-size: 2.5rem;
  }
`;

export default function BakerPage({ data: { person } }) {
  const image = getImage(person.image.asset);
  return (
    <BakerPageStyles className="center">
      <GatsbyImage image={image} alt={person.name} />
      <h2>
        <span className="mark">{person.name}</span>
      </h2>
      <p>{person.description}</p>
    </BakerPageStyles>
  );
}

export const query = graphql`
  query ($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          gatsbyImageData(width: 1000)
        }
      }
    }
  }
`;
