import React from "react";
import { Row, Col, Card, Tooltip } from "@urkellabs/ucl";
import { useParams } from "react-router-dom";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { humanizeTimestamp, timeAgo, hnsValues, checkPool } from "utils/util";
import { useTranslation } from "react-i18next";

const BlockSummarySkeleton = () => {
  let params = useParams();
  return <Card title={`Block ${params.height} Summary`}></Card>;
};

export default function BlockSummary({ block, skeleton }) {
  const { t } = useTranslation();
  if (skeleton) {
    return <BlockSummarySkeleton />;
  }
  return (
    <Card title={t("block_detail.summary", { height: block.height })}>
      <Row>
        <Col mobile={12} tablet>
          <StackedData
            label="block_detail.received"
            value={
              <Tooltip
                trigger="mouseenter"
                touchHold
                title={humanizeTimestamp(block.time)}
              >
                {timeAgo(block.time)}
              </Tooltip>
            }
          />
        </Col>
        <Col mobile={12} tablet>
          <StackedData label="block_detail.total_txs" value={block.txs} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData
            label="block_detail.total_fees"
            value={hnsValues(block.fees)}
          />
        </Col>
      </Row>
      <Row>
        <Col mobile={12} tablet>
          <StackedData
            label="block_detail.mined_by"
            value={checkPool(block.miner)}
            link={"/address/" + block.miner}
          />
        </Col>
        <Col mobile={12} tablet>
          <StackedData label="block_detail.weight" value={block.weight} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData
            label="block_detail.confirmations"
            value={block.confirmations}
          />
        </Col>
      </Row>
    </Card>
  );
}
