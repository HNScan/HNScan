import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SearchWrapper = styled.form`
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
`;

const SearchInput = styled.input`
  width: 350px;
  border-width: 1.25px;
  //@todo I am supicious of this padding-left.
  padding-left: 55px !important;
  -webkit-appearance: none;

  // Bulma Style Overrides
  background: ${props => props.theme.search.background};
  border: 1px solid ${props => props.theme.search.borderColor};
  color: ${props => props.theme.search.textColor};

  //Bulma helper
  border-radius: 290486px;
  padding-left: 1em;
  padding-right: 1em;

  //Bulma
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  max-width: 100%;

  &:focus {
    box-shadow: none !important;
  }
  &::placeholder {
    color: ${props => props.theme.global.textColorLight};
  }
`;

const SearchBar = props => {
  //@todo consider wrapping all of this into a custom hook.
  const [query, setQuery] = useState("");
  const history = useHistory();

  const search = async e => {
    e.preventDefault();
    let result = await fetch(`http://localhost:8080/search?q=${query}`);

    let data = await result.json();

    if (data.length === 1) {
      history.push({ pathname: data[0].url });
      setQuery("");
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
        //@todo can probably remove these
        className="input is-rounded"
        placeholder="Search the HNS Blockchain"
        maxLength="64"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-search"></i>
      </span>
    </SearchWrapper>
  );
};

export default SearchBar;
