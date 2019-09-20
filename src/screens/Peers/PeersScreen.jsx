import React, { Component } from 'react';
import * as Home from '../Home/styled-components';
import PeersMapComponent from './PeersMapComponent';
import PeersInfoComponent from './PeersInfoComponent';

export default class PeersScreen extends Component {
  render() {
    return (
      <Home.ContentContainer>
        <PeersMapComponent />
        <PeersInfoComponent />
      </Home.ContentContainer>
    );
  }
}
