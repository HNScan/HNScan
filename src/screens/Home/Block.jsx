import React, { Component } from 'react';
import * as Cards from '../../components/Cards/Cards';
import BlockLogo from '../../components/Logos/block';

export default class Block extends Component {
  render() {
    return (
      // ----- Block Details -----
      <Cards.SummaryItemContainer>
        <Cards.SummaryItem>
          {/* ----- Left Side / Top Side ----- */}
          <Cards.SummaryItemContent>
            <Cards.LeftItemDetail>
              <Cards.ItemLogo>
                <BlockLogo />
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
    )
  }
}
