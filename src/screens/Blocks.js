import React, { Suspense } from "react";
import { useResource, useResultCache } from "rest-hooks";

// Components
import Pagination from "../components/Pagination";
import * as Cards from "../components/Cards/Cards";
import BlockList from "../components/BlockList";

// Hooks
import usePage from "../hooks/usePage";

// Resources
import BlockResource from "../resources/BlockResource";

function BlocksView({ page }) {
  const pageOffset = (page - 1) * 25;
  const blocks = useResource(BlockResource.listShape(), { offset: pageOffset });
  const { limit, total } = useResultCache(BlockResource.listShape(), {
    offset: pageOffset
  });
  const pages = Math.ceil(total / limit);
  return (
    <>
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>HNS Blocks</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>
          <BlockList blocks={blocks} />
        </Cards.Content>
      </Cards.Card>
      <Pagination totalPages={pages} page={page} url="/blocks" />
    </>
  );
}

export default function Blocks(props) {
  const page = usePage();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BlocksView page={page} />
      </Suspense>
    </>
  );
}
