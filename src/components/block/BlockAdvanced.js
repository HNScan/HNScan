import React from "react";
import { Row, Col, Card, Table } from "@urkellabs/ucl";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { sciNotation, hnsValues } from "utils/util";

export default function BlockAdvanced({ block }) {
  let [difficulty, exponent] = sciNotation(block.difficulty, 5);

  return (
    <Card title="Advanced">
      {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
      <Row>
        <Col mobile={12} desktop>
          <Table>
            <Table.Body>
              {block.prevBlock && (
                <Table.Tr>
                  <StackedData
                    cell
                    label="Previous Block"
                    value={block.prevBlock}
                    link={"/block/" + (block.height - 1)}
                  />
                </Table.Tr>
              )}
              <Table.Tr>
                <StackedData
                  cell
                  label="Difficulty"
                  value={
                    <span>
                      {difficulty} x 10<sup>{exponent}</sup>
                    </span>
                  }
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Version" value={block.version} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Bits" value={block.bits} />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Size" value={block.size + " bytes"} />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="Average Fee"
                  value={hnsValues(block.averageFee)}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Nonce" value={block.nonce} />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
        <Col mobile={12} desktop>
          <Table>
            <Table.Body>
              {block.nextHash && (
                <Table.Tr>
                  <StackedData
                    cell
                    label="Next Block"
                    value={block.nextHash}
                    link={"/block/" + (block.height + 1)}
                  />
                </Table.Tr>
              )}
              <Table.Tr>
                <StackedData cell label="Hash" value={block.hash} />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="Merkle Root"
                  value={block.merkleRoot}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Tree Root" value={block.treeRoot} />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="Filter Root"
                  value={block.filterRoot}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="Reserved Root"
                  value={block.reservedRoot}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData cell label="Chainwork" value={block.chainwork} />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
      </Row>
    </Card>
  );
}
