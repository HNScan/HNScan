import React, { Component } from 'react';
import { Table } from 'reactbulma';
import * as Home from '../Home/styled-components';
import * as Cards from '../../components/Cards/Cards';
import * as Blocks from './styled-components';
import BlockRow from './BlockRow';

function insertBlockRows() {
  let num = 25;
  let rows = [];

  for (let i = 0; i < num; i++) {
    rows.push(<BlockRow key={i} />);
  }

  return rows;
}

export default class BlocksScreen extends Component {
  // 25 blocks per page
  render() {
    return (
      <Home.ContentContainer>
        <Cards.Card>
          <Cards.Header>
            <Cards.HeaderTitle>HNS Blocks</Cards.HeaderTitle>
          </Cards.Header>
          <Cards.Content>

            <Blocks.TableContainer>
              <Blocks.BlocksTable>
                <Table.Head>
                  <Table.Tr>
                    <Table.Th><Blocks.Abbr title="Block Height">Height</Blocks.Abbr></Table.Th>
                    <Blocks.AgeHead><Blocks.Abbr title="Block Age">Age</Blocks.Abbr></Blocks.AgeHead>
                    <Table.Th><Blocks.Abbr title="Miner Address">Miner</Blocks.Abbr></Table.Th>
                    <Blocks.SizeHead><Blocks.Abbr title="Block Size">Size</Blocks.Abbr></Blocks.SizeHead>
                    <Table.Th><Blocks.Abbr title="Number of Transactions">TXs</Blocks.Abbr></Table.Th>
                  </Table.Tr>
                </Table.Head>
                <Table.Body>
                  {insertBlockRows()}
                </Table.Body>
              </Blocks.BlocksTable>
            </Blocks.TableContainer>

          </Cards.Content>
        </Cards.Card>
      </Home.ContentContainer>
    )
  }
}
