import React, { Component } from 'react';
import Table from 'reactbulma/lib/components/Table/Table.js';
// import * as Blocks from '../Blocks/styled-components';

export default class NameRow extends Component {
  render() {
    return (
      <Table.Tr>
        <Table.Td>
          <a className="hnscan-link" href="/name/testName">testName</a>
        </Table.Td>
        <Table.Td>OPENING</Table.Td>
        <Table.Td>
          <a className="hnscan-link" href="/block/1001">1001</a>
        </Table.Td>
      </Table.Tr>
    )
  }
}
