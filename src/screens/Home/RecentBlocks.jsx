import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import Block from './Block';
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
            {/* ----- Blocks Header ----- */}
            <Cards.Header>
              <Cards.HeaderTitle>Blocks</Cards.HeaderTitle>
              <Cards.HeaderLink href="/blocks">View All</Cards.HeaderLink>
            </Cards.Header>
            {/* ----- Blocks Content ----- */}
            <Cards.Content>
              <Cards.SummaryContainer>

                {/* ----- Need Fx'n to build out 5 times w/ data ----- */}
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />

              </Cards.SummaryContainer>
            </Cards.Content>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentBlocksContainer>
    )
  }
}
