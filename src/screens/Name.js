import React, { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
//@todo ideally get rid of this lib.
import queryString from "query-string";
import { useResource, useResultCache } from "rest-hooks";
//@todo put all the name components into one folder in components.
import NameSummary from "../components/NameSummary";
import NameResource from "../resources/NameResource";
import NameHistoryResource from "../resources/NameHistoryResource";
import NameAdvanced from "../components/NameAdvanced";
import NameHistory from "../components/NameHistory";
//@todo remove this.
import * as Home from "./Home/styled-components";

const NameRecords = () => <div>todo</div>;

function NameView({ name, page, changePage, url }) {
  //Run these in parallel
  const nameData = useResource(NameResource.detailShape(), { name });
  const history = useResource(NameHistoryResource.listShape(), { name });
  const { limit, total } = useResultCache(NameHistoryResource.listShape(), {
    name
  });
  const pages = Math.ceil(total / limit);
  return (
    <Home.ContentContainer>
      <NameSummary name={nameData} />
      <NameAdvanced name={nameData} />
      {name.records && <NameRecords records={name.records} />}
      <NameHistory
        history={history}
        page={page}
        changePage={changePage}
        pages={pages}
        url={url}
      />
    </Home.ContentContainer>
  );
}

export default function Name() {
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
    // I wonder if this will work...
    history.push({ search: "?p=" + page });
    setPage(page);
  };
  const { name } = useParams();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NameView
          name={name}
          page={page}
          changePage={changePage}
          url={"/name/" + name}
        />
      </Suspense>
    </>
  );
}
