import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "reactbulma/lib/components/Table/Table.js";

// Util
import { timeAgo, truncateHash } from "utils/util";

export const TableContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  @media (min-width: 680px) {
    padding: 1.5rem;
  }
`;

export const BlocksTable = styled(Table)`
  width: 90%;
  height: auto;
  margin: 10px auto;
  @media (min-width: 680px) {
    width: 95%;
  }
`;

export const Abbr = styled.abbr`
  color: ${props => props.theme["--text-color-normal"]};
  text-decoration: none;
`;

// ----- Age Row Components -----
export const AgeHead = styled(Table.Th)`
  color: ${props => props.theme["--text-color-normal"]};
  display: none;
  @media (min-width: 680px) {
    display: table-cell;
  }
`;

export const AgeRow = styled(Table.Td)`
  color: ${props => props.theme["--text-color-normal"]};
  display: none;
  @media (min-width: 680px) {
    display: table-cell;
  }
`;

export const MobileAge = styled.div`
  color: ${props => props.theme["--text-color-normal"]};
  display: block;
  font-size: 14px;
  @media (min-width: 680px) {
    display: none;
  }
`;

// ----- Miner Row Components -----
export const MinerAddress = styled.a`
  display: none;
  @media (min-width: 869px) {
    display: table-cell;
  }
`;

export const TruncatedMiner = styled.a`
  display: block;
  @media (min-width: 869px) {
    display: none;
  }
`;

// ----- Size Row Components -----
export const SizeHead = styled(Table.Th)`
  color: ${props => props.theme["--text-color-normal"]};
  display: none;
  @media (min-width: 680px) {
    display: table-cell;
  }
`;

export const SizeRow = styled(Table.Td)`
  color: ${props => props.theme["--text-color-normal"]};
  display: none;
  @media (min-width: 680px) {
    display: table-cell;
  }
`;

export const MobileSize = styled.div`
  color: ${props => props.theme["--text-color-normal"]};
  display: block;
  font-size: 14px;
  @media (min-width: 680px) {
    display: none;
  }
`;

export const Td = styled(Table.Td)`
  color: ${props => props.theme["--text-color-normal"]};
`;

export default function BlockList(props) {
  //Render block rows
  const blocks = props.blocks.map((block, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Link to={"/block/" + block.height}>{block.height}</Link>
        <div className="is-hidden-tablet">Size: {block.size}</div>
      </Table.Td>
      <Table.Td className="is-hidden-mobile">{timeAgo(block.time)}</Table.Td>
      <Table.Td>
        <Link className="is-hidden-mobile" to={"/address/" + block.miner}>
          {block.miner}
        </Link>
        <Link className="is-hidden-tablet" to={"/address/" + block.miner}>
          {truncateHash(block.miner)}
        </Link>
        <div className="is-hidden-tablet">{timeAgo(block.time)}</div>
      </Table.Td>
      <Table.Td className="is-hidden-mobile">{block.size}</Table.Td>
      <Table.Td>{block.txs}</Table.Td>
    </Table.Tr>
  ));

  return (
    <TableContainer>
      <BlocksTable>
        <Table.Head>
          <Table.Tr>
            <Table.Th>
              <Abbr title="Block Height">Height</Abbr>
            </Table.Th>
            <Table.Th className="is-hidden-mobile">
              <Abbr title="Block Age">Age</Abbr>
            </Table.Th>
            <Table.Th>
              <Abbr title="Miner Address">Miner</Abbr>
            </Table.Th>
            <Table.Th className="is-hidden-mobile">
              <Abbr title="Block Size">Size</Abbr>
            </Table.Th>
            <Table.Th>
              <Abbr title="Number of Transactions">TXs</Abbr>
            </Table.Th>
          </Table.Tr>
        </Table.Head>
        <Table.Body>{blocks}</Table.Body>
      </BlocksTable>
    </TableContainer>
  );
}
