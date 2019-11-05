import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Components
import SearchBar from "components/layout/SearchBar";

const Header = styled.h1`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media (min-width: $tablet) {
    font-size: 32px;
  }
`;

const SearchResultsTable = styled.table`
  /* margin-top: 25px; */
  background: ${props => props.theme.global.background};
  color: ${props => props.theme.global.textColor};
  margin: 25px auto 0;
  font-size: 20px;
`;

const SearchBarWrapper = styled.div`
  margin-top: 50px;
`;

export default function Search() {
  const location = useLocation();

  if (location.state.length === 0) {
    return (
      <>
        <Header>We couldn't find what you were looking for</Header>
        <h2>Please try searching again</h2>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
      </>
    );
  }

  const results = location.state.map((result, index) => (
    <tr key={index}>
      <td>{result.type}:</td>
      <td>
        <Link to={result.url}>{result.url}</Link>
      </td>
    </tr>
  ));

  return (
    <>
      <Header>We found multiple resources matching your search</Header>
      <SearchResultsTable className="table">
        <tbody>{results}</tbody>
      </SearchResultsTable>
    </>
  );
}
