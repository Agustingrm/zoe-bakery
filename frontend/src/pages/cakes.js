import React from "react";
import { graphql } from "gatsby";
import CakeList from "../components/CakeList";
import IngredientsFilter from "../components/IngredientsFilter";
import SEO from "../components/SEO";

export default function CakesPage({ data, pageContext }) {
  const cakes = data.cakes.nodes;
  return (
    <>
      <SEO title={pageContext.ingredient ? `Cakes With ${pageContext.ingredient}` : `All Cakes`} />
      <IngredientsFilter />
      <CakeList cakes={cakes} />
    </>
  );
}

export const query = graphql`
  query CakeQuery($ingredient: [String]) {
    cakes: allSanityCake(filter: { ingredients: { elemMatch: { name: { in: $ingredient } } } }) {
      nodes {
        name
        id
        slug {
          current
        }
        ingredients {
          id
          name
        }
        image {
          asset {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }
`;
