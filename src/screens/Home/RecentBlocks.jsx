import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import styled from 'styled-components';
import Block from '../../components/Logos/block';

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

                {/* ----- Details ----- */}
                <Cards.SummaryItemContainer>
                  <Cards.SummaryItem>
                    {/* ----- Left Side / Top Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.LeftItemDetail>
                        <Cards.ItemLogo>
                          <Block />
                        </Cards.ItemLogo>
                        Block #:&nbsp;<a href="/">19912</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>
                        Mined By: <a href="/">ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Block Reward: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                  </Cards.SummaryItem>
                </Cards.SummaryItemContainer>
                {/* ----- Details ----- */}
                <Cards.SummaryItemContainer>
                  <Cards.SummaryItem>
                    {/* ----- Left Side / Top Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.LeftItemDetail>
                        <Cards.ItemLogo>
                          <Block />
                        </Cards.ItemLogo>
                        Block #:&nbsp;<a href="/">19912</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>
                        Mined By: <a href="/">ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Block Reward: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                  </Cards.SummaryItem>
                </Cards.SummaryItemContainer>
                {/* ----- Details ----- */}
                <Cards.SummaryItemContainer>
                  <Cards.SummaryItem>
                    {/* ----- Left Side / Top Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.LeftItemDetail>
                        <Cards.ItemLogo>
                          <Block />
                        </Cards.ItemLogo>
                        Block #:&nbsp;<a href="/">19912</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>
                        Mined By: <a href="/">ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Block Reward: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                  </Cards.SummaryItem>
                </Cards.SummaryItemContainer>
                {/* ----- Details ----- */}
                <Cards.SummaryItemContainer>
                  <Cards.SummaryItem>
                    {/* ----- Left Side / Top Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.LeftItemDetail>
                        <Cards.ItemLogo>
                          <Block />
                        </Cards.ItemLogo>
                        Block #:&nbsp;<a href="/">19912</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>
                        Mined By: <a href="/">ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Block Reward: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                  </Cards.SummaryItem>
                </Cards.SummaryItemContainer>
                {/* ----- Details ----- */}
                <Cards.SummaryItemContainer>
                  <Cards.SummaryItem>
                    {/* ----- Left Side / Top Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.LeftItemDetail>
                        <Cards.ItemLogo>
                          <Block />
                        </Cards.ItemLogo>
                        Block #:&nbsp;<a href="/">19912</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>
                        Mined By: <a href="/">ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Block Reward: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                  </Cards.SummaryItem>
                </Cards.SummaryItemContainer>

              </Cards.SummaryContainer>
            </Cards.Content>

          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentBlocksContainer>
    )
  }
}
