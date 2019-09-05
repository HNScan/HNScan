import React, { Component } from 'react';
import * as Cards from '../../components/Cards/Cards';
import Arrow from '../../components/Logos/rightArrow';

// TODO: API call to backend for the 5 most recent transactions
// TODO: Iterate through the data and build out the txs
// TODO: Somehow pass an array of the built txs to 'RecentTransactions'

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
              TX #:&nbsp;<a href="/">7145c5....001225</a>
            </Cards.LeftItemDetail>
            <Cards.LeftItemDetail>Miner Reward</Cards.LeftItemDetail>
            <Cards.LeftItemDetail>Amount: 2,000 HNS</Cards.LeftItemDetail>
          </Cards.SummaryItemContent>
          {/* ----- Right Side / Bottom Side ----- */}
          <Cards.SummaryItemContent>
            <Cards.RightItemDetail>To:&nbsp;<a href="/">ts1qg2s....9qtdtzc</a></Cards.RightItemDetail>
            <Cards.RightItemDetail><i>10 minutes ago</i></Cards.RightItemDetail>
          </Cards.SummaryItemContent>
        </Cards.SummaryItem>
      </Cards.SummaryItemContainer>
    )
  }
}
