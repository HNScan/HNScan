import React, { Component } from 'react';
import Table from 'reactbulma/lib/components/Table/Table.js';
import * as Blocks from './styled-components';
import BlockRow from './BlockRow';
// import * as Util from '../../util/util';

function insertBlockRows(blockData) {
  let rows = [];
  for (let i = 0; i < blockData.length; i++) {
    rows.push(<BlockRow key={i} block={blockData[i]} />);
  }
  return rows;
}

export default class BlocksTable extends Component {
  render() {
    if (this.props.loading) {
      return (
        //TODO: Need a Skeleton Here
        <div>loading...</div>
      )
    } else {
      return (
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
              {insertBlockRows(this.props.blocks)}
            </Table.Body>
          </Blocks.BlocksTable>
        </Blocks.TableContainer>
      )
    }
  }
}
