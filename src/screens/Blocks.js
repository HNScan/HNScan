import React, { Suspense } from "react";
import { usePage, useQuery, EmptyState } from "@urkellabs/ucl";

// Components
import { BlocksTable, BlocksSkeleton } from "components/block/BlocksTable";

function BlocksView({ page }) {
  const pageOffset = (page - 1) * 25;

  const { data } = useQuery("/blocks", { offset: pageOffset });

  const pages = Math.ceil(data.total / 25);

  if (data.result.length === 0) {
    return <EmptyState />;
  }

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
