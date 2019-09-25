import React, { Suspense, useState } from "react";
import queryString from "query-string";
import BlocksContainer from "./BlocksContainer";

export default function Blocks(props) {
  let query = queryString.parse(props.location.search);
  let currentPage = 1;
  if (!isNaN(parseInt(query.p)) && query.p > 0) {
    currentPage = parseInt(query.p);
  }
  const [page, setPage] = useState(currentPage);

  const changePage = page => {
    // Update Page Location
    props.history.push({ pathname: "/blocks", search: "?p=" + page });
    setPage(page);
  };

  return (
    <>
      <Suspense
        fallback={
          <div>
            <p>Hi</p>
          </div>
          // Blocks skeleton
        }
      >
        <BlocksContainer page={page} changePage={changePage} />
      </Suspense>
    </>
  );
}
