import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import styled from 'styled-components';

export const RecentBlocksContainer = styled.div`
  width: 100%;
`;


export default class RecentTransactions extends Component {
  render() {
    return (
      <RecentBlocksContainer>
        <Home.IndividualCardContainer>
          <Cards.Card>
            <Cards.Header>
              <Cards.HeaderTitle>Blocks</Cards.HeaderTitle>
              <Cards.HeaderLink href="/blocks">View All</Cards.HeaderLink>
            </Cards.Header>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentBlocksContainer>
    )
  }
}
