import React from "react";
import { Row, Col } from "@urkellabs/ucl";

// Components
import Card from "components/styles/Card";
import StackedData from "components/shared/StackedData";

// Util
import { sciNotation, hnsValues } from "utils/util";

export default function BlockAdvanced({ block }) {
  let [difficulty, exponent] = sciNotation(block.difficulty, 5);

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
                {block.prevBlock && (
                  <tr>
                    <StackedData
                      cell
                      label="Previous Block"
                      value={block.prevBlock}
                      link={"/block/" + (block.height - 1)}
                    />
                  </tr>
                )}
                <tr>
                  <StackedData
                    cell
                    label="Difficulty"
                    value={
                      <span>
                        {difficulty} x 10<sup>{exponent}</sup>
                      </span>
                    }
                  />
                </tr>
                <tr>
                  <StackedData cell label="Version" value={block.version} />
                </tr>
                <tr>
                  <StackedData cell label="Bits" value={block.bits} />
                </tr>
                <tr>
                  <StackedData cell label="Size" value={block.size + " bytes"} />
                </tr>
                <tr>
                  <StackedData
                    cell
                    label="Average Fee"
                    value={hnsValues(block.averageFee)}
                  />
                </tr>
                <tr>
                  <StackedData cell label="Nonce" value={block.nonce} />
                </tr>
              </tbody>
            </table>
          </Col>
          <Col mobile={12} desktop>
            <table className="table is-fullwidth">
              <tbody>
                {block.nextHash && (
                  <tr>
                    <StackedData
                      cell
                      label="Next Block"
                      value={block.nextHash}
                      link={"/block/" + (block.height + 1)}
                    />
                  </tr>
                )}
                <tr>
                  <StackedData cell label="Hash" value={block.hash} />
                </tr>
                <tr>
                  <StackedData cell label="Merkle Root" value={block.merkleRoot} />
                </tr>
                <tr>
                  <StackedData cell label="Tree Root" value={block.treeRoot} />
                </tr>
                <tr>
                  <StackedData cell label="Filter Root" value={block.filterRoot} />
                </tr>
                <tr>
                  <StackedData
                    cell
                    label="Reserved Root"
                    value={block.reservedRoot}
                  />
                </tr>
                <tr>
                  <StackedData cell label="Chainwork" value={block.chainwork} />
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  );
}
