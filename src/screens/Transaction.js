import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  Row,
  Col,
  Card,
  Table,
  useQuery,
  Code,
  breakpoint,
  Header,
  Spacer
} from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import StackedData from "components/shared/StackedData";
import { InputList, OutputList } from "components/shared/PutsList";

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

const TxWrapper = styled.div`
  width: 100%;
  word-wrap: break-word;
  margin-bottom: 16px;
  padding: 10px;
`;

const TxTitle = styled(Header)`
  font-weight: 700;
`;

const TxHash = styled(Code)`
  background: transparent;
  color: inherit;
  font-size: 14px;
  max-width: 400px;
  padding: 0;
  font-weight: 400;

  ${breakpoint.tablet} {
    max-width: initial;
  }

  * {
    margin-left: 4px;
  }
`;

function TxDetailScreen({ hash }) {
  const { t } = useTranslation();
  const { data: tx } = useQuery("/txs/" + hash);

  return (
    <>
      <TxWrapper>
        <TxTitle small>Transaction</TxTitle>
        <TxHash copy>{hash}</TxHash>
      </TxWrapper>
      <Card title={t("tx_detail.summary")}>
        <Row>
          <Col mobile={12} tablet>
            <StackedData label="tx_detail.received" value={timeAgo(tx.time)} />
          </Col>
          <Col mobile={12} tablet>
            <StackedData label="tx_detail.amount" value={hnsValues(tx.value)} />
          </Col>
          <Col mobile={12} tablet>
            <StackedData label="tx_detail.fee" value={hnsValues(tx.fee)} />
          </Col>
          <Col mobile={12} tablet>
            <StackedData
              label="tx_detail.confirmation"
              value={tx.confirmations}
            />
          </Col>
        </Row>
      </Card>
      <Spacer />
      <Card title={t("tx_detail.advanced")} collapse closed>
        <Row>
          <Col mobile={12} desktop>
            <Table>
              <Table.Body>
                <Table.Tr>
                  <StackedData cell label="tx_detail.hash" value={tx.hash} />
                </Table.Tr>
                <Table.Tr>
                  <StackedData
                    cell
                    label="tx_detail.height"
                    value={tx.height}
                    link={"/block/" + tx.height}
                  />
                </Table.Tr>
                <Table.Tr>
                  <StackedData
                    cell
                    label="tx_detail.locktime"
                    value={tx.locktime}
                  />
                </Table.Tr>
              </Table.Body>
            </Table>
          </Col>
          <Col mobile={12} desktop>
            <Table>
              <Table.Body>
                <Table.Tr>
                  <StackedData cell label="tx_detail.txid" value={tx.tx_id} />
                </Table.Tr>
                <Table.Tr>
                  <StackedData
                    cell
                    label="tx_detail.version"
                    value={tx.version}
                  />
                </Table.Tr>
                <Table.Tr>
                  <StackedData cell label="tx_detail.index" value={tx.index} />
                </Table.Tr>
              </Table.Body>
            </Table>
          </Col>
        </Row>
      </Card>
      <Spacer />
      <Card title={t("tx_detail.tx_activity")} collapse>
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
