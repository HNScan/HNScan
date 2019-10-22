import React, { Suspense, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Table from "reactbulma/lib/components/Table/Table.js";
import styled from "styled-components";
import queryString from "query-string";
import { useResource, useResultCache } from "rest-hooks";

// Components
import Card from "components/styles/Card";
import Pagination from "components/layout/Pagination";
import Skeleton from "react-loading-skeleton";

// Resources
import NameResource from "resources/NameResource";

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

function NamesTableStructure(props) {
  return (
    <Card>
      <Card.Header>
        <Card.HeaderTitle>TLD Names</Card.HeaderTitle>
      </Card.Header>
      <Card.Content>
        <TableContainer>
          <BlocksTable>
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
            <Table.Body>{props.children}</Table.Body>
          </BlocksTable>
        </TableContainer>
      </Card.Content>
    </Card>
  );
}

function NamesSkeleton() {
  const rows = [];
  for (let i = 0; i < 24; i++)
    rows.push(<Row key={i} loading />)
  return rows;
}

function NamesTable({ page, changePage }) {
  const pageOffset = (page - 1) * 25;
  const names = useResource(NameResource.listShape(), { offset: pageOffset });
  const { limit, total } = useResultCache(NameResource.listShape(), {
    offset: pageOffset
  });
  const pages = Math.ceil(total / limit);
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

//Turn getPage into it's own hook.... @todo

//@todo back button is not working right now.
export default function Names(props) {
  const location = useLocation();
  let currentPage = 1;
  let query = queryString.parse(location.search);
  // let currentPage = 1;
  if (!isNaN(parseInt(query.p)) && query.p > 0) {
    currentPage = parseInt(query.p);
  }

  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    let currentPage = 1;
    let query = queryString.parse(location.search);
    // let currentPage = 1;
    if (!isNaN(parseInt(query.p)) && query.p > 0) {
      currentPage = parseInt(query.p);
    }
    setPage(currentPage);
  }, [location.search]);
  const history = useHistory();

  //@todo this is actually probably bad. Don't pass a state changer down, let's just have Pagination use Link components.
  const changePage = page => {
    // Update Page Location
    history.push({ pathname: "/names", search: "?p=" + page });
    setPage(page);
  };

  return (
    <>
      <Suspense
        fallback={
          <NamesTableStructure>
            <NamesSkeleton />
          </NamesTableStructure>
        }
      >
        <NamesTable page={page} changePage={changePage} />
      </Suspense>
    </>
  );
}
