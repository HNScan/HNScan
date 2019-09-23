import React, { Suspense } from 'react';
import Home from './Home';

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

export default function HomeScreen() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     info: {},
  //     loading: true,
  //     blocks: [],
  //     txs: [],
  //     names: []
  //   };
  // }

  // async componentDidMount() {
  //   let names = await Api.getNames('close', 0, 0);
  //   this.setState({
  //     blocks: await Api.getBlocks(5, 0, 0),
  //     info: await Api.getInfo(),
  //     names: names.total,
  //     loading: false
  //    });
  //   this.setState({ txs: getTxs(this.state.blocks.result) });
  //
  //   // console.log(this.state.info);
  //   // console.log(this.state.names);
  //   // console.log(this.state.blocks);
  // }


  return (
    <>
      <Suspense fallback={<div>...Loading</div>}>
        <Home />
      </Suspense>
    </>
  )
}
