import React from "react";
import styled from "styled-components";
import { Row, Col } from "@urkellabs/ucl";

// Components
import Card from "components/styles/Card";
import StackedData from "components/shared/StackedData";

// Util
import { timeAgo, hnsValues, checkPool } from "utils/util";

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
        <Row>
          <Col mobile={12} tablet>
            <StackedData label="Received" value={timeAgo(block.time)} />
          </Col>
          <Col mobile={12} tablet>
            <StackedData label="Total Transactions" value={block.txs} />
          </Col>
          <Col mobile={12} tablet>
            <StackedData label="Total Fees" value={hnsValues(block.fees)} />
          </Col>
        </Row>
        <Row>
          <Col mobile={12} tablet>
            <StackedData
              label="Mined By"
              value={checkPool(block.miner)}
              link={"/address/" + block.miner}
            />
          </Col>
          <Col mobile={12} tablet>
            <StackedData label="Weight" value={block.weight} />
          </Col>
          <Col mobile={12} tablet>
            <StackedData label="Confirmations" value={block.confirmations} />
          </Col>
        </Row>
      </Card.Content>
    </Card>
  );
}
