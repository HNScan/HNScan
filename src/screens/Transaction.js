import React, { Suspense } from "react";
import { useResource } from "rest-hooks";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Components
import Card from "components/styles/Card";
import StackedComponent from "components/Stacked/StackedComponent";
import { InputList, OutputList } from "components/shared/PutsList";

// Resources
import TransactionResource from "resources/TransactionResource";

// Util
import { timeAgo, hnsValues, sumTxOutputs } from "util/util";

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
      <Card>
        <Card.Header>
          <Card.HeaderTitle>Transaction Summary</Card.HeaderTitle>
        </Card.Header>
        <Card.Content>
          <Card.HorizontalContainer>
            <Card.Column>
              <Card.ItemContainer>
                <Card.ItemLabel>Received</Card.ItemLabel>
                <Card.ItemDetail>{timeAgo(tx.time)}</Card.ItemDetail>
              </Card.ItemContainer>
            </Card.Column>
            <Card.Column>
              <Card.ItemContainer>
                <Card.ItemLabel>Amount</Card.ItemLabel>
                <Card.ItemDetail>
                  {hnsValues(sumTxOutputs(tx.outputs))}
                </Card.ItemDetail>
              </Card.ItemContainer>
            </Card.Column>
            <Card.Column>
              <Card.ItemContainer>
                <Card.ItemLabel>Fee</Card.ItemLabel>
                <Card.ItemDetail>{hnsValues(tx.fee)}</Card.ItemDetail>
              </Card.ItemContainer>
            </Card.Column>
            <Card.Column>
              <Card.ItemContainer>
                <Card.ItemLabel>Confirmations</Card.ItemLabel>
                <Card.ItemDetail>{tx.confirmations}</Card.ItemDetail>
              </Card.ItemContainer>
            </Card.Column>
          </Card.HorizontalContainer>
        </Card.Content>
      </Card>

      {/* Bottom Card */}
      <Card>
        <Card.Header>
          <Card.HeaderTitle>Advanced</Card.HeaderTitle>
        </Card.Header>
        <Card.Content>
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
        </Card.Content>
      </Card>

      <Card>
        <Card.Header>
          <Card.HeaderTitle>TX Activity</Card.HeaderTitle>
        </Card.Header>
        <Card.Content>
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
        </Card.Content>
      </Card>
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
