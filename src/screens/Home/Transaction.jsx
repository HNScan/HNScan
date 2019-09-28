import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as Cards from '../../components/Cards/Cards';
import * as Util from '../../util/util';
import Arrow from '../../components/Logos/rightArrow';

export default class Transaction extends Component {
  render() {
    const txHash = this.props.tx.txid;
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
              TX #:&nbsp;<Link className="hnscan-link" to={"/tx/" + txHash}>{Util.truncateHash(txHash)}</Link>
            </Cards.LeftItemDetail>
            <Cards.LeftItemDetail>Amount: {Util.hnsValues(Util.sumTxOutputs(outputs))}</Cards.LeftItemDetail>
            <Cards.LeftItemDetail>Fee: {Util.hnsValues(fee) || "0 HNS"}</Cards.LeftItemDetail>
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
