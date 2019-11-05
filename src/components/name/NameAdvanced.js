import React from "react";
import { Row, Col, Card } from "@urkellabs/ucl";

// Components
import StackedData from "components/shared/StackedData";
import DataTable from "components/styles/DataTable";

// Util
import { hnsValues } from "utils/util";

export default function NameSummary({ name }) {
  return (
    <Card title="Advanced">
      {/* @todo remove all these class names. */}
      {/* @todo need links in here */}
      {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
      <Row>
        <Col mobile={12} desktop>
          <DataTable>
            <DataTable.Body>
              <DataTable.Tr>
                <StackedData cell label="Name Hash" value={name.hash} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Height" value={name.height} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Renewal" value={name.renewal} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Value" value={hnsValues(name.value)} />
              </DataTable.Tr>
            </DataTable.Body>
          </DataTable>
        </Col>
        <Col mobile={12} desktop>
          <DataTable>
            <DataTable.Body>
              <DataTable.Tr>
                <StackedData
                  cell
                  label="Highest"
                  value={hnsValues(name.highest)}
                />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Weak" value={name.weak.toString()} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Transfer" value={name.transfer} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Revoked" value={name.revoked} />
              </DataTable.Tr>
            </DataTable.Body>
          </DataTable>
        </Col>
      </Row>
    </Card>
  );
}
