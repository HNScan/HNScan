import React, { Suspense } from 'react';
import { useResource } from "rest-hooks";
import { useParams } from "react-router-dom";
import { timeAgo, hnsValues, sumTxOutputs } from "../../util/util";
import styled from 'styled-components';
import * as Cards from '../../components/Cards/Cards';
import StackedComponent from '../../components/Stacked/StackedComponent';
import TransactionResource from "../../resources/TransactionResource";
import TransactionList from "../../components/TransactionList";

const Wrapper = styled.div`
  margin: 50px 24px 60px;
`;

function TxDetailScreen({hash}) {
  const tx = useResource(TransactionResource.detailShape(), { hash });

  return (
    <Wrapper>
      {/* ------- Top Card ------ */}
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>Transaction Summary</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>
          <Cards.HorizontalContainer>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Received</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {timeAgo(tx.time)}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Amount</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {hnsValues(sumTxOutputs(tx.outputs))}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Fee</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {hnsValues(tx.fee)}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Confirmations</Cards.ItemLabel>
                <Cards.ItemDetail>
                  {tx.confirmations}
                </Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
          </Cards.HorizontalContainer>
        </Cards.Content>
      </Cards.Card>

      {/* Bottom Card */}
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>Advanced</Cards.HeaderTitle>
        </Cards.Header>
        <div className="card-content">
          <div className="columns">
            <div className="column is-half">
              <table className="table is-fullwidth">
                <tbody>
                  {/* TODO: Get Node Status */}
                  <tr><StackedComponent label="Hash" value={tx.hash} /></tr>
                  <tr><StackedComponent label="Block Height" value={tx.height} link={"/block/" + tx.height}/></tr>
                  <tr><StackedComponent label="Locktime" value={tx.locktime} /></tr>
                </tbody>
              </table>
            </div>
            <div className="column is-half">
              <table className="table is-fullwidth">
                <tbody>
                  {/* TODO: Get Node Status */}
                  <tr><StackedComponent label="Witness Hash" value={tx.witnessHash} /></tr>
                  <tr><StackedComponent label="Version" value={tx.version} /></tr>
                  <tr><StackedComponent label="Index" value={tx.index} /></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Cards.Card>
      <TransactionList txs={new Array(tx)} />
    </Wrapper>
  );
}

export default function TxDetail() {
  const { hash } = useParams();

  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <TxDetailScreen hash={hash} />
      </Suspense>
    </>
  );
}
