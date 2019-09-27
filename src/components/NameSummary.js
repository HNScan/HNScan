import React from "react";

// Components
import * as Cards from "./Cards/Cards";

// Util
// import { timeAgo } from "../util/util";

// function timeToNextState(blocks) {

// }

export default function NameSummary({ name }) {
  return (
    <Cards.Card>
      <Cards.Header>
        <Cards.HeaderTitle>Name Summary</Cards.HeaderTitle>
      </Cards.Header>
      <Cards.Content>
        <Cards.HorizontalContainer>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>Name</Cards.ItemLabel>
              <Cards.ItemDetail>{name.name}</Cards.ItemDetail>
            </Cards.ItemContainer>
          </Cards.Column>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>Release Block</Cards.ItemLabel>
              <Cards.ItemDetail>{name.release}</Cards.ItemDetail>
            </Cards.ItemContainer>
          </Cards.Column>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>Reserved</Cards.ItemLabel>
              <Cards.ItemDetail>{name.reserved.toString()}</Cards.ItemDetail>
            </Cards.ItemContainer>
          </Cards.Column>
        </Cards.HorizontalContainer>
        {/* I think this is all optional here. */}
        <Cards.HorizontalContainer>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>State</Cards.ItemLabel>
              <Cards.ItemDetail>{name.state}</Cards.ItemDetail>
            </Cards.ItemContainer>
          </Cards.Column>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>Blocks Until Next State</Cards.ItemLabel>
              {/* @todo need time in here as well. */}
              <Cards.ItemDetail>{name.blocksUntil}</Cards.ItemDetail>
            </Cards.ItemContainer>
          </Cards.Column>
          <Cards.Column>
            <Cards.ItemContainer>
              <Cards.ItemLabel>Next State</Cards.ItemLabel>
              <Cards.ItemDetail>{name.nextState}</Cards.ItemDetail>
            </Cards.ItemContainer>
          </Cards.Column>
        </Cards.HorizontalContainer>
      </Cards.Content>
    </Cards.Card>
  );
}
