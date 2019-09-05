import React, { Component } from 'react';
import { Table } from 'reactbulma';
// import * as Blocks from '../Blocks/styled-components';

export default class NameRow extends Component {
  render() {
    return (
      <Table.Tr>
        <Table.Td>
          <a href="/name/testName">testName</a>
        </Table.Td>
        <Table.Td>OPENING</Table.Td>
        <Table.Td>
          <a href="/block/1001">1001</a>
        </Table.Td>
      </Table.Tr>
    )
  }
}
