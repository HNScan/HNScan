import React from "react";
import { Row, Col, Card, Table } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { hnsValues } from "utils/util";

export default function NameSummary({ name }) {
  const { t } = useTranslation();
  return (
    <Card title={t("name_detail.advanced")} collapse closed>
      {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
      <Row>
        <Col mobile={12} desktop>
          <Table>
            <Table.Body>
              <Table.Tr>
                <StackedData
                  cell
                  label="name_detail.name_hash"
                  value={name.hash}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="name_detail.height"
                  value={name.height}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="name_detail.renewal"
                  value={name.renewal}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="name_detail.value"
                  value={hnsValues(name.value)}
                />
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
                  label="name_detail.highest"
                  value={hnsValues(name.highest)}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="name_detail.weak"
                  value={name.weak.toString()}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="name_detail.transfer"
                  value={name.transfer}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="name_detail.revoked"
                  value={name.revoked}
                />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
      </Row>
    </Card>
  );
}
