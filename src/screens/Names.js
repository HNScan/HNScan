import React, { Suspense, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Table from "reactbulma/lib/components/Table/Table.js";
import styled from "styled-components";
import * as Cards from "../components/Cards/Cards";
import * as Blocks from "./Blocks/styled-components";
import Pagination from "../components/Pagination";
import queryString from "query-string";
import { useResource, useResultCache } from "rest-hooks";
import NameResource from "../resources/NameResource";

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
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>TLD Names</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>
          <Blocks.TableContainer>
            <Blocks.BlocksTable>
              <Table.Head>
                <Table.Tr>
                  <Table.Th>
                    <Blocks.Abbr title="Top Level Domain Name">
                      Name
                    </Blocks.Abbr>
                  </Table.Th>
                  <Table.Th>
                    <Blocks.Abbr title="Name Auction State">State</Blocks.Abbr>
                  </Table.Th>
                  <Table.Th>
                    <Blocks.Abbr title="Block Height">Height</Blocks.Abbr>
                  </Table.Th>
                </Table.Tr>
              </Table.Head>
              <Table.Body>{nameRows}</Table.Body>
            </Blocks.BlocksTable>
          </Blocks.TableContainer>
        </Cards.Content>
      </Cards.Card>
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
