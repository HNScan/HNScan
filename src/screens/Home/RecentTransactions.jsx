import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Home from "./styled-components";
import * as Cards from "../../components/Cards/Cards";
import Transaction from "./Transaction";
import styled from "styled-components";
import ContentLoader from "react-content-loader";

export const RecentTXSContainer = styled.div`
  width: 100%;
`;

export default class RecentTransactions extends Component {
  insertTransactions = txData => {
    let txs = [];
    for (let i = 0; i < 5; i++) {
      //This should be txData == null, but we are passing an empty array right now.
      //@todo
      if (this.props.loading || txData.length === 0) {
        txs.push(<TxLoading key={i} />);
      } else {
        txs.push(<Transaction key={i} txs={txData[i]} />);
      }
    }
    return txs;
  };

  render() {
    return (
      <RecentTXSContainer>
        <Home.IndividualCardContainer>
          <Cards.Card>
            {/* ------ TX Header ----- */}
            <Cards.Header>
              <Cards.HeaderTitle>Recent Transactions</Cards.HeaderTitle>
            </Cards.Header>
            {/* ----- TX Content ----- */}
            <Cards.Content>
              <Cards.SummaryContainer>
                {/* This Fxn will return x number of transactions */}
                {this.insertTransactions(this.props.txs)}
              </Cards.SummaryContainer>
            </Cards.Content>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentTXSContainer>
    );
  }
}

// Property Types
RecentTransactions.propTypes = {
  txs: PropTypes.array,
  loading: PropTypes.bool.isRequired
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
