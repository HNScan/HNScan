import React, { Suspense, useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useResource, useResultCache } from "rest-hooks";
import { Card } from "@urkellabs/ucl";

// Components
import Pagination from "components/layout/Pagination";
import PeerInfo from "components/PeerInfo";
import Map from "../../containers/MapContainer";

// Resources
import PeerResource from "../../resources/PeerResource";

// export default class PeersScreen extends Component {
const PeersContainer = ({ pages, page, url, changePage }) => {
  // @todo Should come from filtering.
  const limit = 10;
  const peers = useResource(PeerResource.listShape(), { page });
  const { total } = useResultCache(PeerResource.listShape(), {
    page
  });

  return (
    <>
      <PeerInfo peers={peers} />
      <Pagination
        totalPages={Math.ceil(total / limit)}
        page={page}
        url={url}
        changePage={changePage}
      />
    </>
  );
};

export default function Peers() {
  //@todo get current page NEEDS to be a custom hook.
  const location = useLocation();
  let currentPage = 1;
  let query = queryString.parse(location.search);
  // let currentPage = 1;
  if (!isNaN(parseInt(query.p)) && query.p > 0) {
    currentPage = parseInt(query.p);
  }

  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    let currentPage = 1;
    let query = queryString.parse(location.search);
    // let currentPage = 1;
    if (!isNaN(parseInt(query.p)) && query.p > 0) {
      currentPage = parseInt(query.p);
    }
    setPage(currentPage);
  }, [location.search]);
  const history = useHistory();

  //@todo this is actually probably bad. Don't pass a state changer down, let's just have Pagination use Link components.
  const changePage = page => {
    // Update Page Location
    // I wonder if this will work...
    history.push({ search: "?p=" + page });
    setPage(page);
  };
  return (
    <>
      <Suspense fallback={<div>Loading Chart...</div>}>
        <Card>
          <Map />
        </Card>
      </Suspense>
      <Suspense fallback={<div>Loading Peers...</div>}>
        <PeersContainer page={page} changePage={changePage} url={"/peers"} />
      </Suspense>
    </>
  );
}
