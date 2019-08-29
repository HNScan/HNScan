import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import styled from 'styled-components';
import Arrow from '../../components/Logos/rightArrow';

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

                {/* ----- Details ----- */}
                <Cards.SummaryItemContainer>
                  <Cards.SummaryItem>
                    {/* ----- Left Side / Top Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.LeftItemDetail>
                        <Cards.ItemLogo>
                          <Arrow />
                        </Cards.ItemLogo>
                        TX #:&nbsp;<a href="/">7145c5....001225</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Miner Reward</Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Amount: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                    {/* ----- Right Side / Bottom Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.RightItemDetail>To:&nbsp;<a href="/">ts1qg2s....9qtdtzc</a></Cards.RightItemDetail>
                      <Cards.RightItemDetail><i>10 minutes ago</i></Cards.RightItemDetail>
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
                          <Arrow />
                        </Cards.ItemLogo>
                        TX #:&nbsp;<a href="/">7145c5....001225</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Miner Reward</Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Amount: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                    {/* ----- Right Side / Bottom Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.RightItemDetail>To:&nbsp;<a href="/">ts1qg2s....9qtdtzc</a></Cards.RightItemDetail>
                      <Cards.RightItemDetail><i>10 minutes ago</i></Cards.RightItemDetail>
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
                          <Arrow />
                        </Cards.ItemLogo>
                        TX #:&nbsp;<a href="/">7145c5....001225</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Miner Reward</Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Amount: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                    {/* ----- Right Side / Bottom Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.RightItemDetail>To:&nbsp;<a href="/">ts1qg2s....9qtdtzc</a></Cards.RightItemDetail>
                      <Cards.RightItemDetail><i>10 minutes ago</i></Cards.RightItemDetail>
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
                          <Arrow />
                        </Cards.ItemLogo>
                        TX #:&nbsp;<a href="/">7145c5....001225</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Miner Reward</Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Amount: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                    {/* ----- Right Side / Bottom Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.RightItemDetail>To:&nbsp;<a href="/">ts1qg2s....9qtdtzc</a></Cards.RightItemDetail>
                      <Cards.RightItemDetail><i>10 minutes ago</i></Cards.RightItemDetail>
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
                          <Arrow />
                        </Cards.ItemLogo>
                        TX #:&nbsp;<a href="/">7145c5....001225</a>
                      </Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Miner Reward</Cards.LeftItemDetail>
                      <Cards.LeftItemDetail>Amount: 2,000 HNS</Cards.LeftItemDetail>
                    </Cards.SummaryItemContent>
                    {/* ----- Right Side / Bottom Side ----- */}
                    <Cards.SummaryItemContent>
                      <Cards.RightItemDetail>To:&nbsp;<a href="/">ts1qg2s....9qtdtzc</a></Cards.RightItemDetail>
                      <Cards.RightItemDetail><i>10 minutes ago</i></Cards.RightItemDetail>
                    </Cards.SummaryItemContent>
                  </Cards.SummaryItem>
                </Cards.SummaryItemContainer>

              </Cards.SummaryContainer>
            </Cards.Content>

          </Cards.Card>
        </Home.IndividualCardContainer>
      </RecentTXSContainer>
    )
  }
}
