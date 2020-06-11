import React, { Suspense } from "react";
import { usePage, useQuery } from "@urkellabs/ucl";

// Components
import { NamesSkeleton, NamesTable } from "components/name/NamesTable";

function NamesView({ page }) {
  const pageOffset = (page - 1) * 25;
  const { data } = useQuery("/names", { offset: pageOffset });
  const pages = Math.ceil(data.total / 25);

  return <NamesTable names={data.result} page={page} pages={pages} />;
}

export default function Names() {
  const page = usePage();

  return (
    <>
      <Suspense fallback={<NamesSkeleton />}>
        <NamesView page={page} />
      </Suspense>
    </>
  );
}
