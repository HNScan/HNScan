import React, { Component } from 'react';
import { Table } from 'reactbulma/lib/components/Table/Table.js';
import * as Blocks from './styled-components';
import * as Util from '../../util/util';

export default class BlockRow extends Component {
  render() {

    let height = this.props.block.height;
    let time = Util.timeAgo(this.props.block.time);
    let miner = this.props.block.txs[0].outputs[0].address;
    let numTxs = this.props.block.txs.length;
    let size = this.props.block.size;

    return (
      <Table.Tr>
        <Table.Td>
          <a href={`/block/${height}`}>{height}</a>
          <Blocks.MobileSize>Size: {size}</Blocks.MobileSize>
        </Table.Td>
        <Blocks.AgeRow>{time}</Blocks.AgeRow>
        <Table.Td>
          <Blocks.MinerAddress href={`/address/${miner}`}>{miner}</Blocks.MinerAddress>
          <Blocks.TruncatedMiner href={`/address/${miner}`}>
            {Util.truncateHash(miner)}
          </Blocks.TruncatedMiner>
          <Blocks.MobileAge>{time}</Blocks.MobileAge>
        </Table.Td>
        <Blocks.SizeRow>{size}</Blocks.SizeRow>
        <Table.Td>{numTxs}</Table.Td>
      </Table.Tr>
    )
  }
}
