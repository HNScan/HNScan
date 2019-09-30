import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = props => {
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
    <form className="control has-icons-left" onSubmit={search}>
      <button className="hiddenSearchSubmit" type="submit"></button>
      <input
        type="search"
        className="input is-rounded searchbar"
        placeholder="Search the HNS Blockchain"
        maxLength="64"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-search"></i>
      </span>
    </form>
  );
};

export default SearchBar;
