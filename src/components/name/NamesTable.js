import React from "react";
import styled from "styled-components";
import Table from "reactbulma/lib/components/Table/Table.js";
import { Link } from "react-router-dom";

// Components
import Card from "components/styles/Card";
import Pagination from "components/layout/Pagination";
import Skeleton from "react-loading-skeleton";

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

const Row = ({ name, state, height, loading }) => (
  <Table.Tr>
    <Table.Td width="75%">
      {loading ? <Skeleton /> : <Link to={"/name/" + name}>{name}</Link>}
    </Table.Td>
    <Table.Td>
      {loading ? <Skeleton /> : state}
    </Table.Td>
    <Table.Td>
      {loading ? <Skeleton /> : <Link to={"/block/" + height}>{height}</Link>}
    </Table.Td>
  </Table.Tr>
);

function NamesTableStructure({ children }) {
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>TLD Names</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <TableContainer>
          <DataTable>
            <Table.Head>
              <Table.Tr>
                <Table.Th>
                  <abbr title="Top Level Domain Name">Name</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="Name Auction State">State</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="Block Height">Height</abbr>
                </Table.Th>
              </Table.Tr>
            </Table.Head>
            <Table.Body>{children}</Table.Body>
          </DataTable>
        </TableContainer>
      </Card.Content>
    </Card>
  );
}

export function NamesSkeleton() {
  const rows = [];
  for (let i = 0; i < 24; i++)
    rows.push(<Row key={i} loading />)
  return (
    <NamesTableStructure>
      {rows}
    </NamesTableStructure>
  );
}

export function NamesTable({ names, pages, page, changePage }) {

  const nameRows = names.map((name, index) => (
    <Row key={index} name={name.name} state={name.state} height={name.height} />
  ));

  // 25 blocks per page
  return (
    <>
      <NamesTableStructure>
        {nameRows}
      </NamesTableStructure>
      <Pagination
        totalPages={pages}
        page={page}
        url="/names"
        changePage={changePage}
      />
    </>
  );
}
