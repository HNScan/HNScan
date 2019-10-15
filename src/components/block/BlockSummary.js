import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";

// Components
import Card from "../styles/Card";

// Util
import { timeAgo, hnsValues, checkPool } from "../../util/util";

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
  <Card>
    <Card.Header>
      <Card.HeaderTitle>
        Block <SkeletonLine width="60px" height="24px" /> Summary
      </Card.HeaderTitle>
    </Card.Header>
  </Card>
);

export default function BlockSummary({ block, skeleton }) {
  if (skeleton) {
    return <BlockSummarySkeleton />;
  }
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>Block {block.height} Summary</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <Card.HorizontalContainer>
          <Card.Column>
            <Card.ItemContainer>
              <Card.ItemLabel>Received</Card.ItemLabel>
              <Card.ItemDetail>{timeAgo(block.time)}</Card.ItemDetail>
            </Card.ItemContainer>
          </Card.Column>
          <Card.Column>
            <Card.ItemContainer>
              <Card.ItemLabel>Total Transactions</Card.ItemLabel>
              <Card.ItemDetail>{block.txs}</Card.ItemDetail>
            </Card.ItemContainer>
          </Card.Column>
          <Card.Column>
            <Card.ItemContainer>
              <Card.ItemLabel>Total Fees</Card.ItemLabel>
              <Card.ItemDetail>{hnsValues(block.fees)}</Card.ItemDetail>
            </Card.ItemContainer>
          </Card.Column>
        </Card.HorizontalContainer>
        <Card.HorizontalContainer>
          <Card.Column>
            <Card.ItemContainer>
              <Card.ItemLabel>Mined By</Card.ItemLabel>
              <Card.ItemDetail>
                <Link to={"/address/" + block.miner}>
                  {checkPool(block.miner)}
                </Link>
              </Card.ItemDetail>
            </Card.ItemContainer>
          </Card.Column>
          <Card.Column>
            <Card.ItemContainer>
              <Card.ItemLabel>Weight</Card.ItemLabel>
              <Card.ItemDetail>{block.weight} wu</Card.ItemDetail>
            </Card.ItemContainer>
          </Card.Column>
          <Card.Column>
            <Card.ItemContainer>
              <Card.ItemLabel>Confirmations</Card.ItemLabel>
              <Card.ItemDetail>{block.confirmations}</Card.ItemDetail>
            </Card.ItemContainer>
          </Card.Column>
        </Card.HorizontalContainer>
      </Card.Content>
    </Card>
  );
}
