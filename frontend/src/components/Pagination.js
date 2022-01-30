import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const PaginationStyles = styled.div`
  max-width: 500px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  border: 1px solid var(--gray);
  margin: 2rem auto;
  border-radius: 5px;
  text-align: center;
  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--gray);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--deepPurple);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--gray);
    }
  }
  & > :last-child {
    border-right: 0;
  }
  a {
    color: var(--black);
  }
`;

export default function Pagination({ pageSize, totalCount, currentPage, skip, base }) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <PaginationStyles>
      <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
        ← Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? "current" : ""}
          to={`${base}/${i > 0 ? i + 1 : ""}`}
          key={`page${i}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
        Next →
      </Link>
    </PaginationStyles>
  );
}
