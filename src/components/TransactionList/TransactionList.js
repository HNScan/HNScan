import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pagination from "../layout/Pagination";
//@todo fix this
import Card from "../styles/Card";
import { InputList, OutputList } from "./PutsList";
import { title } from "./util";
import TransactionResource from "../../resources/TransactionResource";
import { useResource, useResultCache } from "rest-hooks";

const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--border-color);

  &:first-child {
    padding: 0;
  }

  &:last-child {
    padding: 0;
    border-bottom: 0;
  }
`;

const HashWrapper = styled.div`
  border-bottom: 1px solid var(--border-color);
  display: flex;
  padding: 10px 0 10px 0;
`;

//@todo Highlight the Input/Output that is TO the address here.
//Just make this a filter option (so it could be used on the block page), but auto enable it when coming from the Address page, that way we can keep this same component.
//Filter options.
//To/From
//Covenant Actions
const TransactionList = ({ url, page, from }) => {
  //@todo these will come from filtering options.
  const limit = 10;
  const offset = (page - 1) * limit;
  from.limit = limit;
  from.offset = offset;
  const txs = useResource(TransactionResource.listShape(), from);
  const { total } = useResultCache(TransactionResource.listShape(), from);
  const pages = Math.ceil(total / limit);
  const renderTransactions = txs.map((tx, index) => (
    <Container key={index}>
      <HashWrapper>
        Tx {index + 1}:&nbsp;<Link to={"/tx/" + tx.hash}>{tx.hash}</Link>
      </HashWrapper>
      <div className="columns">
        <div className="column is-half">
          <InputList inputs={tx.inputs} />
        </div>
        <div className="column is-half">
          <OutputList outputs={tx.outputs} />
        </div>
      </div>
    </Container>
  ));
  return (
    <>
      <Card>
        <Card.Header>
          <Card.HeaderTitle>
            {title(total, "Transaction")} ({offset + 1}-{offset + txs.length})
          </Card.HeaderTitle>
        </Card.Header>
        <Card.Content>{renderTransactions}</Card.Content>
      </Card>
      <Pagination totalPages={pages} page={page} url={url} />
    </>
  );
};

export default TransactionList;
