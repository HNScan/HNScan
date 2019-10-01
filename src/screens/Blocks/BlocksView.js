import React from "react";
import { Link } from "react-router-dom";
import * as Cards from "../../components/Cards/Cards";
// import BlocksTable from "./BlockTable";
import Pagination from "../../components/Pagination";
// import { useResource, useResultCache } from "rest-hooks";
// import BlockResource from "../../resources/BlockResource";
import Table from "reactbulma/lib/components/Table/Table.js";
import * as Blocks from "./styled-components";
// @todo fix this.
import { timeAgo, truncateHash } from "../../util/util";
import { Abbr } from "./styled-components.jsx";

function BlockList(props) {
  //Render block rows
  const blocks = props.blocks.map((block, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Link to={"/block/" + block.height}>{block.height}</Link>
        <div className="is-hidden-tablet">Size: {block.size}</div>
      </Table.Td>
      <Table.Td className="is-hidden-mobile">{timeAgo(block.time)}</Table.Td>
      <Table.Td>
        <Link className="is-hidden-mobile" to={"/address/" + block.miner}>
          {block.miner}
        </Link>
        <Link className="is-hidden-tablet" to={"/address/" + block.miner}>
          {truncateHash(block.miner)}
        </Link>
        <div className="is-hidden-tablet">{timeAgo(block.time)}</div>
      </Table.Td>
      <Table.Td className="is-hidden-mobile">{block.size}</Table.Td>
      <Table.Td>{block.txs}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Blocks.TableContainer>
      <Blocks.BlocksTable>
        <Table.Head>
          <Table.Tr>
            <Table.Th>
              <Abbr title="Block Height">Height</Abbr>
            </Table.Th>
            <Table.Th className="is-hidden-mobile">
              <Abbr title="Block Age">Age</Abbr>
            </Table.Th>
            <Table.Th>
              <Abbr title="Miner Address">Miner</Abbr>
            </Table.Th>
            <Table.Th className="is-hidden-mobile">
              <Abbr title="Block Size">Size</Abbr>
            </Table.Th>
            <Table.Th>
              <Abbr title="Number of Transactions">TXs</Abbr>
            </Table.Th>
          </Table.Tr>
        </Table.Head>
        <Table.Body>{blocks}</Table.Body>
      </Blocks.BlocksTable>
    </Blocks.TableContainer>
  );
}

//Main view component
export default function BlocksView(props) {
  return (
    <>
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>HNS Blocks</Cards.HeaderTitle>
        </Cards.Header>
        <Cards.Content>
          <BlockList blocks={props.blocks} />
        </Cards.Content>
      </Cards.Card>
      <Pagination
        totalPages={props.pages}
        page={props.page}
        url="/blocks"
        pageChanger={props.changePage}
      />
    </>
  );
}
