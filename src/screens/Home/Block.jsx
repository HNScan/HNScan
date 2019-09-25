import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';
import * as Util from '../../util/util';
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
                Block #:&nbsp;<a className="hnscan-link" href={"/block/" + this.props.block.height}>
                  {this.props.block.height}
                </a>
            </Cards.LeftItemDetail>
            <Cards.LeftItemDetail>
              <Home.Miner>
                Mined By:&nbsp;<a className="hnscan-link" href={"/address/" + this.props.block.tx[0].outputs[0].address}>
                  {this.props.block.tx[0].outputs[0].address}
                </a>
              </Home.Miner>
              <Home.MobileMiner>
                Mined By: <a className="hnscan-link" href={"/address/" + this.props.block.tx[0].outputs[0].address}>
                  {Util.truncateHash(this.props.block.tx[0].outputs[0].address)}
                </a>
              </Home.MobileMiner>
            </Cards.LeftItemDetail>
            <Cards.LeftItemDetail>
              Transactions: {this.props.block.tx.length}
            </Cards.LeftItemDetail>
          </Cards.SummaryItemContent>
        </Cards.SummaryItem>
      </Cards.SummaryItemContainer>
    )
  }
}
