import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import theme from "styled-theming";

import { SearchIcon } from "@urkellabs/ucl";

const IconWrapper = styled.span`
  left: 0;
  height: 2.25em;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 2.25em;
  z-index: 4;
  align-items: center;
  display: inline-flex;
  justify-content: center;
`;

const Icon = styled(SearchIcon)`
  height: 1rem;
  width: 1rem;
  fill: #dbdbdb;
`;

const SearchWrapper = styled.form`
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
`;

const background = theme("mode", {
  light: "#fff",
  dark: "#575757"
});

const borderColor = theme("mode", {
  light: "#e7e7e7",
  dark: "#444"
});

const textColor = theme("mode", {
  light: "#4a4a4a",
  dark: "#afafaf"
});

const lightTextColor = theme("mode", {
  light: "#dbdbdb",
  dark: "#969696"
});

const SearchInput = styled.input`
  width: 350px;
  border-width: 1.25px;
  padding-left: 55px;
  -webkit-appearance: none;

  // Bulma Style Overrides
  background: ${background};
  border: 1px solid ${borderColor};
  color: ${textColor};

  //Bulma helper
  border-radius: 290486px;
  padding-right: 1em;

  //Bulma
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  align-items: center;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;

  &:focus {
    box-shadow: none !important;
  }
  &::placeholder {
    color: ${lightTextColor};
  }
`;

const SearchBar = props => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const { t } = useTranslation();

  //Search API Call
  const search = async e => {
    e.preventDefault();
    let result = await fetch(
      `${process.env.REACT_APP_API_URL}/search?q=${query}`
    );

    let data = await result.json();

    //If we only get 1 result back, then navigate straight to that page.
    if (data.length === 1) {
      history.push({ pathname: data[0].url });
      setQuery("");
      //If more than 1 result is returned,
      //we navigate to the Search page to display the results.
    } else {
      history.push({ pathname: "/search", search: `?q=${query}` }, data);
      setQuery("");
    }
  };
  return (
    <SearchWrapper className="control has-icons-left" onSubmit={search}>
      {/* @todo might need this for mobile. Test */}
      {/* <button className="hiddenSearchSubmit" type="submit"></button> */}
      <SearchInput
        type="search"
        placeholder={t("search.placeholder")}
        maxLength="64"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
