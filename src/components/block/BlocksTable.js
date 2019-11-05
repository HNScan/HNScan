import React from "react";
import { Pagination, Card } from "@urkellabs/ucl";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

// Components
import DataTable from "components/styles/DataTable";

// Util
import { timeAgo, truncateHash } from "utils/util";

function Row({ height, size, time, miner, txs, loading }) {
  if (loading) {
    // @todo figure out a more elegant way to construct the skeleton
    return (
      <DataTable.Tr>
        <DataTable.Td className="is-hidden-mobile" width="10%">
          <Skeleton />
        </DataTable.Td>
        <DataTable.Td>
          <Skeleton />
        </DataTable.Td>
        <DataTable.Td width="50%">
          <Skeleton />
        </DataTable.Td>
        <DataTable.Td width="10%">
          <Skeleton />
        </DataTable.Td>
        <DataTable.Td className="is-hidden-mobile" width="10%">
          <Skeleton />
        </DataTable.Td>
      </DataTable.Tr>
    );
  }
  return (
    <DataTable.Tr>
      <DataTable.Td>
        <Link to={"/block/" + height}>{height}</Link>
        <div className="is-hidden-tablet">Size: {size}</div>
      </DataTable.Td>
      <DataTable.Td className="is-hidden-mobile">{timeAgo(time)}</DataTable.Td>
      <DataTable.Td>
        <Link className="is-hidden-mobile" to={"/address/" + miner}>
          {miner}
        </Link>
        <Link className="is-hidden-tablet" to={"/address/" + miner}>
          {truncateHash(miner)}
        </Link>
        <div className="is-hidden-tablet">{timeAgo(time)}</div>
      </DataTable.Td>
      <DataTable.Td className="is-hidden-mobile">{size}</DataTable.Td>
      <DataTable.Td>{txs}</DataTable.Td>
    </DataTable.Tr>
  );
}

function BlocksTableStructure({ children }) {
  return (
    <Card title="HNS Blocks">
      <DataTable.Wrapper>
        <DataTable>
          <DataTable.Head>
            <DataTable.Tr>
              <DataTable.Th>Height</DataTable.Th>
              <DataTable.Th className="is-hidden-mobile">Age</DataTable.Th>
              <DataTable.Th>Miner</DataTable.Th>
              <DataTable.Th className="is-hidden-mobile">Size</DataTable.Th>
              <DataTable.Th>TXs</DataTable.Th>
            </DataTable.Tr>
          </DataTable.Head>
          <DataTable.Body>{children}</DataTable.Body>
        </DataTable>
      </DataTable.Wrapper>
    </Card>
  );
}

export function BlocksSkeleton() {
  const rows = [];
  for (let i = 0; i < 24; i++) rows.push(<Row key={i} loading />);
  return (
    <>
      <BlocksTableStructure>{rows}</BlocksTableStructure>
    </>
  );
}

export function BlocksTable({ blocks, pages, page }) {
  const blockRows = blocks.map(block => (
    <Row
      key={block.height}
      height={block.height}
      size={block.size}
      time={block.time}
      miner={block.miner}
      txs={block.txs}
    />
  ));
  return (
    <>
      <BlocksTableStructure>{blockRows}</BlocksTableStructure>
      <Pagination totalPages={pages} page={page} url="/blocks" />
    </>
  );
}
