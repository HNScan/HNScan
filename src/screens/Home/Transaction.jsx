import React, { Component } from 'react';
import * as Cards from '../../components/Cards/Cards';
import * as Util from '../../util/util';
import Arrow from '../../components/Logos/rightArrow';

export default class Transaction extends Component {
  render() {
    const txHash = this.props.tx.hash;
    const outputs = this.props.tx.outputs;
    const fee = this.props.tx.fee;
    const time = this.props.tx.time;

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
              TX #:&nbsp;<a className="hnscan-link" href={"/tx/" + txHash}>{Util.truncateHash(txHash)}</a>
            </Cards.LeftItemDetail>
            <Cards.LeftItemDetail>Amount: {Util.hnsValues(Util.sumTxOutputs(outputs))}</Cards.LeftItemDetail>
            <Cards.LeftItemDetail>Fee: {Util.hnsValues(fee)}</Cards.LeftItemDetail>
          </Cards.SummaryItemContent>
          {/* ----- Right Side / Bottom Side ----- */}
          <Cards.SummaryItemContent>
            <Cards.RightItemDetail><i>{Util.timeAgo(time)}</i></Cards.RightItemDetail>
          </Cards.SummaryItemContent>
        </Cards.SummaryItem>
      </Cards.SummaryItemContainer>
    )
  }
}
