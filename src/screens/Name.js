import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { usePage, useQuery } from "@urkellabs/ucl";

// Components
import NameSummary from "components/name/NameSummary";
import NameAdvanced from "components/name/NameAdvanced";
import NameHistory from "components/name/NameHistory";

//@todo remove this.

const NameRecords = () => <div>todo</div>;

function NameView({ name, page, changePage, url }) {
  const { data: nameData } = useQuery("/names/" + name);

  //@todo move this to NameHistory component, since we want to be able to filter it effectively.
  //@todo I don't think the previous version of this supported pagination.
  //When we move this to a container, support pagination
  const { data } = useQuery("/names/" + name + "/history");
  return (
    <>
      <NameSummary name={nameData} />
      <NameAdvanced name={nameData} />
      {name.records && <NameRecords records={name.records} />}
      <NameHistory
        history={data.result}
        page={page}
        pages={Math.ceil(data.total / data.limit)}
        url={"/name/" + name}
      />
    </>
  );
}

export default function Name() {
  const page = usePage();
  const { name } = useParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NameView name={name} page={page} />
    </Suspense>
  );
}
