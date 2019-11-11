import React, { Suspense } from "react";
import { usePage } from "@urkellabs/ucl";

// Resources
import { useResource, useResultCache } from "rest-hooks";
import BlockResource from "resources/BlockResource";

// Components
import { BlocksTable, BlocksSkeleton } from "components/block/BlocksTable";

function BlocksView({ page }) {
  const pageOffset = (page - 1) * 25;
  const blocks = useResource(BlockResource.listShape(), { offset: pageOffset });
  const { limit, total } = useResultCache(BlockResource.listShape(), {
    offset: pageOffset
  });
  const pages = Math.ceil(total / limit);

  return <BlocksTable blocks={blocks} pages={pages} page={page} />;
}

export default function Blocks() {
  const page = usePage();

  return (
    <>
      <Suspense fallback={<BlocksSkeleton />}>
        <BlocksView page={page} />
      </Suspense>
    </>
  );
}
