import React from "react";
import { Row, Col, Card } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import StackedData from "components/shared/StackedData";

function timeToNextState(blocks) {
  if (blocks) {
    return blocks;
  } else {
    return "-";
  }
}

export default function NameSummary({ name }) {
  const { t } = useTranslation();
  return (
    <Card title={t("Name Summary")}>
      <Row>
        <Col mobile={12} tablet>
          <StackedData label="Name" value={name.name} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData label="Release Block" value={name.release} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData label="Reserved" value={name.reserved.toString()} />
        </Col>
      </Row>
      <Row>
        <Col mobile={12} tablet>
          <StackedData label="State" value={name.state} />
        </Col>
        <Col mobile={12} tablet>
          <StackedData
            label="Blocks Until Next State"
            value={timeToNextState(name.blocksUntil)}
          />
        </Col>
        <Col mobile={12} tablet>
          <StackedData label="Next State" value={name.nextState} />
        </Col>
      </Row>
    </Card>
  );
}
