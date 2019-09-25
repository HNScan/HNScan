import React from "react";
import { useResource } from "rest-hooks";
import NetworkResource from "../../resources/NetworkResource";

import * as HomeComponents from "./styled-components";

import NetworkSummary from "./NetworkSummary";
// import RecentTransactions from './RecentTransactions';
// import RecentBlocks from './RecentBlocks';

export default function Home() {
  //API Calls
  const summary = useResource(NetworkResource.detailShape(), {});
  console.log(summary);

  return (
    <HomeComponents.ContentContainer>
      <HomeComponents.HorizontalContainer>
        <NetworkSummary info={summary} />
      </HomeComponents.HorizontalContainer>
      <HomeComponents.VerticalContainer>
        {/* <RecentTransactions txs={this.state.txs} loading={this.state.loading} /> */}
        {/* <RecentBlocks blocks={this.state.blocks.result} loading={this.state.loading} /> */}
      </HomeComponents.VerticalContainer>
    </HomeComponents.ContentContainer>
  );
}
