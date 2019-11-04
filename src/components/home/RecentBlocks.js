import React from "react";
import { Link } from "react-router-dom";

// Components
import Card from "components/styles/Card";
import { Card as UclCard, Flex, Col } from "@urkellabs/ucl";

// SVGs
import BlockLogo from "components/svg/Block";

// Util
import { truncateHash, timeAgo } from "utils/util";

const BlockCardItem = ({ block }) => {
  return (
    <Col>
      <Card.SummaryItem>
        <Col>
          <Card.LeftItemDetail>
            <Card.ItemLogo>
              <BlockLogo />
            </Card.ItemLogo>
            Block #:&nbsp;
            <Link to={"/block/" + block.height}>
              {block.height}
            </Link>
          </Card.LeftItemDetail>
          <Card.LeftItemDetail>
            Mined By:&nbsp;
            <Link to={"/address/" + block.miner}>
              {/* @todo check pool */}
              {truncateHash(block.miner)}
            </Link>
          </Card.LeftItemDetail>
          <Card.LeftItemDetail>
            Transactions: {block.tx.length}
          </Card.LeftItemDetail>
        </Col>
        <Col>
          <Card.RightItemDetail>
            <em>{timeAgo(block.time)}</em>
          </Card.RightItemDetail>
        </Col>
      </Card.SummaryItem>
    </Col>
  );
};

export default function RecentBlocks({ blocks }) {
  const blockRows = blocks.map((block, index) => (
    <BlockCardItem key={index} block={block} />
  ));
  return (
    <UclCard
      title="Blocks"
      headerAction={<Link to="/blocks">View All</Link>}>
      <Flex columns>{blockRows}</Flex>
    </UclCard>
  );
}
