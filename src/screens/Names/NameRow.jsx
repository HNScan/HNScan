import React, { Component } from 'react';
import Table from 'reactbulma/lib/components/Table/Table.js';
import styled from 'styled-components';

const StateCell = styled(Table.Td)`
  color: ${props => props.theme['--text-color-normal']};
`;

export default class NameRow extends Component {
  render() {

    let name = this.props.name.name;
    let state = this.props.name.state;
    let height = this.props.name.height;

    return (
      <Table.Tr>
        <Table.Td>
          <a className="hnscan-link" href={`/name/${name}`}>{name}</a>
        </Table.Td>
        <StateCell>{state}</StateCell>
        <Table.Td>
          <a className="hnscan-link" href={`/block/${height}`}>{height}</a>
        </Table.Td>
      </Table.Tr>
    )
  }
}
