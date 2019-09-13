import React, { Component } from 'react';
import { Table } from 'reactbulma';
import * as Blocks from './styled-components';
import * as Util from '../../util/util';

export default class BlockRow extends Component {
  render() {

    let height = this.props.block.height;
    let time = Util.timeAgo(this.props.block.time);
    let miner = this.props.block.txs[0].outputs[0].address;
    let numTxs = this.props.block.txs.length;

    return (
      <Table.Tr>
        <Table.Td>
          <a href={`/block/${height}`}>{height}</a>
          <Blocks.MobileSize>Size: 355</Blocks.MobileSize>
        </Table.Td>
        <Blocks.AgeRow>{time}</Blocks.AgeRow>
        <Table.Td>
          <Blocks.MinerAddress href={`/address/${miner}`}>{miner}</Blocks.MinerAddress>
          <Blocks.TruncatedMiner href={`/address/${miner}`}>
            {Util.truncateHash(miner)}
          </Blocks.TruncatedMiner>
          <Blocks.MobileAge>{time}</Blocks.MobileAge>
        </Table.Td>
        <Blocks.SizeRow>355</Blocks.SizeRow>
        <Table.Td>
          <a href={`/txs?block=${height}`}>{numTxs}</a>
        </Table.Td>
      </Table.Tr>
    )
  }
}
