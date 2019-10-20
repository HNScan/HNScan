import React from "react";
import { Row, Col } from "@urkellabs/ucl";

// Components
import Card from "components/styles/Card";

function timeToNextState(blocks) {
  if (blocks) {
    return blocks;
  } else {
    return "-";
  }
}

export default function NameSummary({ name }) {
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>Name Summary</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <Row>
          <Col mobile={12} desktop>
            <Card.ItemContainer>
              <Card.ItemLabel>Name</Card.ItemLabel>
              <Card.ItemDetail>{name.name}</Card.ItemDetail>
            </Card.ItemContainer>
          </Col>
          <Col mobile={12} desktop>
            <Card.ItemContainer>
              <Card.ItemLabel>Release Block</Card.ItemLabel>
              <Card.ItemDetail>{name.release}</Card.ItemDetail>
            </Card.ItemContainer>
          </Col>
          <Col mobile={12} desktop>
            <Card.ItemContainer>
              <Card.ItemLabel>Reserved</Card.ItemLabel>
              <Card.ItemDetail>{name.reserved.toString()}</Card.ItemDetail>
            </Card.ItemContainer>
          </Col>
        </Row>
        <Row>
          <Col mobile={12} desktop>
            <Card.ItemContainer>
              <Card.ItemLabel>State</Card.ItemLabel>
              <Card.ItemDetail>{name.state}</Card.ItemDetail>
            </Card.ItemContainer>
          </Col>
          <Col mobile={12} desktop>
            <Card.ItemContainer>
              <Card.ItemLabel>Blocks Until Next State</Card.ItemLabel>
              {/* @todo need time in here as well. */}
              <Card.ItemDetail>
                {timeToNextState(name.blocksUntil)}
              </Card.ItemDetail>
            </Card.ItemContainer>
          </Col>
          <Col mobile={12} desktop>
            <Card.ItemContainer>
              <Card.ItemLabel>Next State</Card.ItemLabel>
              <Card.ItemDetail>{name.nextState}</Card.ItemDetail>
            </Card.ItemContainer>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  );
}
