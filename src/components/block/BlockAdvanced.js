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
                      label="Previous Block"
                      value={block.prevBlock}
                      link={"/block/" + (block.height - 1)}
                    />
                  </tr>
                )}
                <tr>
                  <StackedData
                    label="Difficulty"
                    value={
                      <span>
                        {difficulty} x 10<sup>{exponent}</sup>
                      </span>
                    }
                  />
                </tr>
                <tr>
                  <StackedData label="Version" value={block.version} />
                </tr>
                <tr>
                  <StackedData label="Bits" value={block.bits} />
                </tr>
                <tr>
                  <StackedData label="Size" value={block.size + " bytes"} />
                </tr>
                <tr>
                  <StackedData
                    label="Average Fee"
                    value={hnsValues(block.averageFee)}
                  />
                </tr>
                <tr>
                  <StackedData label="Nonce" value={block.nonce} />
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
                      label="Next Block"
                      value={block.nextHash}
                      link={"/block/" + (block.height + 1)}
                    />
                  </tr>
                )}
                <tr>
                  <StackedData label="Hash" value={block.hash} />
                </tr>
                <tr>
                  <StackedData label="Merkle Root" value={block.merkleRoot} />
                </tr>
                <tr>
                  <StackedData label="Tree Root" value={block.treeRoot} />
                </tr>
                <tr>
                  <StackedData label="Filter Root" value={block.filterRoot} />
                </tr>
                <tr>
                  <StackedData
                    label="Reserved Root"
                    value={block.reservedRoot}
                  />
                </tr>
                <tr>
                  <StackedData label="Chainwork" value={block.chainwork} />
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  );
}
