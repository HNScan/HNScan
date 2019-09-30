import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

export default function usePage() {
  //Default page
  let currentPage = 1;

  const location = useLocation();
  let query = queryString.parse(location.search);

  if (!isNaN(parseInt(query.p)) && query.p > 0) {
    currentPage = parseInt(query.p);
  }

  //@todo the question is will we cause too many reloads if we init this as null, and then change to whatever is parsed from the url. Test the number of rerenders without this and with it.
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    let currentPage = 1;
    let query = queryString.parse(location.search);
    // let currentPage = 1;
    if (!isNaN(parseInt(query.p)) && query.p > 0) {
      currentPage = parseInt(query.p);
    }
    setPage(currentPage);
  }, [location.search]);

  return page;
}
