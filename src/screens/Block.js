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
import Pagination from "../components/Pagination";
import queryString from "query-string";

import { timeAgo, sciNotation, hnsValues, checkPool } from "../util/util";

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
  const block = useResource(BlockResource.detailShape(), {
    height
  });
  //@todo make this better
  const limit = 10;
  const offset = (page - 1) * limit;
  const txs = useResource(TransactionResource.listShape(), {
    height,
    limit,
    offset
  });
  //@todo remove limit from the api, it's useless. Also remove offset.
  const { total } = useResultCache(TransactionResource.listShape(), {
    height,
    limit,
    offset
  });
  const pages = Math.ceil(total / limit);

  let [difficulty, exponent] = sciNotation(block.difficulty, 5);

  return (
    // @todo should not come from home here
    <Home.ContentContainer>
      <BlockSummary block={block} />

      {/* ------- Bottom Card ------ */}
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>Advanced</Cards.HeaderTitle>
        </Cards.Header>
        {/* @todo remove all these class names. */}
        {/* @todo need links in here */}
        {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
        <div className="card-content">
          <div className="columns">
            <div className="column is-half">
              <table className="table is-fullwidth">
                <tbody>
                  {block.prevBlock && (
                    <tr>
                      <StackedData
                        label="Previous Block"
                        value={block.prevBlock}
                        link={"/block/" + (block.height - 1)}
                      />
                    </tr>
                  )}
                  <tr>
                    <StackedData
                      label="Difficulty"
                      value={
                        <span>
                          {difficulty} x 10<sup>{exponent}</sup>
                        </span>
                      }
                    />
                  </tr>
                  <tr>
                    <StackedData label="Version" value={block.version} />
                  </tr>
                  <tr>
                    <StackedData label="Bits" value={block.bits} />
                  </tr>
                  <tr>
                    <StackedData label="Size" value={block.size + " bytes"} />
                  </tr>
                  <tr>
                    <StackedData
                      label="Average Fee"
                      value={hnsValues(block.averageFee)}
                    />
                  </tr>
                  <tr>
                    <StackedData label="Nonce" value={block.nonce} />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-half">
              <table className="table is-fullwidth">
                <tbody>
                  {block.nextHash && (
                    <tr>
                      <StackedData
                        label="Next Block"
                        value={block.nextHash}
                        link={"/block/" + (block.height + 1)}
                      />
                    </tr>
                  )}
                  <tr>
                    <StackedData label="Hash" value={block.hash} />
                  </tr>
                  <tr>
                    <StackedData label="Merkle Root" value={block.merkleRoot} />
                  </tr>
                  <tr>
                    <StackedData label="Tree Root" value={block.treeRoot} />
                  </tr>
                  <tr>
                    <StackedData label="Filter Root" value={block.filterRoot} />
                  </tr>
                  <tr>
                    <StackedData
                      label="Reserved Root"
                      value={block.reservedRoot}
                    />
                  </tr>
                  <tr>
                    <StackedData label="Chainwork" value={block.chainwork} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Cards.Card>
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
