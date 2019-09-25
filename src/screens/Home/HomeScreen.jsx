import React, { Component } from "react";
import * as Home from "./styled-components";
import * as Api from "../../api/api";
import NetworkSummary from "./NetworkSummary";
import RecentTransactions from "./RecentTransactions";
import RecentBlocks from "./RecentBlocks";

function getTxs(blockData) {
  let txs = [];
  for (let i = 0; i < blockData.length; i++) {
    for (let j = 0; j < blockData[i].txs.length; j++) {
      // Creating our own timestamp in the txs data
      blockData[i].txs[j].time = blockData[i].time;
      txs.push(blockData[i].txs[j]);

      // When our 5 recent tx are found break the loop
      if (txs.length >= 5) {
        return txs;
      }
    }
  }
  return txs;
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      loading: true,
      blocks: [],
      txs: [],
      names: []
    };
  }

  async componentDidMount() {
    let names = await Api.getNames("close", 0, 0);
    this.setState({
      blocks: await Api.getBlocks(5, 0, 0),
      info: await Api.getInfo(),
      names: names.total,
      loading: false
    });
    this.setState({ txs: getTxs(this.state.blocks.result) });

    // console.log(this.state.info);
    // console.log(this.state.names);
    // console.log(this.state.blocks);
  }

  render() {
    return (
      // Cards Container
      <Home.ContentContainer>
        <Home.HorizontalContainer>
          <NetworkSummary
            info={this.state.info}
            loading={this.state.loading}
            names={this.state.names}
          />
        </Home.HorizontalContainer>
        <Home.VerticalContainer>
          <RecentTransactions
            txs={this.state.txs}
            loading={this.state.loading}
          />
          <RecentBlocks
            blocks={this.state.blocks.result}
            loading={this.state.loading}
          />
        </Home.VerticalContainer>
      </Home.ContentContainer>
    );
  }
}
