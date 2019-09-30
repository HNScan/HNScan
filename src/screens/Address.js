import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useResource } from "rest-hooks";

// Components
import ContentContainer from "../components/ContentContainer";
import AddressSummary from "../components/AddressSummary";
import TransactionList from "../components/TransactionList";
import AddressSkeleton from "../components/AddressSkeleton";

// Hooks
import usePage from "../hooks/usePage";

// Resources
import AddressResource from "../resources/AddressResource";

//@todo if someone requests a wrong address (IE wrong network, help them understand). Show a screen for that.
//@todo show a QR code component here.
function AddressView({ hash, page, url }) {
  const address = useResource(AddressResource.detailShape(), {
    hash
  });
  return (
    <ContentContainer>
      <AddressSummary
        hash={hash}
        received={address.received}
        spent={address.spent}
        confirmed={address.confirmed}
      />
      <TransactionList
        url={"/address/" + hash}
        page={page}
        from={{ address: hash }}
      />
    </ContentContainer>
  );
}

export default function Address() {
  const page = usePage();
  const { hash } = useParams();
  return (
    <>
      <Suspense
        fallback={
          <ContentContainer>
            <AddressSummary />
          </ContentContainer>
        }
      >
        <AddressView hash={hash} page={page} />
      </Suspense>
    </>
  );
}
