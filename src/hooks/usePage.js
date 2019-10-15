import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function usePage() {
  //Default page
  // let currentPage = 1;

  const location = useLocation();
  // let query = queryString.parse(location.search);

  // if (!isNaN(parseInt(query.p)) && query.p > 0) {
  //   currentPage = parseInt(query.p);
  // }

  //@todo the question is will we cause too many reloads if we init this as null, and then change to whatever is parsed from the url. Test the number of rerenders without this and with it.
  // const [page, setPage] = useState(currentPage);
  const [page, setPage] = useState(() => {
    let currentPage = 1;

    let query = queryString.parse(location.search);

    if (!isNaN(parseInt(query.p)) && query.p > 0) {
      currentPage = parseInt(query.p);
    }

    return currentPage;
  });

  //Need the current to prevent a reload.
  //setState = Current page.
  //setState = default (1).
  //setState = 5 (reload).

  useEffect(() => {
    let currentPage = 1;
    let query = queryString.parse(location.search);

    if (!isNaN(parseInt(query.p)) && query.p > 0) {
      currentPage = parseInt(query.p);
    }
    setPage(currentPage);
  }, [location.search]);

  return page;
}
