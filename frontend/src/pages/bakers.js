import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

const BakerGrid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  box-sizing: content-box;
  padding: 0 4rem;
  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const BakerStyles = styled.div`
  a {
    text-decoration: none;
  }
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    z-index: 2;
    position: relative;
  }
  .description {
    background: var(--black);
    color: var(--white);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    text-align: center;
  }
  .mark {
    padding: 6px 10px 0px;
  }
  @media (max-width: 500px) {
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
`;

export default function BakersPage({ data, pageContext }) {
  const baker = data.bakers.nodes;
  return (
    <>
      <SEO title={`Bakers - Page ${pageContext.currentPage || 1}`} />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.bakers.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/bakers"
      />
      <BakerGrid>
        {baker.map((person) => (
          <BakerStyles key={person.id}>
            <Link to={`/bakers/${person.slug.current}`}>
              <h2>
                <span className="mark">{person.name}</span>
              </h2>
            </Link>
            <GatsbyImage image={getImage(person.image.asset)} alt={person.name} />
            <p className="description">{person.description}</p>
          </BakerStyles>
        ))}
      </BakerGrid>
    </>
  );
}

export const query = graphql`
  query ($skip: Int = 0, $pageSize: Int = 2) {
    bakers: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;
