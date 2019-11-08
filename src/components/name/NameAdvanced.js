import React from "react";
import { Row, Col, Card, Table } from "@urkellabs/ucl";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { hnsValues } from "utils/util";

export default function NameSummary({ name }) {
  return (
    <Card title="Advanced">
      {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
      <Row>
        <Col mobile={12} desktop>
          <Table>
            <Table.Body>
              <Table.Tr>
                <StackedData cell label="Name Hash" value={name.hash} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Height" value={name.height} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Renewal" value={name.renewal} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Value" value={hnsValues(name.value)} />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
        <Col mobile={12} desktop>
          <Table>
            <Table.Body>
              <Table.Tr>
                <StackedData
                  cell
                  label="Highest"
                  value={hnsValues(name.highest)}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Weak" value={name.weak.toString()} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Transfer" value={name.transfer} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Revoked" value={name.revoked} />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
      </Row>
    </Card>
  );
}
