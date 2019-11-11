import React, { Suspense } from "react";
import { useResource } from "rest-hooks";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Card, Table } from "@urkellabs/ucl";

// Components
import StackedData from "components/shared/StackedData";
import { InputList, OutputList } from "components/shared/PutsList";

// Resources
import TransactionResource from "resources/TransactionResource";

// Util
import { timeAgo, hnsValues, sumTxOutputs } from "utils/util";

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
      <Card title="Transaction Summary">
        <Row>
          <Col mobile={12} tablet>
            <StackedData label="Received" value={timeAgo(tx.time)} />
          </Col>
          <Col mobile={12} tablet>
            <StackedData
              label="Amount"
              value={hnsValues(sumTxOutputs(tx.outputs))}
            />
          </Col>
          <Col mobile={12} tablet>
            <StackedData label="Fee" value={hnsValues(tx.fee)} />
          </Col>
          <Col mobile={12} tablet>
            <StackedData label="Confirmation" value={tx.confirmations} />
          </Col>
        </Row>
      </Card>

      {/* ------- Bottom Card ------ */}
      <Card title="Advanced" collapse closed>
        <Row>
          <Col mobile={12} desktop>
            <Table>
              <Table.Body>
                <Table.Tr>
                  <StackedData cell label="Hash" value={tx.hash} />
                </Table.Tr>
                <Table.Tr>
                  <StackedData
                    cell
                    label="Block Height"
                    value={tx.height}
                    link={"/block/" + tx.height}
                  />
                </Table.Tr>
                <Table.Tr>
                  <StackedData cell label="Locktime" value={tx.locktime} />
                </Table.Tr>
              </Table.Body>
            </Table>
          </Col>
          <Col mobile={12} desktop>
            <Table>
              <Table.Body>
                <Table.Tr>
                  <StackedData
                    cell
                    label="Witness Hash"
                    value={tx.witnessHash}
                  />
                </Table.Tr>
                <Table.Tr>
                  <StackedData cell label="Version" value={tx.version} />
                </Table.Tr>
                <Table.Tr>
                  <StackedData cell label="Index" value={tx.index} />
                </Table.Tr>
              </Table.Body>
            </Table>
          </Col>
        </Row>
      </Card>

      <Card title="TX Activity" collapse>
        <Container>
          <Row>
            <Col mobile={12} desktop>
              <InputList inputs={tx.inputs} />
            </Col>
            <Col mobile={12} desktop>
              <OutputList outputs={tx.outputs} />
            </Col>
          </Row>
        </Container>
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
