import React from "react";
// import styled from 'styled-components';
import * as Cards from "../../components/Cards/Cards";
import * as Home from "../Home/styled-components";
import StackedComponent from "../../components/Stacked/StackedComponent";
import { useResource } from "rest-hooks";
import BlockResource from "../../resources/BlockResource";

// export default class BlockDetailScreen extends Component {
export default function BlockDetail({ height }) {
  const block = useResource(BlockResource.detailShape(), {
    height
  });
  return (
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
                <Cards.ItemDetail>{block.txs.length}</Cards.ItemDetail>
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
        <div className="card-content">
          <div className="columns">
            <div className="column is-half">
              <table className="table is-fullwidth">
                <tbody>
                  <tr>
                    <StackedComponent
                      label="Previous Block"
                      value={block.prevBlock}
                    />
                  </tr>
                  <tr>
                    <StackedComponent
                      label="Difficulty"
                      value={block.difficulty}
                    />
                  </tr>
                  <tr>
                    <StackedComponent label="Version" value={block.version} />
                  </tr>
                  <tr>
                    <StackedComponent label="Bits" value={block.bits} />
                  </tr>
                  <tr>
                    <StackedComponent label="Size" value={block.size} />
                  </tr>
                  <tr>
                    <StackedComponent
                      label="Average Fee"
                      value={block.averageFee}
                    />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-half">
              <table className="table is-fullwidth">
                <tbody>
                  {/* TODO: Get Node Status */}
                  <tr>
                    <StackedComponent label="Hash" value={block.hash} />
                  </tr>
                  <tr>
                    <StackedComponent
                      label="Merkle Root"
                      value={block.merkleRoot}
                    />
                  </tr>
                  <tr>
                    <StackedComponent
                      label="Tree Root"
                      value={block.treeRoot}
                    />
                  </tr>
                  <tr>
                    <StackedComponent
                      label="Reserved Root"
                      value={block.reservedRoot}
                    />
                  </tr>
                  <tr>
                    <StackedComponent
                      label="Chainwork"
                      value={block.chainwork}
                    />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Cards.Card>
    </Home.ContentContainer>
  );
}
