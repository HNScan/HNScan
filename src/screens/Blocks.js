import React, { Suspense } from "react";
import { useResource, useResultCache } from "rest-hooks";

// Components
import Pagination from "components/layout/Pagination";
import Card from "components/styles/Card";
import BlockList from "components/block/BlockList";

// Hooks
import usePage from "hooks/usePage";

// Resources
import BlockResource from "resources/BlockResource";

function BlocksTable({ page }) {
  const pageOffset = (page - 1) * 25;
  const blocks = useResource(BlockResource.listShape(), { offset: pageOffset });
  const { limit, total } = useResultCache(BlockResource.listShape(), {
    offset: pageOffset
  });
  const pages = Math.ceil(total / limit);
  return (
    <>
      <Card>
        <Card.Header>
          <Card.HeaderTitle>HNS Blocks</Card.HeaderTitle>
        </Card.Header>
        <Card.Content>
          <BlockList blocks={blocks} />
        </Card.Content>
      </Card>
      <Pagination totalPages={pages} page={page} url="/blocks" />
    </>
  );
}

export default function Blocks(props) {
  const page = usePage();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BlocksTable page={page} />
      </Suspense>
    </>
  );
}
