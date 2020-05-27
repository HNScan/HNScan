import React, { Suspense } from "react";
import styled from "styled-components";
import { useQuery } from "@urkellabs/ucl";

//Components
import NetworkSummary from "components/home/NetworkSummary";
import RecentTransactions from "components/home/RecentTransactions";
import RecentBlocks from "components/home/RecentBlocks";

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
  @media (min-width: 768px) {
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
  const { data: summary } = useQuery("/summary");
  const { data: blocks } = useQuery("/blocks", { limit: 5 });
  const { data: txs } = useQuery("/txs", { limit: 5 });

  //All of these below should just be containers. @todo
  return (
    <>
      <HorizontalContainer>
        <NetworkSummary info={summary} />
      </HorizontalContainer>
      <VerticalContainer>
        <IndividualCardContainer>
          <RecentTransactions txs={txs.result} />
        </IndividualCardContainer>
        <IndividualCardContainer>
          <RecentBlocks blocks={blocks.result} />
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
