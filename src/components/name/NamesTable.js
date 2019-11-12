import React from "react";
import { Link } from "react-router-dom";
import { Pagination, Card, Skeleton, Table } from "@urkellabs/ucl";
import { useTranslation } from "react-i18next";

const Row = ({ name, state, height, loading }) => (
  <Table.Tr>
    <Table.Td width="75%">
      {loading ? <Skeleton /> : <Link to={"/name/" + name}>{name}</Link>}
    </Table.Td>
    <Table.Td>{loading ? <Skeleton /> : state}</Table.Td>
    <Table.Td>
      {loading ? <Skeleton /> : <Link to={"/block/" + height}>{height}</Link>}
    </Table.Td>
  </Table.Tr>
);

function NamesTableStructure({ children }) {
  const { t } = useTranslation();
  return (
    <Card title="TLD Names">
      <Table>
        <Table.Head>
          <Table.Tr>
            <Table.Th>{t("names.name")}</Table.Th>
            <Table.Th>{t("names.state")}</Table.Th>
            <Table.Th>{t("names.height")}</Table.Th>
          </Table.Tr>
        </Table.Head>
        <Table.Body>{children}</Table.Body>
      </Table>
    </Card>
  );
}

export function NamesSkeleton() {
  const rows = [];
  for (let i = 0; i < 24; i++) rows.push(<Row key={i} loading />);
  return <NamesTableStructure>{rows}</NamesTableStructure>;
}

export function NamesTable({ names, pages, page, changePage }) {
  const nameRows = names.map((name, index) => (
    <Row key={index} name={name.name} state={name.state} height={name.height} />
  ));

  // 25 blocks per page
  return (
    <>
      <NamesTableStructure>{nameRows}</NamesTableStructure>
      <Pagination
        totalPages={pages}
        page={page}
        url="/names"
        changePage={changePage}
      />
    </>
  );
}
