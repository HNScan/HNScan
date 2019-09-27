import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";

// Components
import * as Cards from "./Cards/Cards";

// Util
import { timeAgo, hnsValues, checkPool } from "../util/util";

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonLine = styled(SSkeletonPulse)`
  width: ${props => props.width || "5.5em"};
  height: ${props => props.height || "100%"};
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;

const SkeletonLine = props => <SSkeletonLine {...props} />;

const BlockSummarySkeleton = () => (
  <Cards.Card>
    <Cards.Header>
      <Cards.HeaderTitle>
        <Cards.HeaderTitle>
          Block <SkeletonLine width="60px" height="24px" /> Summary
        </Cards.HeaderTitle>
      </Cards.HeaderTitle>
    </Cards.Header>
  </Cards.Card>
);

export default function BlockSummary({ block, skeleton }) {
  if (skeleton) {
    return <BlockSummarySkeleton />;
  }
  return (
    <Cards.Card>
      <Cards.Header>
        <Cards.HeaderTitle>Block {block.height} Summary</Cards.HeaderTitle>
      </Cards.Header>
      <Cards.Content>
        <Cards.HorizontalContainer>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>Received</Cards.ItemLabel>
              <Cards.ItemDetail>{timeAgo(block.time)}</Cards.ItemDetail>
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
              <Cards.ItemDetail>{hnsValues(block.fees)}</Cards.ItemDetail>
            </Cards.ItemContainer>
          </Cards.Column>
        </Cards.HorizontalContainer>
        <Cards.HorizontalContainer>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>Mined By</Cards.ItemLabel>
              <Cards.ItemDetail>
                <Link to={"/address/" + block.miner}>
                  {checkPool(block.miner)}
                </Link>
              </Cards.ItemDetail>
            </Cards.ItemContainer>
          </Cards.Column>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>Weight</Cards.ItemLabel>
              <Cards.ItemDetail>{block.weight} wu</Cards.ItemDetail>
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
  );
}
