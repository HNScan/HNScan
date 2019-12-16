import React, { Suspense } from "react";
import { Pagination, usePage, useQuery } from "@urkellabs/ucl";

// Components
import PeerInfo from "components/PeerInfo";

//Containers
import NodeMap from "containers/NodeMap";

const PeersContainer = ({ page }) => {
  const limit = 10;
  const { data } = useQuery("/peers/", { page });

  return (
    <>
      <PeerInfo peers={data.result} />
      <Pagination totalPages={Math.ceil(data.total / limit)} page={page} />
    </>
  );
};

export default function Peers() {
  const page = usePage();
  return (
    <>
      <Suspense fallback={<div>Loading Chart...</div>}>
        <NodeMap />
      </Suspense>
      <Suspense fallback={<div>Loading Peers...</div>}>
        <PeersContainer page={page} />
      </Suspense>
    </>
  );
}
