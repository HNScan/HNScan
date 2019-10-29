import React from "react";
import styled from "styled-components";
import { Row, Col } from "@urkellabs/ucl";

import { useParams } from "react-router-dom";

// Components
import { Card } from "@urkellabs/ucl";
import StackedData from "components/shared/StackedData";

// Util
import { timeAgo, hnsValues, checkPool } from "utils/util";

const BlockSummarySkeleton = () => {
  let params = useParams();
  return <Card title={`Block ${params.height} Summary`}></Card>
};

export default function BlockSummary({ block, skeleton }) {
  if (skeleton) {
    return <BlockSummarySkeleton />;
  }
  return (
    <Card title={`Block ${block.height} Summary`}>
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
    </Card>
  );
}
