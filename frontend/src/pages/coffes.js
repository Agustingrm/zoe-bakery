import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const CoffeGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto auto 1fr;
  margin-top: 2rem;
  padding: 10px;
  h3 {
    font-size: 3rem;
  }
  p {
    margin: 3px 0;
  }
  span {
    text-decoration: underline;
    text-decoration-thickness: 0.1rem;
  }
`;

const SingleCoffeGrid = styled.div`
  display: grid;
  grid-template-rows: 3rem 5rem 1fr;
`;

export default function CoffesPage({ data }) {
  return (
    <>
      <h2 className="center">
        While you wait for your order, you can take one of our {data.coffes.nodes.length} Coffes Available
      </h2>
      <CoffeGridStyles>
        {data.coffes.nodes.map((coffe) => {
          if (coffe.description !== "") {
            return (
              <SingleCoffeGrid key={coffe.id}>
                <h3>{coffe.title}</h3>
                <p>
                  <span>Ingredients</span>: {coffe.ingredients.join(", ")}
                </p>
                <p>{coffe.description}</p>
              </SingleCoffeGrid>
            );
          }
        })}
      </CoffeGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    coffes: allCoffe {
      nodes {
        id
        title
        description
        ingredients
      }
    }
  }
`;
