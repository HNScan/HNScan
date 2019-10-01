import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import * as Cards from "../Cards/Cards";
import * as Util from "../../util/util";

// Svgs
import BlockLogo from "../svg/Block";

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

const BlockCardItem = ({ block }) => {
  return (
    <Cards.SummaryItemContainer>
      <Cards.SummaryItem>
        {/* ----- Left Side / Top Side ----- */}
        <Cards.SummaryItemContent>
          <Cards.LeftItemDetail>
            <Cards.ItemLogo>
              <BlockLogo />
            </Cards.ItemLogo>
            Block #:&nbsp;
            <Link className="hnscan-link" to={"/block/" + block.height}>
              {block.height}
            </Link>
          </Cards.LeftItemDetail>
          <Cards.LeftItemDetail>
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
                {Util.truncateHash(block.miner)}
              </Link>
            </MobileMiner>
          </Cards.LeftItemDetail>
          <Cards.LeftItemDetail>
            Transactions: {block.tx.length}
          </Cards.LeftItemDetail>
        </Cards.SummaryItemContent>
      </Cards.SummaryItem>
    </Cards.SummaryItemContainer>
  );
};

export default function RecentBlocks({ blocks }) {
  const blockRows = blocks.map((block, index) => (
    <BlockCardItem key={index} block={block} />
  ));
  return (
    <Cards.Card>
      <Cards.Header>
        <Cards.HeaderTitle>Blocks</Cards.HeaderTitle>
        <Cards.HeaderLink className="hnscan-link" to="/blocks">
          View All
        </Cards.HeaderLink>
      </Cards.Header>
      <Cards.SummaryContainer>{blockRows}</Cards.SummaryContainer>
    </Cards.Card>
  );
}
