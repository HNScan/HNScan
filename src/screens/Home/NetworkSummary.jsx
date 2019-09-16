import React, { Component } from 'react';
import * as Cards from '../../components/Cards/Cards';
import * as Util from '../../util/util';
import styled from 'styled-components';

const NetworkSummaryContainer = styled.div`
  width: 100%;
`;


export default class NetworkSummary extends Component {
  render() {
    if (this.props.loading) {
      return (
        //TODO: Need a Skeleton Here
        <NetworkSummaryContainer>
          <Cards.Card>
            <Cards.Header>
              <Cards.HeaderTitle>Network Summary</Cards.HeaderTitle>
            </Cards.Header>
            <div>loading...</div>
          </Cards.Card>
        </NetworkSummaryContainer>
      )
    } else {

      let hashrate = Util.formatLargeNumber(this.props.info.mining.networkhashps, 3);
      let unconfirmed = Util.formatLargeNumber(this.props.info.mempool.tx);
      let network = this.props.info.network;
      let difficulty = Util.sciNotation(this.props.info.chain.difficulty, 3);
      let chainwork = Util.sciNotation(parseInt("0x" + this.props.info.chain.chainWork), 2);

      return (
        <NetworkSummaryContainer>
          <Cards.Card>
            <Cards.Header>
              <Cards.HeaderTitle>Network Summary</Cards.HeaderTitle>
            </Cards.Header>
            <Cards.Content>
            {/* ----- Network Summary - Top Row ----- */}
              <Cards.HorizontalContainer>
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Hashrate</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      <span>{hashrate[0].toString()}</span>
                      <span> {hashrate[1].abbreviation}H/s</span>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Unconfirmed</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      <span>{unconfirmed[0].toString()}</span>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Network</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      <span>{network}</span>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
              </Cards.HorizontalContainer>
            {/* ----- Network Summary - Bottom Row ----- */}
              <Cards.HorizontalContainer>
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Names Registered</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      <span>550</span>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Difficulty</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      {difficulty[0]} x 10<sup>{difficulty[1]}</sup>
                    </Cards.ItemDetail>
                  </Cards.ItemContainer>
                </Cards.Column>
                <Cards.Column>
                  <Cards.ItemContainer>
                    <Cards.ItemLabel>Chainwork</Cards.ItemLabel>
                    <Cards.ItemDetail>
                      {chainwork[0]} x 10<sup>{chainwork[1]}</sup>
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
}
