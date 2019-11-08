import React from "react";
import styled from "styled-components";
import { Card, Col, Row, Table } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { timeAgo } from "utils/util";

const SummaryCardItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.cards.borderColor};
  padding: 24px;
  &:last-child {
    border-bottom: 0;
  }
`;

const PeerInfo = ({ peers }) => {
  const { t } = useTranslation();
  const peerTable = peers.map(peer => (
    <SummaryCardItem key={peer.addr}>
      <Row>
        <Col mobile={12} tablet>
          <Table>
            <Table.Body>
              <Table.Tr>
                <StackedData cell label="Address" value={peer.addr} />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="Name"
                  value={peer.name || t("No name provided")}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Services" value={peer.services} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Version" value={peer.version} />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
        <Col mobile={12} tablet>
          <Table>
            <Table.Body>
              <Table.Tr>
                <StackedData cell label="Location" value={"--"} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Country" value={"--"} />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="Whitelisted"
                  value={peer.whitelisted.toString()}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="Last Send / Last Receive"
                  value={`${timeAgo(peer.lastsend) || "--"} / ${timeAgo(
                    peer.lastrecv
                  ) || "--"}`}
                />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
      </Row>
    </SummaryCardItem>
  ));
  return (
    <>
      <Card title={t("Peers")}>{peerTable}</Card>
    </>
  );
};

export default PeerInfo;
