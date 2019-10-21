import React from "react";
import { Row, Col } from "@urkellabs/ucl";

// Components
import Card from "components/styles/Card";
import StackedData from "components/shared/StackedData";

// Util
import { hnsValues } from "utils/util";

export default function NameSummary({ name }) {
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>Advanced</Card.HeaderTitle>
      </Card.Header>
      {/* @todo remove all these class names. */}
      {/* @todo need links in here */}
      {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
      <Card.Content>
        <Row>
          <Col mobile={12} desktop>
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <StackedData label="Name Hash" value={name.hash} />
                </tr>
                <tr>
                  <StackedData label="Height" value={name.height} />
                </tr>
                <tr>
                  <StackedData label="Renewal" value={name.renewal} />
                </tr>
                <tr>
                  <StackedData label="Value" value={hnsValues(name.value)} />
                </tr>
              </tbody>
            </table>
          </Col>
          <Col mobile={12} desktop>
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <StackedData
                    label="Highest"
                    value={hnsValues(name.highest)}
                  />
                </tr>
                <tr>
                  <StackedData label="Weak" value={name.weak.toString()} />
                </tr>
                <tr>
                  <StackedData label="Transfer" value={name.transfer} />
                </tr>
                <tr>
                  <StackedData label="Revoked" value={name.revoked} />
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  );
}
