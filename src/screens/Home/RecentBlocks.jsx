import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import Block from './Block';

import styled from 'styled-components';

export const RecentBlocksContainer = styled.div`
  width: 100%;
`;

function insertBlocks(blockData) {
  let blocks = [];
  for (let i = 0; i < blockData.length; i++) {
    blocks.push(<Block key={i} block={blockData[i]}/>);
  }
  return blocks;
}

export default class RecentBlocks extends Component {
  render() {
    return (
      <RecentBlocksContainer>
        <Home.IndividualCardContainer>
          <Cards.Card>
            {/* ----- Blocks Header ----- */}
            <Cards.Header>
              <Cards.HeaderTitle>Blocks</Cards.HeaderTitle>
              <Cards.HeaderLink className="hnscan-link" to="/blocks">View All</Cards.HeaderLink>
            </Cards.Header>
            {/* ----- Blocks Content ----- */}
            <Cards.Content>
              <Cards.SummaryContainer>

                {/* This Fxn will return x number of blocks */}
                {/* TODO: We will need a better skeleton loading components */}
                {this.props.loading ? "loading" : insertBlocks(this.props.blocks)}

              </Cards.SummaryContainer>
            </Cards.Content>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentBlocksContainer>
    )
  }
}
