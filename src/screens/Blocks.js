import React, { Suspense } from "react";
import { usePage, useQuery } from "@urkellabs/ucl";

// Resources
// import { useResource, useResultCache } from "rest-hooks";
// import BlockResource from "resources/BlockResource";

// Components
import { BlocksTable, BlocksSkeleton } from "components/block/BlocksTable";

function BlocksView({ page }) {
  const pageOffset = (page - 1) * 25;
  // const blocks = useResource(BlockResource.listShape(), { offset: pageOffset });
  // const { limit, total } = useResultCache(BlockResource.listShape(), {
  //   offset: pageOffset
  // });
  // const params = useMemo(() => ({ p: page }), [page]);

  //@todo build out support for p in hnscan-backend
  // const { data } = useQuery("/blocks/", { p: page });
  // @todo make this a custom hook.
  const { data } = useQuery("/blocks/", { offset: pageOffset });

  const pages = Math.ceil(data.total / data.limit);

  return <BlocksTable blocks={data.result} pages={pages} page={page} />;
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
