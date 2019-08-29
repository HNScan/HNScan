import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';


export default class HomeScreen extends Component {
  render() {
    return (
      // Cards Container
      <Home.ContentContainer>

        {/* Horizontal card container */}
        <Home.HorizontalContainer>
          <Cards.Card>
            <Cards.Header>
              <Cards.HeaderTitle>Network Summary</Cards.HeaderTitle>
            </Cards.Header>
            <Cards.Content>

            {/* ----- Network Summary - Top Row ----- */}
              <Cards.HorizontalContainer>
                {/* ----- Column 1 ----- */}
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Hashrate</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      <span>200.00</span>
                      <span> KH/s</span>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
                {/* ----- Column 2 ----- */}
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Unconfirmed</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      <span>-</span>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
                {/* ----- Column 3 ----- */}
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Network</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      <span>testnet</span>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
              </Cards.HorizontalContainer>

            {/* ----- Network Summary - Bottom Row ----- */}
              <Cards.HorizontalContainer>
                {/* ----- Column 1 ----- */}
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Names Registered</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      <span>550</span>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
                {/* ----- Column 2 ----- */}
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Difficulty</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      3.295 x 10
                      <sup>-2</sup>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
                {/* ----- Column 3 ----- */}
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Chainwork</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      3.62 x 10
                      <sup>13</sup>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
              </Cards.HorizontalContainer>

            </Cards.Content>
          </Cards.Card>
        </Home.HorizontalContainer>

        {/* Vertical card container */}
        <Home.VerticalContainer>
          <Home.IndividualCardContainer>
            <Cards.Card>
              <Cards.Header>
                <Cards.HeaderTitle>Recent Transactions</Cards.HeaderTitle>
              </Cards.Header>
            </Cards.Card>
          </Home.IndividualCardContainer>
          <Home.IndividualCardContainer>
            <Cards.Card>
              <Cards.Header>
                <Cards.HeaderTitle>Blocks</Cards.HeaderTitle>
                <Cards.HeaderLink href="/blocks">View All</Cards.HeaderLink>
              </Cards.Header>
            </Cards.Card>
          </Home.IndividualCardContainer>
        </Home.VerticalContainer>

      </Home.ContentContainer>
    )
  }
}
