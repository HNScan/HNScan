import React, { Component } from 'react';
import * as Cards from '../../components/Cards/Cards';
import * as Util from '../../helper/util';
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
              Block #:&nbsp;<a href={"/block/" + this.props.block.height}>
                {this.props.block.height}
              </a>
            </Cards.LeftItemDetail>
            <Cards.LeftItemDetail>
              Mined By: <a href={"/address/" + this.props.block.txs[0].outputs[0].address}>
                {this.props.block.txs[0].outputs[0].address}
              </a>
            </Cards.LeftItemDetail>
            <Cards.LeftItemDetail>
              Block Reward: {Util.hnsValues(this.props.block.txs[0].outputs[0].value)}
            </Cards.LeftItemDetail>
          </Cards.SummaryItemContent>
        </Cards.SummaryItem>
      </Cards.SummaryItemContainer>
    )
  }
}
