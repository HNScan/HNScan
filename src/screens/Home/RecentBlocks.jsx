import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import Block from './Block';
import * as Api from '../../api/api';
import styled from 'styled-components';

export const RecentBlocksContainer = styled.div`
  width: 100%;
`;

function insertBlocks(blocks) {
  let arr = [];

  for (let i = 0; i < blocks.length; i++) {
    arr.push(<Block key={i} block={blocks[i]}/>);
  }
  console.log(arr);
  return arr;
}

export default class RecentTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.setState({
      blocks: await Api.getRecentBlocks()
    });
    this.setState({loading: false})
  }

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
                {this.state.loading ? "loading" : insertBlocks(this.state.blocks)}

              </Cards.SummaryContainer>
            </Cards.Content>
          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentBlocksContainer>
    )
  }
}
