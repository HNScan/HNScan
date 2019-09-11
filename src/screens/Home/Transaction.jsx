import React, { Component } from 'react';
import * as Cards from '../../components/Cards/Cards';
import * as Util from '../../util/util';
import Arrow from '../../components/Logos/rightArrow';

export default class Transaction extends Component {
  render() {
    return (
      // ----- TX Details -----
      <Cards.SummaryItemContainer>
        <Cards.SummaryItem>
          {/* ----- Left Side / Top Side ----- */}
          <Cards.SummaryItemContent>
            <Cards.LeftItemDetail>
              <Cards.ItemLogo>
                <Arrow />
              </Cards.ItemLogo>
              TX #:&nbsp;<a href={"/tx/" + this.props.txs.hash}>{Util.truncateHash(this.props.txs.hash)}</a>
            </Cards.LeftItemDetail>
            <Cards.LeftItemDetail>Amount: {Util.hnsValues(Util.sumTxOutputs(this.props.txs.outputs))}</Cards.LeftItemDetail>
            <Cards.LeftItemDetail>Fee: {Util.hnsValues(this.props.txs.fee)}</Cards.LeftItemDetail>
          </Cards.SummaryItemContent>
          {/* ----- Right Side / Bottom Side ----- */}
          <Cards.SummaryItemContent>
            <Cards.RightItemDetail><i>{Util.timeAgo(this.props.txs.time)}</i></Cards.RightItemDetail>
          </Cards.SummaryItemContent>
        </Cards.SummaryItem>
      </Cards.SummaryItemContainer>
    )
  }
}
