import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import Transaction from './Transaction';
import styled from 'styled-components';

export const RecentTXSContainer = styled.div`
  width: 100%;
`;

function insertTransactions() {
  let num = 5;
  let txs = [];

  for (let i = 0; i < num; i++) {
    txs.push(<Transaction key={i} />);
  }

  return txs;
}

export default class RecentTransactions extends Component {
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
                {insertTransactions()}

              </Cards.SummaryContainer>
            </Cards.Content>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentTXSContainer>
    )
  }
}
