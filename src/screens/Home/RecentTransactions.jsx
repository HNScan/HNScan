import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import Transaction from './Transaction';
import styled from 'styled-components';

export const RecentTXSContainer = styled.div`
  width: 100%;
`;

export default class RecentTransactions extends Component {
  // TODO: This should be a function that builds out the 5
  // Most recent transactions using one item as the template
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

                {/* ----- Need Fx'n to build out 5 times w/ data ----- */}
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />

              </Cards.SummaryContainer>
            </Cards.Content>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentTXSContainer>
    )
  }
}
