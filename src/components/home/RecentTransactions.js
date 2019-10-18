import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../styles/Card";

import { Link } from "react-router-dom";
import * as Util from "../../util/util";
import Arrow from "../../components/Logos/rightArrow";

const Time = styled.span`
  font-style: italic;
`;

const Transaction = ({ tx }) => (
  // ----- TX Details -----
  <Card.SummaryItemContainer>
    <Card.SummaryItem>
      {/* ----- Left Side / Top Side ----- */}
      <Card.SummaryItemContent>
        <Card.LeftItemDetail>
          <Card.ItemLogo>
            <Arrow />
          </Card.ItemLogo>
          TX #:&nbsp;
          <Link className="hnscan-link" to={"/tx/" + tx.hash}>
            {Util.truncateHash(tx.hash)}
          </Link>
        </Card.LeftItemDetail>
        <Card.LeftItemDetail>
          Amount: {Util.hnsValues(Util.sumTxOutputs(tx.outputs))}
        </Card.LeftItemDetail>
        <Card.LeftItemDetail>Fee: {Util.hnsValues(tx.fee)}</Card.LeftItemDetail>
      </Card.SummaryItemContent>
      {/* ----- Right Side / Bottom Side ----- */}
      <Card.SummaryItemContent>
        <Card.RightItemDetail>
          <Time>{Util.timeAgo(tx.time)}</Time>
        </Card.RightItemDetail>
      </Card.SummaryItemContent>
    </Card.SummaryItem>
  </Card.SummaryItemContainer>
);

export default function RecentTransactions({ txs }) {
  const txRows = txs.map((tx, index) => <Transaction key={index} tx={tx} />);

  return (
    <Card>
      {/* ------ TX Header ----- */}
      <Card.Header>
        <Card.HeaderTitle>Recent Transactions</Card.HeaderTitle>
      </Card.Header>
      {/* ----- TX Content ----- */}
      <Card.SummaryContainer>
        {/* This Fxn will return x number of transactions */}
        {txRows}
      </Card.SummaryContainer>
    </Card>
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
