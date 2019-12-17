import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// Containers
import SearchBar from "containers/SearchBar";

const Header = styled.h1`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SearchResultsTable = styled.table`
  margin: 25px auto 0;
  font-size: 20px;
`;

const SearchBarWrapper = styled.div`
  margin-top: 50px;
`;

export default function Search() {
  const location = useLocation();
  const { t } = useTranslation();

  if (location.state.length === 0) {
    return (
      <>
        <Header>{t("search.header")}</Header>
        <h2>{t("search.subheader")}</h2>
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
      <Header>{t("search.multiple_results")}</Header>
      <SearchResultsTable className="table">
        <tbody>{results}</tbody>
      </SearchResultsTable>
    </>
  );
}
