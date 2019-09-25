import React from "react";
// import styled from 'styled-components';
import * as Cards from "../../components/Cards/Cards";
import * as Home from "../Home/styled-components";
import StackedData from "../../components/Stacked/StackedComponent";
import { useResource } from "rest-hooks";
import BlockResource from "../../resources/BlockResource";
import TransactionList from "../../components/TransactionList";

export default function BlockDetail({ height }) {
  const block = useResource(BlockResource.detailShape(), {
    height
  });
  return (
    // @todo should not come from home here
    <Home.ContentContainer>
      {/* ------- Top Card ------ */}
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>Block {block.height} Summary</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>
          <Cards.HorizontalContainer>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Received</Cards.ItemLabel>
                <Cards.ItemDetail>{block.time}</Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Total Transactions</Cards.ItemLabel>
                <Cards.ItemDetail>{block.txs}</Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Total Fees</Cards.ItemLabel>
                <Cards.ItemDetail>{block.fees}</Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
          </Cards.HorizontalContainer>
          <Cards.HorizontalContainer>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Mined By</Cards.ItemLabel>
                <Cards.ItemDetail>{block.miner}</Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Weight</Cards.ItemLabel>
                <Cards.ItemDetail>{block.weight}</Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Confirmations</Cards.ItemLabel>
                <Cards.ItemDetail>{block.confirmations}</Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
          </Cards.HorizontalContainer>
        </Cards.Content>
      </Cards.Card>

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
                    <StackedData label="Difficulty" value={block.difficulty} />
                  </tr>
                  <tr>
                    <StackedData label="Version" value={block.version} />
                  </tr>
                  <tr>
                    <StackedData label="Bits" value={block.bits} />
                  </tr>
                  <tr>
                    <StackedData label="Size" value={block.size} />
                  </tr>
                  <tr>
                    <StackedData label="Average Fee" value={block.averageFee} />
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
