import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import styled from 'styled-components';

export const RecentTXSContainer = styled.div`
  width: 100%;
`;


export default class RecentTransactions extends Component {
  render() {
    return (
      <RecentTXSContainer>
        <Home.IndividualCardContainer>
          <Cards.Card>
            <Cards.Header>
              <Cards.HeaderTitle>Recent Transactions</Cards.HeaderTitle>
            </Cards.Header>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentTXSContainer>
    )
  }
}
