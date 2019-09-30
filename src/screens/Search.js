import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

//@todo this needs to be fixed, and exported as a component for ALL screens
const Wrapper = styled.div`
  margin: 50px auto 60px;
  text-align: center;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 460px);

  @media (min-width: 1024px) {
    width: 90%;
    max-width: 1216px;
  }
`;

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
  margin: 25px auto 0;
  font-size: 20px;
`;

const TableCell = styled.td`
  color: ${props => props.theme["--text-color-normal"]};
`;

const SearchBarWrapper = styled.div`
  margin-top: 50px;
`;

//@todo we need a content wrapper here.
//@todo probably need to wrap most pages with that.
export default function Search() {
  const location = useLocation();
  console.log(location);

  if (location.state.length === 0) {
    return (
      <Wrapper>
        <Header>We couldn't find what you were looking for</Header>
        <h2>Please try searching again</h2>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
      </Wrapper>
    );
  }

  const results = location.state.map((result, index) => (
    <tr key={index}>
      <TableCell>{result.type}:</TableCell>
      <td>
        <Link to={result.url}>{result.url}</Link>
      </td>
    </tr>
  ));

  return (
    <Wrapper>
      <Header>We found multiple resources matching your search</Header>
      <SearchResultsTable className="table">
        <tbody>{results}</tbody>
      </SearchResultsTable>
    </Wrapper>
  );
}
