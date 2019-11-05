import React from "react";
import { Link } from "react-router-dom";

// Components
import { SummaryItem, ItemLogo, LeftItemDetail, RightItemDetail } from "./styled-components";
import { Card, Flex, Col } from "@urkellabs/ucl";

// SVGs
import BlockLogo from "components/svg/Block";

// Util
import { truncateHash, timeAgo } from "utils/util";

const BlockCardItem = ({ block }) => {
  return (
    <Col>
      <SummaryItem>
        <Col>
          <LeftItemDetail>
            <ItemLogo>
              <BlockLogo />
            </ItemLogo>
            Block #:&nbsp;
            <Link to={"/block/" + block.height}>
              {block.height}
            </Link>
          </LeftItemDetail>
          <LeftItemDetail>
            Mined By:&nbsp;
            <Link to={"/address/" + block.miner}>
              {/* @todo check pool */}
              {truncateHash(block.miner)}
            </Link>
          </LeftItemDetail>
          <LeftItemDetail>
            Transactions: {block.tx.length}
          </LeftItemDetail>
        </Col>
        <Col>
          <RightItemDetail>
            <em>{timeAgo(block.time)}</em>
          </RightItemDetail>
        </Col>
      </SummaryItem>
    </Col>
  );
};

export default function RecentBlocks({ blocks }) {
  const blockRows = blocks.map((block, index) => (
    <BlockCardItem key={index} block={block} />
  ));
  return (
    <Card
      title="Blocks"
      headerAction={<Link to="/blocks">View All</Link>}>
      <Flex columns>{blockRows}</Flex>
    </Card>
  );
}
