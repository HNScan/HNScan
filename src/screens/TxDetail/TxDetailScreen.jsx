import React, { Suspense } from "react";
import { useResource } from "rest-hooks";
import { useParams } from "react-router-dom";
import { timeAgo, hnsValues, sumTxOutputs } from "../../util/util";
import {
  InputList,
  OutputList
} from "../../components/TransactionList/PutsList";
import styled from "styled-components";
import * as Cards from "../../components/Cards/Cards";
import StackedComponent from "../../components/Stacked/StackedComponent";
import TransactionResource from "../../resources/TransactionResource";

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

function TxDetailScreen({ hash }) {
  const tx = useResource(TransactionResource.detailShape(), { hash });

  return (
    <>
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
                <Cards.ItemDetail>{timeAgo(tx.time)}</Cards.ItemDetail>
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
                <Cards.ItemDetail>{hnsValues(tx.fee)}</Cards.ItemDetail>
              </Cards.ItemContainer>
            </Cards.Column>
            <Cards.Column>
              <Cards.ItemContainer>
                <Cards.ItemLabel>Confirmations</Cards.ItemLabel>
                <Cards.ItemDetail>{tx.confirmations}</Cards.ItemDetail>
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
        <Cards.Content>
          <div className="columns">
            <div className="column is-half">
              <table className="table is-fullwidth">
                <tbody>
                  {/* TODO: Get Node Status */}
                  <tr>
                    <StackedComponent label="Hash" value={tx.hash} />
                  </tr>
                  <tr>
                    <StackedComponent
                      label="Block Height"
                      value={tx.height}
                      link={"/block/" + tx.height}
                    />
                  </tr>
                  <tr>
                    <StackedComponent label="Locktime" value={tx.locktime} />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column is-half">
              <table className="table is-fullwidth">
                <tbody>
                  {/* TODO: Get Node Status */}
                  <tr>
                    <StackedComponent
                      label="Witness Hash"
                      value={tx.witnessHash}
                    />
                  </tr>
                  <tr>
                    <StackedComponent label="Version" value={tx.version} />
                  </tr>
                  <tr>
                    <StackedComponent label="Index" value={tx.index} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Cards.Content>
      </Cards.Card>

      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>TX Activity</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>
          <Container>
            <div className="columns">
              <div className="column is-half">
                <InputList inputs={tx.inputs} />
              </div>
              <div className="column is-half">
                <OutputList outputs={tx.outputs} />
              </div>
            </div>
          </Container>
        </Cards.Content>
      </Cards.Card>
    </>
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
