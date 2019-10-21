import React from "react";
import styled from "styled-components";

// Components
import Card from "components/styles/Card";
import StackedData from "components/Stacked/StackedComponent";

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
      <FullWidthContainer className="card-content">
        <div className="columns">
          <div className="column is-half">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <StackedData label="Address" value={peer.addr} />
                </tr>
                <tr>
                  <StackedData
                    label="Name"
                    value={peer.name || "No name provided"}
                  />
                </tr>
                <tr>
                  <StackedData label="Services" value={peer.services} />
                </tr>
                <tr>
                  <StackedData label="Version" value={peer.version} />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column is-half">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <StackedData label="Location" value={"todo"} />
                </tr>
                <tr>
                  <StackedData label="Country" value={"todo"} />
                </tr>
                <tr>
                  <StackedData
                    label="Whitelisted"
                    value={peer.whitelisted.toString()}
                  />
                </tr>
                <tr>
                  <StackedData
                    label="Last Send / Last Receive"
                    value={`${timeAgo(peer.lastsend)} / ${timeAgo(
                      peer.lastrecv
                    )}`}
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
      <Card>
        <Card.Header>
          <Card.HeaderTitle>Peers</Card.HeaderTitle>
        </Card.Header>
        <Card.Content>{peerTable}</Card.Content>
      </Card>
    </>
  );
};

export default PeerInfo;
