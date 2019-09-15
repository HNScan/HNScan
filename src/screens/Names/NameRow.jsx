import React, { Component } from 'react';
import Table from 'reactbulma/lib/components/Table/Table.js';
import styled from 'styled-components';

const StateCell = styled(Table.Td)`
  color: ${props => props.theme['--text-color-normal']};
`;

export default class NameRow extends Component {
  render() {
    return (
      <Table.Tr>
        <Table.Td>
          <a className="hnscan-link" href="/name/testName">testName</a>
        </Table.Td>
        <StateCell>OPENING</StateCell>
        <Table.Td>
          <a className="hnscan-link" href="/block/1001">1001</a>
        </Table.Td>
      </Table.Tr>
    )
  }
}
