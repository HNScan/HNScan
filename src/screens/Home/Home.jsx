import React from "react";
import { useResource } from "rest-hooks";
import NetworkResource from "../../resources/NetworkResource";
import BlockResource from "../../resources/BlockResource";

import * as HomeComponents from "./styled-components";

import NetworkSummary from "./NetworkSummary";
import RecentTransactions from './RecentTransactions';
import RecentBlocks from './RecentBlocks';

export default function Home() {
  //API Calls
  const summary = useResource(NetworkResource.detailShape(), {});
  const blocks = useResource(BlockResource.listShape(), { limit: 5 });
  const txs = () => {
    let txs = [];
    for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks[i].txs; j++) {
        // Creating our own timestamp in the txs data
        blocks[i].tx[j].time = blocks[i].time;
        txs.push(blocks[i].tx[j]);

        // When our 5 recent tx are found break the loop
        if (txs.length >= 5) {
          return txs;
        }
      }
    }
    return txs;
  }

  return (
    <HomeComponents.ContentContainer>
      <HomeComponents.HorizontalContainer>
        <NetworkSummary info={summary} />
      </HomeComponents.HorizontalContainer>
      <HomeComponents.VerticalContainer>
        <RecentTransactions txs={txs()} />
        <RecentBlocks blocks={blocks} />
      </HomeComponents.VerticalContainer>
    </HomeComponents.ContentContainer>
  );
}
