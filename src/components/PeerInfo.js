import React from "react";
import styled from "styled-components";

// Components
import { Card, Col, Row } from "@urkellabs/ucl";
import StackedData from "components/shared/StackedData";
import DataTable from "components/styles/DataTable";

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
  const peerTable = peers.map((peer) => (
    <SummaryCardItem key={peer.addr}>
      <Row>
        <Col mobile={12} tablet>
          <DataTable>
            <DataTable.Body>
              <DataTable.Tr>
                <StackedData cell label="Address" value={peer.addr} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData
                  cell
                  label="Name"
                  value={peer.name || "No name provided"}
                />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Services" value={peer.services} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Version" value={peer.version} />
              </DataTable.Tr>
            </DataTable.Body>
          </DataTable>
        </Col>
        <Col mobile={12} tablet>
          <DataTable>
            <DataTable.Body>
              <DataTable.Tr>
                <StackedData cell label="Location" value={"--"} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Country" value={"--"} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData
                  cell
                  label="Whitelisted"
                  value={peer.whitelisted.toString()}
                />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData
                  cell
                  label="Last Send / Last Receive"
                  value={`${timeAgo(peer.lastsend) || "--"} / ${timeAgo(
                    peer.lastrecv
                  ) || "--"}`}
                />
              </DataTable.Tr>
            </DataTable.Body>
          </DataTable>
        </Col>
      </Row>
    </SummaryCardItem>
  ));
  return (
    <>
      <Card title="Peers">
        {peerTable}
      </Card>
    </>
  );
};

export default PeerInfo;
