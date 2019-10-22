import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "reactbulma/lib/components/Table/Table.js";

// Util
import { timeAgo, truncateHash } from "utils/util";

const TableContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  @media (min-width: 680px) {
    padding: 1.5rem;
  }
`;

const BlocksTable = styled(Table)`
  width: 90%;
  height: auto;
  margin: 10px auto;
  @media (min-width: 680px) {
    width: 95%;
  }
`;

const Row = ({ height, size, time, miner, txs, loading}) => (
  <Table.Tr >
    <Table.Td>
      <Link to={"/block/" + height}>{height}</Link>
      <div className="is-hidden-tablet">Size: {size}</div>
    </Table.Td>
    <Table.Td className="is-hidden-mobile">{timeAgo(time)}</Table.Td>
    <Table.Td>
      <Link className="is-hidden-mobile" to={"/address/" + miner}>
        {miner}
      </Link>
      <Link className="is-hidden-tablet" to={"/address/" + miner}>
        {truncateHash(miner)}
      </Link>
      <div className="is-hidden-tablet">{timeAgo(time)}</div>
    </Table.Td>
    <Table.Td className="is-hidden-mobile">{size}</Table.Td>
    <Table.Td>{txs}</Table.Td>
  </Table.Tr>
)

export default function BlockList(props) {
  const blocks = props.blocks.map((block) => (
    <Row key={block.height}
      height={block.height}
      size={block.size}
      time={block.time}
      miner={block.miner}
      txs={block.txs} />
  ));

  return (
    <TableContainer>
      <BlocksTable>
        <Table.Head>
          <Table.Tr>
            <Table.Th>
              <abbr title="Block Height">Height</abbr>
            </Table.Th>
            <Table.Th className="is-hidden-mobile">
              <abbr title="Block Age">Age</abbr>
            </Table.Th>
            <Table.Th>
              <abbr title="Miner Address">Miner</abbr>
            </Table.Th>
            <Table.Th className="is-hidden-mobile">
              <abbr title="Block Size">Size</abbr>
            </Table.Th>
            <Table.Th>
              <abbr title="Number of Transactions">TXs</abbr>
            </Table.Th>
          </Table.Tr>
        </Table.Head>
        <Table.Body>{blocks}</Table.Body>
      </BlocksTable>
    </TableContainer>
  );
}
