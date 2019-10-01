import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useResource } from "rest-hooks";

// Components
import AddressSummary from "../components/AddressSummary";
import TransactionList from "../components/TransactionList";
// import AddressSkeleton from "../components/AddressSkeleton";

// Hooks
import usePage from "../hooks/usePage";

// Resources
import AddressResource from "../resources/AddressResource";

//@todo export this to a component
const AddressSkeleton = () => (
  <>
    <AddressSummary />
  </>
);

//@todo if someone requests a wrong address (IE wrong network, help them understand). Show a screen for that.
//@todo show a QR code component here.
function AddressView({ hash, page, url }) {
  const address = useResource(AddressResource.detailShape(), {
    hash
  });
  return (
    <>
      <AddressSummary
        hash={hash}
        received={address.received}
        spent={address.spent}
        confirmed={address.confirmed}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <TransactionList
          url={"/address/" + hash}
          page={page}
          from={{ address: hash }}
        />
      </Suspense>
    </>
  );
}

export default function Address() {
  const page = usePage();
  const { hash } = useParams();
  return (
    <>
      <Suspense fallback={<AddressSkeleton />}>
        <AddressView hash={hash} page={page} />
      </Suspense>
    </>
  );
}
