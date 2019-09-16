import React, { Component } from 'react';
import styled from 'styled-components';
import * as Cards from '../../components/Cards/Cards';
import StackedComponent from '../../components/Stacked/StackedComponent';

const Wrapper = styled.div`
  margin: 50px 24px 60px;
`;

export default class TxDetailScreen extends Component {
  render() {
    return (
      <Wrapper>
        {/* ------- Top Card ------ */}
        <Cards.Card>
          <Cards.Header>
            <Cards.HeaderTitle>Transaction Summary</Cards.HeaderTitle>
          </Cards.Header>
          <Cards.Content>
            <Cards.HorizontalContainer>
              <Cards.Column>
                <Cards.ItemContainer>
                  <Cards.ItemLabel>Received</Cards.ItemLabel>
                  <Cards.ItemDetail>
                    4
                  </Cards.ItemDetail>
                </Cards.ItemContainer>
              </Cards.Column>
              <Cards.Column>
                <Cards.ItemContainer>
                  <Cards.ItemLabel>Amount</Cards.ItemLabel>
                  <Cards.ItemDetail>
                    4
                  </Cards.ItemDetail>
                </Cards.ItemContainer>
              </Cards.Column>
              <Cards.Column>
                <Cards.ItemContainer>
                  <Cards.ItemLabel>Fee</Cards.ItemLabel>
                  <Cards.ItemDetail>
                    4
                  </Cards.ItemDetail>
                </Cards.ItemContainer>
              </Cards.Column>
              <Cards.Column>
                <Cards.ItemContainer>
                  <Cards.ItemLabel>Confirmations</Cards.ItemLabel>
                  <Cards.ItemDetail>
                    4
                  </Cards.ItemDetail>
                </Cards.ItemContainer>
              </Cards.Column>
            </Cards.HorizontalContainer>
          </Cards.Content>
        </Cards.Card>

        {/* Bottom Card */}
        <Cards.Card>
          <Cards.Header>
            <Cards.HeaderTitle>Advanced</Cards.HeaderTitle>
          </Cards.Header>
          <div className="card-content">
            <div className="columns">
              <div className="column is-half">
                <table className="table is-fullwidth">
                  <tbody>
                    {/* TODO: Get Node Status */}
                    <tr><StackedComponent label="Hash" value="4" /></tr>
                    <tr><StackedComponent label="Block Height" value="4" /></tr>
                    <tr><StackedComponent label="Locktime" value="4" /></tr>
                  </tbody>
                </table>
              </div>
              <div className="column is-half">
                <table className="table is-fullwidth">
                  <tbody>
                    {/* TODO: Get Node Status */}
                    <tr><StackedComponent label="Witness Hash" value="4" /></tr>
                    <tr><StackedComponent label="Version" value="4" /></tr>
                    <tr><StackedComponent label="Index" value="4" /></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Cards.Card>
      </Wrapper>
    );
  }
}
