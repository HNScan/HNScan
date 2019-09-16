import React, { Component } from 'react';
import styled from 'styled-components';
import * as Cards from '../../components/Cards/Cards';
import StackedComponent from '../../components/Stacked/StackedComponent';

const Wrapper = styled.div`
  margin: 50px 24px 60px;
`;

export default class BlockDetailScreen extends Component {
  render() {
    return (
      <Wrapper>
        {/* ------- Top Card ------ */}
        <Cards.Card>
          <Cards.Header>
            <Cards.HeaderTitle>Block XXXXX Summary</Cards.HeaderTitle>
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
                  <Cards.ItemLabel>Total Transactions</Cards.ItemLabel>
                  <Cards.ItemDetail>
                    4
                  </Cards.ItemDetail>
                </Cards.ItemContainer>
              </Cards.Column>
              <Cards.Column>
                <Cards.ItemContainer>
                  <Cards.ItemLabel>Total Fees</Cards.ItemLabel>
                  <Cards.ItemDetail>
                    4
                  </Cards.ItemDetail>
                </Cards.ItemContainer>
              </Cards.Column>
            </Cards.HorizontalContainer>
            <Cards.HorizontalContainer>
              <Cards.Column>
                <Cards.ItemContainer>
                  <Cards.ItemLabel>Mined By</Cards.ItemLabel>
                  <Cards.ItemDetail>
                    4
                  </Cards.ItemDetail>
                </Cards.ItemContainer>
              </Cards.Column>
              <Cards.Column>
                <Cards.ItemContainer>
                  <Cards.ItemLabel>Weight</Cards.ItemLabel>
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
                    <tr><StackedComponent label="Previous Block" value="4" /></tr>
                    <tr><StackedComponent label="Difficulty" value="4" /></tr>
                    <tr><StackedComponent label="Version" value="4" /></tr>
                    <tr><StackedComponent label="Bits" value="4" /></tr>
                    <tr><StackedComponent label="Size" value="4" /></tr>
                    <tr><StackedComponent label="Average Fee" value="4" /></tr>
                  </tbody>
                </table>
              </div>
              <div className="column is-half">
                <table className="table is-fullwidth">
                  <tbody>
                    {/* TODO: Get Node Status */}
                    <tr><StackedComponent label="Hash" value="4" /></tr>
                    <tr><StackedComponent label="Merkle Root" value="4" /></tr>
                    <tr><StackedComponent label="Tree Root" value="4" /></tr>
                    <tr><StackedComponent label="Reserved Root" value="4" /></tr>
                    <tr><StackedComponent label="Chainwork" value="4" /></tr>
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
