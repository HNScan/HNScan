import React, { Suspense, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useResource, useResultCache } from "rest-hooks";
import AddressResource from "../resources/AddressResource";
import TransactionResource from "../resources/TransactionResource";
import TransactionList from "../components/TransactionList";
import Pagination from "../components/Pagination";
import * as Cards from "../components/Cards/Cards";

import { hnsValues } from "../util/util";

const Wrapper = styled.div`
  margin: 50px 24px 60px;
`;

const AddressWrapper = styled.div`
  width: 100%;
  word-wrap: break-word;
  margin-bottom: 20px;
  padding: 10px;
`;

const AddressHash = styled.div`
  font-size: 16px;
`;

const AddressTitle = styled(AddressHash)`
  font-weight: 700;
`;

//Need some memorization here... Balance for some of these guys takes awhile.
function AddressView({ hash, page, changePage, url }) {
  //@todo have this return the number of ALL transactions. Then put that into the transactionList component.
  const address = useResource(AddressResource.detailShape(), {
    hash
  });
  //@todo make this better
  const limit = 10;
  const offset = (page - 1) * limit;
  const txs = useResource(TransactionResource.listShape(), {
    address: hash,
    limit,
    offset
  });
  ////@todo remove limit from the api, it's useless. Also remove offset.
  const { total } = useResultCache(TransactionResource.listShape(), {
    address: hash,
    limit,
    offset
  });
  const pages = Math.ceil(total / limit);

  return (
    <Wrapper>
      <AddressWrapper>
        <AddressTitle>Address</AddressTitle>
        <AddressHash>{address.hash}</AddressHash>
      </AddressWrapper>
      {/* ------- Top Card ------ */}
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>Address Summary</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>
          <Cards.HorizontalContainer>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Received</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {hnsValues(address.received)}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Spent</Cards.ItemLabel>
                <Cards.ItemDetail>{hnsValues(address.spent)}</Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Balance</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {hnsValues(address.confirmed)}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
          </Cards.HorizontalContainer>
        </Cards.Content>
      </Cards.Card>
      <TransactionList txs={txs} />
      <Pagination
        totalPages={pages}
        page={page}
        url={url}
        changePage={changePage}
      />
      {/* Bottom Card */}
      {/* <Cards.Card> */}
      {/*   <Cards.Header> */}
      {/*     <Cards.HeaderTitle>XXXX Transactions</Cards.HeaderTitle> */}
      {/*   </Cards.Header> */}
      {/*   <Cards.Content> */}
      {/*     <Detail.Wrapper> */}
      {/*     </Detail.Wrapper> */}
      {/*   </Cards.Content> */}
      {/* </Cards.Card> */}
    </Wrapper>
  );
}

//@todo if someone requests a wrong address (IE wrong network, help them understand). Show a screen for that.
export default function Address() {
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
  const { hash } = useParams();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AddressView
          hash={hash}
          page={page}
          changePage={changePage}
          url={"/address/" + hash}
        />
      </Suspense>
    </>
  );
}