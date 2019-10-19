import React, { Suspense, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Table from "reactbulma/lib/components/Table/Table.js";
import styled from "styled-components";
import queryString from "query-string";
import { useResource, useResultCache } from "rest-hooks";

// Components
import Card from "components/styles/Card";
import Pagination from "components/layout/Pagination";

// Resources
import NameResource from "resources/NameResource";

export const TableContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  @media (min-width: 680px) {
    padding: 1.5rem;
  }
`;

export const BlocksTable = styled(Table)`
  color: ${props => props.theme["--text-color-normal"]} !important;
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

//@todo needed?
const StateCell = styled(Table.Td)`
  color: ${props => props.theme["--text-color-normal"]};
`;

const Row = ({ name, state, height }) => (
  <Table.Tr>
    <Table.Td>
      <Link to={"/name/" + name}>{name}</Link>
    </Table.Td>
    <StateCell>{state}</StateCell>
    <Table.Td>
      <Link to={"/block/" + height}>{height}</Link>
    </Table.Td>
  </Table.Tr>
);

function NamesContainer(props) {
  const pageOffset = (props.page - 1) * 25;
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
                    <Abbr title="Top Level Domain Name">Name</Abbr>
                  </Table.Th>
                  <Table.Th>
                    <Abbr title="Name Auction State">State</Abbr>
                  </Table.Th>
                  <Table.Th>
                    <Abbr title="Block Height">Height</Abbr>
                  </Table.Th>
                </Table.Tr>
              </Table.Head>
              <Table.Body>{nameRows}</Table.Body>
            </BlocksTable>
          </TableContainer>
        </Card.Content>
      </Card>
      <Pagination
        totalPages={pages}
        page={props.page}
        url="/names"
        changePage={props.changePage}
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
          <div>
            <p>Hi</p>
          </div>
          // Blocks skeleton
        }
      >
        <NamesContainer page={page} changePage={changePage} />
      </Suspense>
    </>
  );
}
