import React from "react";
import { Link } from "react-router-dom";
import DataTable from "components/styles/DataTable";

// Components
import Card from "components/styles/Card";
import Pagination from "components/layout/Pagination";
import Skeleton from "react-loading-skeleton";

const Row = ({ name, state, height, loading }) => (
  <DataTable.Tr>
    <DataTable.Td width="75%">
      {loading ? <Skeleton /> : <Link to={"/name/" + name}>{name}</Link>}
    </DataTable.Td>
    <DataTable.Td>
      {loading ? <Skeleton /> : state}
    </DataTable.Td>
    <DataTable.Td>
      {loading ? <Skeleton /> : <Link to={"/block/" + height}>{height}</Link>}
    </DataTable.Td>
  </DataTable.Tr>
);

function NamesTableStructure({ children }) {
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>TLD Names</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <DataTable.Wrapper>
          <DataTable>
            <DataTable.Head>
              <DataTable.Tr>
                <DataTable.Th>
                  <abbr title="Top Level Domain Name">Name</abbr>
                </DataTable.Th>
                <DataTable.Th>
                  <abbr title="Name Auction State">State</abbr>
                </DataTable.Th>
                <DataTable.Th>
                  <abbr title="Block Height">Height</abbr>
                </DataTable.Th>
              </DataTable.Tr>
            </DataTable.Head>
            <DataTable.Body>{children}</DataTable.Body>
          </DataTable>
        </DataTable.Wrapper>
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
