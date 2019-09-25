import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//@todo fix this
import * as Cards from "../Cards/Cards";
import { InputList, OutputList } from "./PutsList";
import { title } from "./util";

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

const TransactionList = props => {
  const txs = props.txs;
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
    <Cards.Card>
      <Cards.Header>
        <Cards.HeaderTitle>
          {title(props.txs.length, "Transaction")}
        </Cards.HeaderTitle>
      </Cards.Header>
      <Cards.Content>{renderTransactions}</Cards.Content>
    </Cards.Card>
  );
};

export default TransactionList;
