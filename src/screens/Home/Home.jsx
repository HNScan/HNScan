import React from "react";
import { useResource } from "rest-hooks";
import NetworkResource from "../../resources/NetworkResource";
import BlockResource from "../../resources/BlockResource";
import TransactionResource from "../../resources/TransactionResource";

import * as HomeComponents from "./styled-components";

import NetworkSummary from "./NetworkSummary";
import RecentTransactions from './RecentTransactions';
import RecentBlocks from './RecentBlocks';

export default function Home() {
  //API Calls
  const summary = useResource(NetworkResource.detailShape(), {});
  const blocks = useResource(BlockResource.listShape(), { limit: 5 });
  const txs = useResource(TransactionResource.listShape(), { limit: 5 });

  return (
    <HomeComponents.ContentContainer>
      <HomeComponents.HorizontalContainer>
        <NetworkSummary info={summary} />
      </HomeComponents.HorizontalContainer>
      <HomeComponents.VerticalContainer>
        <RecentTransactions txs={txs} />
        <RecentBlocks blocks={blocks} />
      </HomeComponents.VerticalContainer>
    </HomeComponents.ContentContainer>
  );
}
