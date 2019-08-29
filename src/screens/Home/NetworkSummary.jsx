import React, { Component } from 'react';
import * as Cards from '../../components/Cards/Cards';
import styled from 'styled-components';

export const NetworkSummaryContainer = styled.div`
  width: 100%;
`;


export default class NetworkSummary extends Component {
  render() {
    return (
      <NetworkSummaryContainer>
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
      </NetworkSummaryContainer>
    )
  }
}
