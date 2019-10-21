import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import Card from "components/styles/Card";

// SVGs
import BlockLogo from "components/svg/Block";

// Util
import { truncateHash, timeAgo } from "utils/util";

//@todo put them here for now.
export const Miner = styled.div`
  display: none;
  @media (min-width: 425px) {
    display: flex;
  }
`;

export const MobileMiner = styled.div`
  display: flex;
  @media (min-width: 425px) {
    display: none;
  }
`;

const Time = styled.span`
  font-style: italic;
`;

const BlockCardItem = ({ block }) => {
  return (
    <Card.SummaryItemContainer>
      <Card.SummaryItem>
        {/* ----- Left Side / Top Side ----- */}
        <Card.SummaryItemContent>
          <Card.LeftItemDetail>
            <Card.ItemLogo>
              <BlockLogo />
            </Card.ItemLogo>
            Block #:&nbsp;
            <Link className="hnscan-link" to={"/block/" + block.height}>
              {block.height}
            </Link>
          </Card.LeftItemDetail>
          <Card.LeftItemDetail>
            <Miner>
              Mined By:&nbsp;
              <Link className="hnscan-link" to={"/address/" + block.miner}>
                {/* @todo check pool */}
                {block.miner}
              </Link>
            </Miner>
            <MobileMiner>
              Mined By:{" "}
              <Link className="hnscan-link" to={"/address/" + block.miner}>
                {truncateHash(block.miner)}
              </Link>
            </MobileMiner>
          </Card.LeftItemDetail>
          <Card.LeftItemDetail>
            Transactions: {block.tx.length}
          </Card.LeftItemDetail>
        </Card.SummaryItemContent>
        <Card.SummaryItemContent>
          <Card.RightItemDetail>
            <Time>{timeAgo(block.time)}</Time>
          </Card.RightItemDetail>
        </Card.SummaryItemContent>
      </Card.SummaryItem>
    </Card.SummaryItemContainer>
  );
};

export default function RecentBlocks({ blocks }) {
  const blockRows = blocks.map((block, index) => (
    <BlockCardItem key={index} block={block} />
  ));
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>Blocks</Card.HeaderTitle>
        <Card.HeaderLink className="hnscan-link" to="/blocks">
          View All
        </Card.HeaderLink>
      </Card.Header>
      <Card.SummaryContainer>{blockRows}</Card.SummaryContainer>
    </Card>
  );
}
