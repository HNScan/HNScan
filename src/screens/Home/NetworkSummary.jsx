import React, { Component } from "react";
import * as Cards from "../../components/Cards/Cards";
import * as Util from "../../util/util";
import styled from "styled-components";

const NetworkSummaryContainer = styled.div`
  width: 100%;
`;

function handleUnconfirmed(data, size) {
  if (data === 0) {
    return "-";
  } else {
    return `${data} txs (${size[0]} ${size[1].abbreviation}B)`;
  }
}

export default class NetworkSummary extends Component {
  render() {
    
    let hashrate = Util.formatLargeNumber(this.props.info.hashrate, 3);
    let unconfirmed = this.props.info.unconfirmed;
    let memSize = Util.formatLargeNumber(this.props.info.unconfirmedSize, 2);
    let network = this.props.info.network;
    let difficulty = Util.sciNotation(this.props.info.difficulty, 3);
    let chainwork = Util.sciNotation(parseInt("0x" + this.props.info.chainWork), 2);
    let registeredNames = this.props.info.registeredNames.length;

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
                    <span>{handleUnconfirmed(unconfirmed, memSize)}</span>
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
                    <span>{registeredNames}</span>
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
    );
  }
}
