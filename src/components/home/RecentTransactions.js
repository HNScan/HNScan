import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Card from "components/styles/Card";
import { Card as NewCard, Flex, Col } from "@urkellabs/ucl";

// SVGs
import Arrow from "components/svg/RightArrow";

// Util
import { truncateHash, timeAgo, hnsValues, sumTxOutputs } from "utils/util";

const Time = styled.span`
  font-style: italic;
`;

const Transaction = ({ tx }) => (
  // ----- TX Details -----
  <Col>
    <Card.SummaryItem>
      {/* ----- Left Side / Top Side ----- */}
      <Col>
        <Card.LeftItemDetail>
          <Card.ItemLogo>
            <Arrow />
          </Card.ItemLogo>
          TX #:&nbsp;
          <Link to={"/tx/" + tx.hash}>
            {truncateHash(tx.hash)}
          </Link>
        </Card.LeftItemDetail>
        <Card.LeftItemDetail>
          Amount: {hnsValues(sumTxOutputs(tx.outputs))}
        </Card.LeftItemDetail>
        <Card.LeftItemDetail>Fee: {hnsValues(tx.fee)}</Card.LeftItemDetail>
      </Col>
      {/* ----- Right Side / Bottom Side ----- */}
      <Col>
        <Card.RightItemDetail>
          <Time>{timeAgo(tx.time)}</Time>
        </Card.RightItemDetail>
      </Col>
    </Card.SummaryItem>
  </Col>
);

export default function RecentTransactions({ txs }) {
  const txRows = txs.map((tx, index) => <Transaction key={index} tx={tx} />);

  return (
    <NewCard title="Recent Transactions">
      <Flex columns>
        {txRows}
      </Flex>
    </NewCard>
  );
}

// Property Types
RecentTransactions.propTypes = {
  txs: PropTypes.array
};

// const TxLoading = () => (
//   <Card.SummaryItemContainer>
//     <Card.SummaryItem>
//       <Card.SummaryItemContent>
//         <ContentLoader
//           // height={97}
//           // width={461}
//           speed={2}
//           primaryColor="#f3f3f3"
//           secondaryColor="#ecebeb"
//         >
//           {/* Transaction ID Rectangle */}
//           <rect x="10" y="15" rx="4" ry="4" width="320" height="24" />
//           {/* Miner reward */}
//           <rect x="10" y="55" rx="3" ry="3" width="100" height="16" />
//           {/* Amount */}
//           <rect x="10" y="85" rx="3" ry="3" width="150" height="16" />
//         </ContentLoader>
//       </Card.SummaryItemContent>
//       <Card.SummaryItemContent>
//         <ContentLoader
//           // height={97}
//           // width={461}
//           speed={2}
//           primaryColor="#f3f3f3"
//           secondaryColor="#ecebeb"
//           rtl={true}
//         >
//           {/* Transaction To */}
//           <rect x="25" y="15" rx="3" ry="3" width="125" height="16" />
//           {/* Time */}
//           {/* <rect x="25" y="40" rx="3" ry="3" width="125" height="16" /> */}
//         </ContentLoader>
//       </Card.SummaryItemContent>
//     </Card.SummaryItem>
//   </Card.SummaryItemContainer>
// );
