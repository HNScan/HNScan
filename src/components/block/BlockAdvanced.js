import React from "react";
import { Row, Col, Card, Table } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import StackedData from "components/shared/StackedData";

// Util
import { sciNotation } from "utils/util";

export default function BlockAdvanced({ block }) {
  let [difficulty, exponent] = sciNotation(block.difficulty, 5);
  const { t } = useTranslation();
  return (
    <Card title={t("block_detail.advanced")} collapse closed>
      {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
      <Row>
        <Col mobile={12} desktop>
          <Table>
            <Table.Body>
              {block.previous_hash && (
                <Table.Tr>
                  <StackedData
                    cell
                    label="block_detail.previous_block"
                    value={block.previous_hash}
                    link={"/block/" + (block.height - 1)}
                  />
                </Table.Tr>
              )}
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.timestamp"
                  value={block.time}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.difficulty"
                  value={
                    <span>
                      {difficulty} x 10<sup>{exponent}</sup>
                    </span>
                  }
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.version"
                  value={block.version}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.bits"
                  value={block.bits}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.size"
                  value={block.size + " bytes"}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.nonce"
                  value={block.nonce}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.extra_nonce"
                  value={block.extra_nonce}
                />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
        <Col mobile={12} desktop>
          <Table>
            <Table.Body>
              {block.next_hash && (
                <Table.Tr>
                  <StackedData
                    cell
                    label="block_detail.next_block"
                    value={block.next_hash}
                    link={"/block/" + (block.height + 1)}
                  />
                </Table.Tr>
              )}
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.hash"
                  value={block.hash}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.merkle_root"
                  value={block.merkle_root}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.witness_root"
                  value={block.witness_root}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.tree_root"
                  value={block.tree_root}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.reserved_root"
                  value={block.reserved_root}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.mask"
                  value={block.mask}
                />
              </Table.Tr>
              <Table.Tr>
                <StackedData
                  cell
                  label="block_detail.chainwork"
                  value={block.chainwork}
                />
              </Table.Tr>
            </Table.Body>
          </Table>
        </Col>
      </Row>
    </Card>
  );
}
