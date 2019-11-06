import React from "react";

import { Pagination, Card, Skeleton, Hidden } from "@urkellabs/ucl";
import { Link } from "react-router-dom";

// Components
import DataTable from "components/styles/DataTable";

// Util
import { timeAgo, truncateHash } from "utils/util";

function Row({ height, size, time, miner, txs, loading }) {
  if (loading) {
    // @todo figure out a more elegant way to construct the skeleton
    return (
      <DataTable.Tr>
        <Hidden mobile>
          <DataTable.Td width="10%">
            <Skeleton />
          </DataTable.Td>
        </Hidden>
        <DataTable.Td>
          <Skeleton />
        </DataTable.Td>
        <DataTable.Td width="50%">
          <Skeleton />
        </DataTable.Td>
        <DataTable.Td width="10%">
          <Skeleton />
        </DataTable.Td>
        <Hidden mobile>
          <DataTable.Td width="10%">
            <Skeleton />
          </DataTable.Td>
        </Hidden>
      </DataTable.Tr>
    );
  }
  return (
    <DataTable.Tr>
      <DataTable.Td>
        <Link to={"/block/" + height}>{height}</Link>
        <Hidden tablet>Size: {size} </Hidden>
      </DataTable.Td>
      <Hidden onlyMobile as={DataTable.Td}>
        {timeAgo(time)}
      </Hidden>
      <DataTable.Td>
        <Hidden onlyMobile>
          <Link to={"/address/" + miner}>{miner}</Link>
        </Hidden>
        <Hidden tablet>
          <Link to={"/address/" + miner}>{truncateHash(miner)}</Link>
        </Hidden>
        <Hidden tablet>{timeAgo(time)}</Hidden>
      </DataTable.Td>
      <Hidden onlyMobile as={DataTable.Th}>
        {size}
      </Hidden>
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
              <Hidden onlyMobile as={DataTable.Th}>
                Age
              </Hidden>
              <DataTable.Th>Miner</DataTable.Th>
              <Hidden onlyMobile as={DataTable.Th}>
                Size
              </Hidden>
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
