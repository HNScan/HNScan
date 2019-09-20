import React, { Component } from 'react';
import * as Home from '../Home/styled-components';
import * as Cards from '../../components/Cards/Cards';
import StackedComponent from '../../components/Stacked/StackedComponent';

export default class PeersInfoComponent extends Component {
  render() {
    return (
      <Home.ContentContainer>
        <Cards.Card>
          <Cards.Header>
            <Cards.HeaderTitle>Peers</Cards.HeaderTitle>
          </Cards.Header>
          <Cards.Content>
            <Cards.SummaryContainer>
              <table>
                <tbody>
                  <tr>
                    <StackedComponent label="title" value="shane"/>
                  </tr>
                </tbody>
              </table>
            </Cards.SummaryContainer>
          </Cards.Content>
        </Cards.Card>
      </Home.ContentContainer>
    );
  }
}
