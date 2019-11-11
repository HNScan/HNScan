import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useResource, useResultCache } from "rest-hooks";
import { usePage } from "@urkellabs/ucl";

// Components
import NameSummary from "components/name/NameSummary";
import NameAdvanced from "components/name/NameAdvanced";
import NameHistory from "components/name/NameHistory";

// Resources
import NameHistoryResource from "resources/NameHistoryResource";
import NameResource from "resources/NameResource";

//@todo remove this.

const NameRecords = () => <div>todo</div>;

function NameView({ name, page, changePage, url }) {
  //Run these in parallel
  const nameData = useResource(NameResource.detailShape(), { name });
  //@todo move this to NameHistory component, since we want to be able to filter it effectively.
  const history = useResource(NameHistoryResource.listShape(), { name });
  const { limit, total } = useResultCache(NameHistoryResource.listShape(), {
    name
  });
  const pages = Math.ceil(total / limit);
  return (
    <>
      <NameSummary name={nameData} />
      <NameAdvanced name={nameData} />
      {name.records && <NameRecords records={name.records} />}
      <NameHistory
        history={history}
        page={page}
        pages={pages}
        url={"/name/" + name}
      />
    </>
  );
}

export default function Name() {
  const page = usePage();
  const { name } = useParams();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NameView name={name} page={page} />
      </Suspense>
    </>
  );
}
