import React, { Suspense, useState, useEffect } from "react";
import { useResource, useResultCache } from "rest-hooks";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

// Components
import { NamesSkeleton, NamesTable } from "components/name/NamesTable";

// Resources
import NameResource from "resources/NameResource";

//Turn getPage into it's own hook.... @todo

function NamesView({ page, changePage }) {
  const pageOffset = (page - 1) * 25;
  const names = useResource(NameResource.listShape(), { offset: pageOffset });
  const { limit, total } = useResultCache(NameResource.listShape(), {
    offset: pageOffset
  });
  const pages = Math.ceil(total / limit);
  return <NamesTable names={names} page={page} pages={pages} changePage={changePage} />
}

export default function Names() {
  const location = useLocation();
  let currentPage = 1;
  let query = queryString.parse(location.search);
  // let currentPage = 1;
  if (!isNaN(parseInt(query.p)) && query.p > 0) {
    currentPage = parseInt(query.p);
  }

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
  const history = useHistory();

  //@todo this is actually probably bad. Don't pass a state changer down, let's just have Pagination use Link components.
  const changePage = page => {
    // Update Page Location
    history.push({ pathname: "/names", search: "?p=" + page });
    setPage(page);
  };

  return (
    <>
      <Suspense fallback={<NamesSkeleton />}>
        <NamesView page={page} changePage={changePage} />
      </Suspense>
    </>
  );
}
