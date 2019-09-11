import React, { Component } from 'react';
import { Table } from 'reactbulma';
import * as Blocks from './styled-components';
import * as Util from '../../util/util';

export default class BlockRow extends Component {
  render() {
    return (
      <Table.Tr>
        <Table.Td>
          <a href="/block/1001">1001</a>
          <Blocks.MobileSize>Size: 355</Blocks.MobileSize>
        </Table.Td>
        <Blocks.AgeRow>10 Minutes Ago</Blocks.AgeRow>
        <Table.Td>
          <Blocks.MinerAddress href="/address/ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc">ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc</Blocks.MinerAddress>
          <Blocks.TruncatedMiner href="/address/ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc">
            {Util.truncateHash("ts1qg2schj9h0e3xr83jk0evy3h8m4wr0uk9qtdtzc")}
          </Blocks.TruncatedMiner>
          <Blocks.MobileAge>10 Minutes Ago</Blocks.MobileAge>
        </Table.Td>
        <Blocks.SizeRow>355</Blocks.SizeRow>
        <Table.Td>
          <a href="/txs?block=1001">1</a>
        </Table.Td>
      </Table.Tr>
    )
  }
}
