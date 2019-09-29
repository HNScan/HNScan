import React, { Suspense, useState, useEffect } from "react";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
// import styled from 'styled-components';
import * as Cards from "../components/Cards/Cards";
import * as Home from "./Home/styled-components";
import StackedData from "../components/Stacked/StackedComponent";
import { useResource, useResultCache } from "rest-hooks";
import BlockResource from "../resources/BlockResource";
import TransactionResource from "../resources/TransactionResource";
import TransactionList from "../components/TransactionList";
import BlockSummary from "../components/BlockSummary";
import BlockAdvanced from "../components/BlockAdvanced";
import Pagination from "../components/Pagination";
import queryString from "query-string";

function BlockSkeleton() {
  return (
    // @todo should not come from home here
    <Home.ContentContainer>
      <BlockSummary skeleton />
    </Home.ContentContainer>
  );
}

//@todo move most of this into a component, not in here.
function BlockContainer({ height, page, changePage, url }) {
  const limit = 10;
  const block = useResource(BlockResource.detailShape(), {
    height
  });
  const txs = useResource(TransactionResource.listShape(), {
    height,
    page
  });
  const { total } = useResultCache(TransactionResource.listShape(), {
    height,
    page
  });
  const pages = Math.ceil(total / limit);

  return (
    // @todo should not come from home here
    <Home.ContentContainer>
      <BlockSummary block={block} />
      <BlockAdvanced block={block} />
      <TransactionList txs={txs} />
      <Pagination
        totalPages={pages}
        page={page}
        url={url}
        changePage={changePage}
      />
    </Home.ContentContainer>
  );
}

//@todo this fallback should render Block skeleton
//Function that is exported.
export default function Block() {
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
  const { height } = useParams();
  //@todo I think we can remove change Page and url.
  return (
    <>
      <Suspense fallback={<BlockSkeleton />}>
        <BlockContainer
          height={height}
          page={page}
          changePage={changePage}
          url={"/block/" + height}
        />
      </Suspense>
    </>
  );
}
