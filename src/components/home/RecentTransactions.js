import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import { SummaryItem, LeftItemDetail, RightItemDetail, ItemLogo } from "./styled-components";
import { Card, Flex, Col } from "@urkellabs/ucl";

// SVGs
import Arrow from "components/svg/RightArrow";

// Util
import { truncateHash, timeAgo, hnsValues, sumTxOutputs } from "utils/util";

const Transaction = ({ tx }) => (
  // ----- TX Details -----
  <Col>
    <SummaryItem>
      {/* ----- Left Side / Top Side ----- */}
      <Col mobile={9}>
        <LeftItemDetail>
          <ItemLogo>
            <Arrow />
          </ItemLogo>
          TX #:&nbsp;
          <Link to={"/tx/" + tx.hash}>
            {truncateHash(tx.hash)}
          </Link>
        </LeftItemDetail>
        <LeftItemDetail>
          Amount: {hnsValues(sumTxOutputs(tx.outputs))}
        </LeftItemDetail>
        <LeftItemDetail>Fee: {hnsValues(tx.fee)}</LeftItemDetail>
      </Col>
      {/* ----- Right Side / Bottom Side ----- */}
      <Col>
        <RightItemDetail>
          <em>{timeAgo(tx.time)}</em>
        </RightItemDetail>
      </Col>
    </SummaryItem>
  </Col>
);

export default function RecentTransactions({ txs }) {
  const txRows = txs.map((tx, index) => <Transaction key={index} tx={tx} />);

  return (
    <Card title="Recent Transactions">
      <Flex columns>
        {txRows}
      </Flex>
    </Card>
  );
}

RecentTransactions.propTypes = {
  txs: PropTypes.array
};
