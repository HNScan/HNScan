import React from "react";

// Components
import Card from "../styles/Card";

// Util
import { formatLargeNumber, sciNotation } from "../../util/util";

function handleUnconfirmed(data, size) {
  if (data === 0) {
    return "-";
  } else {
    return `${data} txs (${size[0]} ${size[1].abbreviation}B)`;
  }
}

//@todo skeleton.
//@todo clean up card component, but maybe just wait until we pull it into it's own lib.
export default function NetworkSummary({ info }) {
  let hashrate = formatLargeNumber(info.hashrate, 3);
  let unconfirmed = info.unconfirmed;
  let memSize = formatLargeNumber(info.unconfirmedSize, 2);
  let network = info.network;
  let difficulty = sciNotation(info.difficulty, 3);
  let chainwork = sciNotation(parseInt("0x" + info.chainWork), 2);
  let registeredNames = info.registeredNames;

  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>Network Summary</Card.HeaderTitle>
      </Card.Header>
      {/* ----- Network Summary - Top Row ----- */}
      <Card.HorizontalContainer>
        <Card.Column>
          <Card.ItemContainer>
            <Card.ItemLabel>Hashrate</Card.ItemLabel>
            <Card.ItemDetail>
              <span>{hashrate[0].toString()}</span>
              <span> {hashrate[1].abbreviation}H/s</span>
            </Card.ItemDetail>
          </Card.ItemContainer>
        </Card.Column>
        <Card.Column>
          <Card.ItemContainer>
            <Card.ItemLabel>Unconfirmed</Card.ItemLabel>
            <Card.ItemDetail>
              <span>{handleUnconfirmed(unconfirmed, memSize)}</span>
            </Card.ItemDetail>
          </Card.ItemContainer>
        </Card.Column>
        <Card.Column>
          <Card.ItemContainer>
            <Card.ItemLabel>Network</Card.ItemLabel>
            <Card.ItemDetail>
              <span>{network}</span>
            </Card.ItemDetail>
          </Card.ItemContainer>
        </Card.Column>
      </Card.HorizontalContainer>
      {/* ----- Network Summary - Bottom Row ----- */}
      <Card.HorizontalContainer>
        <Card.Column>
          <Card.ItemContainer>
            <Card.ItemLabel>Opened Names</Card.ItemLabel>
            <Card.ItemDetail>
              <span>{registeredNames}</span>
            </Card.ItemDetail>
          </Card.ItemContainer>
        </Card.Column>
        <Card.Column>
          <Card.ItemContainer>
            <Card.ItemLabel>Difficulty</Card.ItemLabel>
            <Card.ItemDetail>
              {difficulty[0]} x 10<sup>{difficulty[1]}</sup>
            </Card.ItemDetail>
          </Card.ItemContainer>
        </Card.Column>
        <Card.Column>
          <Card.ItemContainer>
            <Card.ItemLabel>Chainwork</Card.ItemLabel>
            <Card.ItemDetail>
              {chainwork[0]} x 10<sup>{chainwork[1]}</sup>
            </Card.ItemDetail>
          </Card.ItemContainer>
        </Card.Column>
      </Card.HorizontalContainer>
    </Card>
  );
}
