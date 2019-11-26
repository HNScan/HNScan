import React, { Suspense } from "react";
import { Pagination, usePage, useQuery } from "@urkellabs/ucl";

// Components
import PeerInfo from "components/PeerInfo";

//Containers
import Map from "containers/NodeMap";

const PeersContainer = ({ page }) => {
  const { data } = useQuery("/peers/", { page });

  return (
    <>
      <PeerInfo peers={data.result} />
      <Pagination totalPages={Math.ceil(data.total / data.limit)} page={page} />
    </>
  );
};

export default function Peers() {
  const page = usePage();
  return (
    <>
      <Suspense fallback={<div>Loading Chart...</div>}>
        <Map />
      </Suspense>
      <Suspense fallback={<div>Loading Peers...</div>}>
        <PeersContainer page={page} />
      </Suspense>
    </>
  );
}
