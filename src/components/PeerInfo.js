import React from "react";
import styled from "styled-components";

// Components
import { Card } from "@urkellabs/ucl";
import StackedData from "components/shared/StackedData";

// Util
import { timeAgo } from "utils/util";

const SummaryCardItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.cards.borderColor};
  display: flex;
  flex-direction: row;

  &:last-child {
    border-bottom: 0;
  }
`;

const FullWidthContainer = styled.div`
  width: 100%;
`;

const PeerInfo = ({ peers, ...props }) => {
  const peerTable = peers.map((peer, index) => (
    <SummaryCardItem key={peer.addr}>
      <FullWidthContainer>
        <div className="columns">
          <div className="column is-half">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <StackedData cell label="Address" value={peer.addr} />
                </tr>
                <tr>
                  <StackedData
                    cell
                    label="Name"
                    value={peer.name || "No name provided"}
                  />
                </tr>
                <tr>
                  <StackedData cell label="Services" value={peer.services} />
                </tr>
                <tr>
                  <StackedData cell label="Version" value={peer.version} />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column is-half">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <StackedData cell label="Location" value={"--"} />
                </tr>
                <tr>
                  <StackedData cell label="Country" value={"--"} />
                </tr>
                <tr>
                  <StackedData
                    cell
                    label="Whitelisted"
                    value={peer.whitelisted.toString()}
                  />
                </tr>
                <tr>
                  <StackedData
                    cell
                    label="Last Send / Last Receive"
                    value={`${timeAgo(peer.lastsend) || "--"} / ${timeAgo(
                      peer.lastrecv
                    ) || "--"}`}
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </FullWidthContainer>
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
