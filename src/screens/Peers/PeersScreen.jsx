import React, { Component } from 'react';

import PeersMapComponent from './PeersMapComponent';
import PeersInfoComponent from './PeersInfoComponent';

import * as Peers from './styled-components';

export default class PeersScreen extends Component {
  render() {
    return (
      <Peers.Wrapper>
        <PeersMapComponent />
        <PeersInfoComponent />
      </Peers.Wrapper>
    );
  }
}