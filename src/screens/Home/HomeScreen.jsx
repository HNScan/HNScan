import React, { Component } from 'react';
import * as Home from './styled-components';
import NetworkSummary from './NetworkSummary';
import RecentTransactions from './RecentTransactions';
import RecentBlocks from './RecentBlocks';


export default class HomeScreen extends Component {
  render() {
    return (
      // Cards Container
      <Home.ContentContainer>
        <Home.HorizontalContainer>
          <NetworkSummary />
        </Home.HorizontalContainer>

        {/* TODO: Build out these two sections --> Vertical card container */}
        <Home.VerticalContainer>
          <RecentTransactions />
          <RecentBlocks />
        </Home.VerticalContainer>

      </Home.ContentContainer>
    )
  }
}
