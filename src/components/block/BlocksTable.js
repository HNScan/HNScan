import React from "react";
import { Pagination, Card, Skeleton, Hidden, Table } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

// Components
import Link from "components/Link";

// Util
import { timeAgo, truncateHash } from "utils/util";

function Row({ height, size, time, miner, txs, loading }) {
  const { t } = useTranslation();
  if (loading) {
    // @todo figure out a more elegant way to construct the skeleton
    return (
      <Table.Tr>
        <Hidden onlyMobile as={Table.Td} width="10%">
          <Skeleton />
        </Hidden>
        <Table.Td>
          <Skeleton />
        </Table.Td>
        <Table.Td width="50%">
          <Skeleton />
        </Table.Td>
        <Table.Td width="10%">
          <Skeleton />
        </Table.Td>
        <Hidden onlyMobile as={Table.Td} width="10%">
          <Skeleton />
        </Hidden>
      </Table.Tr>
    );
  }
  return (
    <Table.Tr>
      <Table.Td>
        <Link to={"/block/" + height}>{height}</Link>
        <Hidden tablet>{t("blocks.size") + size} </Hidden>
      </Table.Td>
      <Hidden onlyMobile as={Table.Td}>
        {timeAgo(time)}
      </Hidden>
      <Table.Td>
        <Hidden onlyMobile>
          <Link to={"/address/" + miner}>{miner}</Link>
        </Hidden>
        <Hidden tablet>
          <Link to={"/address/" + miner}>{truncateHash(miner)}</Link>
        </Hidden>
        <Hidden tablet>{timeAgo(time)}</Hidden>
      </Table.Td>
      <Hidden onlyMobile as={Table.Td}>
        {size}
      </Hidden>
      <Table.Td>{txs}</Table.Td>
    </Table.Tr>
  );
}

function BlocksTableStructure({ children }) {
  const { t } = useTranslation();
  return (
    <Card title={t("blocks.title")}>
      <Table>
        <Table.Head>
          <Table.Tr>
            <Table.Th>{t("blocks.height")}</Table.Th>
            <Hidden onlyMobile as={Table.Th}>
              {t("blocks.age")}
            </Hidden>
            <Table.Th>{t("blocks.miner")}</Table.Th>
            <Hidden onlyMobile as={Table.Th}>
              {t("blocks.size")}
            </Hidden>
            <Table.Th>{t("blocks.txs")}</Table.Th>
          </Table.Tr>
        </Table.Head>
        <Table.Body>{children}</Table.Body>
      </Table>
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
