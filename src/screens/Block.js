import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useResource } from "rest-hooks";

// Components
import TransactionList from "../components/TransactionList";
import BlockSummary from "../components/BlockSummary";
import BlockAdvanced from "../components/BlockAdvanced";

// Resources
import BlockResource from "../resources/BlockResource";

// Hooks
import usePage from "../hooks/usePage";

function BlockSkeleton() {
  return (
    <>
      <BlockSummary skeleton />
    </>
  );
}

//@todo move most of this into a component, not in here.
function BlockContainer({ height, page }) {
  const block = useResource(BlockResource.detailShape(), {
    height
  });

  return (
    <>
      <BlockSummary block={block} />
      <BlockAdvanced block={block} />
      <Suspense fallback={<div>Loading...</div>}>
        <TransactionList
          url={"/block/" + height}
          page={page}
          from={{ height }}
        />
      </Suspense>
    </>
  );
}

export default function Block() {
  const page = usePage();
  const { height } = useParams();
  return (
    <>
      <Suspense fallback={<BlockSkeleton />}>
        <BlockContainer height={height} page={page} />
      </Suspense>
    </>
  );
}
