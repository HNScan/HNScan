import React, { Suspense } from "react";
import { useResource } from "rest-hooks";
import styled from "styled-components";

//Components
import NetworkSummary from "../components/home/NetworkSummary";
import RecentTransactions from "../components/home/RecentTransactions";
import RecentBlocks from "../components/home/RecentBlocks";

// Resources
import NetworkResource from "../resources/NetworkResource";
import BlockResource from "../resources/BlockResource";
import TransactionResource from "../resources/TransactionResource";

//@todo
//styled components
export const HorizontalContainer = styled.div`
  padding: 12px;
  width: 100%;
`;

export const VerticalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const IndividualCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  @media (min-width: 1024px) {
    padding: 24px 12px;
  }
`;

//@todo skeleton.
function HomeView() {
  //API Calls
  const [summary, blocks, txs] = useResource(
    [NetworkResource.detailShape(), {}],
    [BlockResource.listShape(), { limit: 5 }],
    [TransactionResource.listShape(), { limit: 5 }]
  );

  return (
    <>
      <HorizontalContainer>
        <NetworkSummary info={summary} />
      </HorizontalContainer>
      <VerticalContainer>
        <IndividualCardContainer>
          <RecentTransactions txs={txs} />
        </IndividualCardContainer>
        <IndividualCardContainer>
          <RecentBlocks blocks={blocks} />
        </IndividualCardContainer>
      </VerticalContainer>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <HomeView />
      </Suspense>
    </>
  );
}
