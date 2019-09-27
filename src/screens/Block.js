import React, { Suspense } from "react";
import { Link } from "react-router-dom";
// import styled from 'styled-components';
import * as Cards from "../components/Cards/Cards";
import * as Home from "./Home/styled-components";
import StackedData from "../components/Stacked/StackedComponent";
import { useResource } from "rest-hooks";
import BlockResource from "../resources/BlockResource";
import TransactionList from "../components/TransactionList";
import BlockSummary from "../components/BlockSummary";

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
function Block({ height }) {
  const block = useResource(BlockResource.detailShape(), {
    height
  });

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
      <TransactionList txs={block.tx} />
    </Home.ContentContainer>
  );
}

//@todo this fallback should render Block skeleton
//Function that is exported.
export default function BlockContainer({ match }) {
  return (
    <>
      <Suspense fallback={<BlockSkeleton />}>
        <Block height={match.params.height} />
      </Suspense>
    </>
  );
}
