import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Cards from "../../components/Cards/Cards";
import styled from "styled-components";
import ContentLoader from "react-content-loader";

import { Link } from "react-router-dom";
import * as Util from "../../util/util";
import Arrow from "../../components/Logos/rightArrow";

const Transaction = ({ tx }) => (
  // ----- TX Details -----
  <Cards.SummaryItemContainer>
    <Cards.SummaryItem>
      {/* ----- Left Side / Top Side ----- */}
      <Cards.SummaryItemContent>
        <Cards.LeftItemDetail>
          <Cards.ItemLogo>
            <Arrow />
          </Cards.ItemLogo>
          TX #:&nbsp;
          <Link className="hnscan-link" to={"/tx/" + tx.hash}>
            {Util.truncateHash(tx.hash)}
          </Link>
        </Cards.LeftItemDetail>
        <Cards.LeftItemDetail>
          Amount: {Util.hnsValues(Util.sumTxOutputs(tx.outputs))}
        </Cards.LeftItemDetail>
        <Cards.LeftItemDetail>
          Fee: {Util.hnsValues(tx.fee)}
        </Cards.LeftItemDetail>
      </Cards.SummaryItemContent>
      {/* ----- Right Side / Bottom Side ----- */}
      <Cards.SummaryItemContent>
        <Cards.RightItemDetail>
          <i>{Util.timeAgo(tx.time)}</i>
        </Cards.RightItemDetail>
      </Cards.SummaryItemContent>
    </Cards.SummaryItem>
  </Cards.SummaryItemContainer>
);

export default function RecentTransactions({ txs }) {
  const txRows = txs.map((tx, index) => <Transaction key={index} tx={tx} />);

  return (
      <Cards.Card>
        {/* ------ TX Header ----- */}
        <Cards.Header>
          <Cards.HeaderTitle>Recent Transactions</Cards.HeaderTitle>
        </Cards.Header>
        {/* ----- TX Content ----- */}
        <Cards.SummaryContainer>
          {/* This Fxn will return x number of transactions */}
          {txRows}
        </Cards.SummaryContainer>
      </Cards.Card>
  );
}

// Property Types
RecentTransactions.propTypes = {
  txs: PropTypes.array
};

const TxLoading = () => (
  <Cards.SummaryItemContainer>
    <Cards.SummaryItem>
      <Cards.SummaryItemContent>
        <ContentLoader
          // height={97}
          // width={461}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          {/* Transaction ID Rectangle */}
          <rect x="10" y="15" rx="4" ry="4" width="320" height="24" />
          {/* Miner reward */}
          <rect x="10" y="55" rx="3" ry="3" width="100" height="16" />
          {/* Amount */}
          <rect x="10" y="85" rx="3" ry="3" width="150" height="16" />
        </ContentLoader>
      </Cards.SummaryItemContent>
      <Cards.SummaryItemContent>
        <ContentLoader
          // height={97}
          // width={461}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          rtl={true}
        >
          {/* Transaction To */}
          <rect x="25" y="15" rx="3" ry="3" width="125" height="16" />
          {/* Time */}
          {/* <rect x="25" y="40" rx="3" ry="3" width="125" height="16" /> */}
        </ContentLoader>
      </Cards.SummaryItemContent>
    </Cards.SummaryItem>
  </Cards.SummaryItemContainer>
);
