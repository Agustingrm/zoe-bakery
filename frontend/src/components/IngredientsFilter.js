import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const IngredientsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    font-family: Dongle;
    font-weight: 400;
    color: black;
    font-size: 2.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--gray);
    border-radius: 2px;
    text-decoration: none;
    .count {
      height: 80%;
      background: white;
      padding: 0px 5px;
      text-decoration-color: none;
    }
    .name {
      height: 80%;
    }
    &[aria-current="page"] {
      background: var(--tigerOrange);
    }
  }
  @media (max-width: 500px) {
    gap: 0.5rem;
    a {
      font-size: 2rem;
    }
  }
`;

function amountOfCakesInIngredients(cakes) {
  // Return the cakes with counts
  const counts = cakes
    .map((cake) => cake.ingredients)
    .flat()
    .reduce((acc, ingredient) => {
      // This ingredient exists?
      const existingIngredient = acc[ingredient.id];
      if (existingIngredient) {
        //  Exists? Then increment by 1
        existingIngredient.count += 1;
      } else {
        // Doesnt exists? Place it in the object
        acc[ingredient.id] = {
          id: ingredient.id,
          name: ingredient.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  const sortedIngredients = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedIngredients;
}

export default function IngredientsFilter() {
  // Lists all cakes with their respective ingredients
  const { cakes } = useStaticQuery(graphql`
    query {
      cakes: allSanityCake {
        nodes {
          ingredients {
            name
            id
          }
        }
      }
    }
  `);
  // Count how many cakes are in each ingredient, and name them. Put them in an Object
  const ingredientsWithCounts = amountOfCakesInIngredients(cakes.nodes);
  return (
    <IngredientsStyles>
      <Link to="/cakes">
        <span className="name">All</span>
        <span className="count">{cakes.nodes.length}</span>
      </Link>
      {ingredientsWithCounts.map((ingredient) => (
        <Link to={`/ingredient/${ingredient.name}`} key={ingredient.id}>
          <span className="name">{ingredient.name}</span>
          <span className="count">{ingredient.count}</span>
        </Link>
      ))}
    </IngredientsStyles>
  );
}
