import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import Block from './Block';
import styled from 'styled-components';

export const RecentBlocksContainer = styled.div`
  width: 100%;
`;

function insertBlocks() {
  let num = 5;
  let blocks = [];

  for (let i = 0; i < num; i++) {
    blocks.push(<Block key={i} />);
  }

  return blocks;
}

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

                {/* This Fxn will return x number of blocks */}
                {insertBlocks()}

              </Cards.SummaryContainer>
            </Cards.Content>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentBlocksContainer>
    )
  }
}
