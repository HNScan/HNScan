import React from "react";

// Components
import Pagination from "components/layout/Pagination";
import Card from "components/styles/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "reactbulma/lib/components/Table/Table.js";
import Skeleton from "react-loading-skeleton";

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

const DataTable = styled(Table)`
  width: 90%;
  height: auto;
  margin: 10px auto;
  @media (min-width: 680px) {
    width: 95%;
  }
`;

export function BlocksSkeleton() {
  const rows = [];
  for (let i = 0; i < 24; i++)
    rows.push(<Row key={i} loading />)
  return (
    <>
      <BlocksTableStructure>
        {rows}
      </BlocksTableStructure>
    </>
  );
}

export function BlocksTable({ blocks, pages, page }) {
  const blockRows = blocks.map((block) => (
    <Row key={block.height}
      height={block.height}
      size={block.size}
      time={block.time}
      miner={block.miner}
      txs={block.txs} />
  ));
  return (
    <>
      <BlocksTableStructure>
        {blockRows}
      </BlocksTableStructure>
      <Pagination totalPages={pages} page={page} url="/blocks" />
    </>
  );
}

function BlocksTableStructure({ children }) {
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>HNS Blocks</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <TableContainer>
          <DataTable>
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
            <Table.Body>{children}</Table.Body>
          </DataTable>
        </TableContainer>
      </Card.Content>
    </Card>
  )
}

const Row = ({ height, size, time, miner, txs, loading }) => {
  if (loading) {
    // @todo figure out a more elegant way to construct the skeleton
    return (
      <Table.Tr>
        <Table.Td className="is-hidden-mobile" width="10%"><Skeleton /></Table.Td>
        <Table.Td><Skeleton /></Table.Td>
        <Table.Td width="50%"><Skeleton /></Table.Td>
        <Table.Td width="10%"><Skeleton /></Table.Td>
        <Table.Td className="is-hidden-mobile" width="10%"><Skeleton /></Table.Td>
      </Table.Tr>
    );
  }
  return (
    <Table.Tr>
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
}
