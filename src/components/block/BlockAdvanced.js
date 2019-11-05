import React from "react";
import { Row, Col } from "@urkellabs/ucl";

// Components
import { Card } from "@urkellabs/ucl";
import StackedData from "components/shared/StackedData";
import DataTable from "components/styles/DataTable";

// Util
import { sciNotation, hnsValues } from "utils/util";

export default function BlockAdvanced({ block }) {
  let [difficulty, exponent] = sciNotation(block.difficulty, 5);

  return (
    <Card title="Advanced">
      {/* @todo remove all these class names. */}
      {/* @todo need links in here */}
      {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
      <Row>
        <Col mobile={12} desktop>
          <DataTable>
            <DataTable.Body>
              {block.prevBlock && (
                <DataTable.Tr>
                  <StackedData
                    cell
                    label="Previous Block"
                    value={block.prevBlock}
                    link={"/block/" + (block.height - 1)}
                  />
                </DataTable.Tr>
              )}
              <DataTable.Tr>
                <StackedData
                  cell
                  label="Difficulty"
                  value={
                    <span>
                      {difficulty} x 10<sup>{exponent}</sup>
                    </span>
                  }
                />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Version" value={block.version} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Bits" value={block.bits} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Size" value={block.size + " bytes"} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData
                  cell
                  label="Average Fee"
                  value={hnsValues(block.averageFee)}
                />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Nonce" value={block.nonce} />
              </DataTable.Tr>
            </DataTable.Body>
          </DataTable>
        </Col>
        <Col mobile={12} desktop>
          <DataTable>
            <DataTable.Body>
              {block.nextHash && (
                <DataTable.Tr>
                  <StackedData
                    cell
                    label="Next Block"
                    value={block.nextHash}
                    link={"/block/" + (block.height + 1)}
                  />
                </DataTable.Tr>
              )}
              <DataTable.Tr>
                <StackedData cell label="Hash" value={block.hash} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Merkle Root" value={block.merkleRoot} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Tree Root" value={block.treeRoot} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Filter Root" value={block.filterRoot} />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData
                  cell
                  label="Reserved Root"
                  value={block.reservedRoot}
                />
              </DataTable.Tr>
              <DataTable.Tr>
                <StackedData cell label="Chainwork" value={block.chainwork} />
              </DataTable.Tr>
            </DataTable.Body>
          </DataTable>
        </Col>
      </Row>
    </Card>
  );
}
