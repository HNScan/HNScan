import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { usePage, useQuery } from "@urkellabs/ucl";

// Components
import AddressSummary from "components/address/AddressSummary";
import AddressSkeleton from "components/address/AddressSkeleton";

// Containers
import TransactionList from "containers/TransactionList";

//@todo if someone requests a wrong address (IE wrong network, help them understand). Show a screen for that.
//@todo show a QR code component here.
//@todo Allow a copy button for the QR code as well, if we implement it.
function AddressView({ hash, page, url }) {
  const { data: address } = useQuery("/addresses/" + hash);

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
    <Suspense fallback={<AddressSkeleton />}>
      <AddressView hash={hash} page={page} />
    </Suspense>
  );
}
