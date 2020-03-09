import React from "react";
import styled from "styled-components";
import { Card, Col, Row, Table } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";
import theme from "styled-theming";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { timeAgo } from "utils/util";

const borderColor = theme("mode", {
  light: "#dfdfdf",
  dark: "#444444"
});

const SummaryCardItem = styled.div`
  border-bottom: 1px solid ${borderColor};
  padding: 24px;
  &:last-child {
    border-bottom: 0;
  }
`;

const PeerInfo = ({ peers }) => {
  const { t } = useTranslation();
  const peerTable = peers?.map(peer => (
    <SummaryCardItem key={peer.addr}>
      <Row>
        <Col mobile={12} tablet>
          <Table>
            <Table.Body>
              <Table.Tr>
                <StackedData cell label="peers.address" value={peer.addr} />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="peers.name"
                  value={peer.name || t("peers.no_name")}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="peers.services"
                  value={peer.services}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="peers.version" value={peer.version} />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
        <Col mobile={12} tablet>
          <Table>
            <Table.Body>
              <Table.Tr>
                <StackedData cell label="peers.location" value={"--"} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="peers.country" value={"--"} />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="peers.whitelisted"
                  value={peer.whitelisted.toString()}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="peers.last_send_received"
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
      <Card title={t("peers.peers")}>{peerTable}</Card>
    </>
  );
};

export default PeerInfo;
