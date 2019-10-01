import React from "react";
import styled from "styled-components";
import * as Cards from "./Cards/Cards";
import StackedComponent from "./Stacked/StackedComponent";
import { timeAgo } from "../util/util";

const SummaryCardItem = styled.div`
  padding: 12px 18px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  flex-direction: row;

  &:last-child {
    border-bottom: 0;
  }
`;

const PeerInfo = ({ peers, ...props }) => {
  const peerRows = peers.map((peer, index) => (
    <SummaryCardItem>
      <Cards.SummaryContainer>
        <div className="columns">
          <div className="column">
            <StackedComponent label="Address" value={peer.addr} />
            <StackedComponent label="Name" value={peer.name} />
            <StackedComponent label="Services" value={peer.services} />
            <StackedComponent label="Version" value={peer.version} />
          </div>
          <div className="column">
            <StackedComponent label="Location" value={"todo"} />
            <StackedComponent label="Country" value={"todo"} />
            <StackedComponent
              label="Whitelisted"
              value={peer.whitelisted.toString()}
            />
            <StackedComponent
              label="Last Send / Last Receive"
              value={`${timeAgo(peer.lastsend)} / ${timeAgo(peer.lastrecv)}`}
            />
          </div>
        </div>
      </Cards.SummaryContainer>
    </SummaryCardItem>
  ));
  return (
    <>
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>Peers</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>{peerRows}</Cards.Content>
      </Cards.Card>
    </>
  );
};

export default PeerInfo;
