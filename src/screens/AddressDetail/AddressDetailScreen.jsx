import React, { Component } from 'react';
import styled from 'styled-components';
import * as Cards from '../../components/Cards/Cards';
import * as Detail from './styled-components';

const Wrapper = styled.div`
  margin: 50px 24px 60px;
`;

export default class AddressDetailScreen extends Component {

  renderTransactions() {
    return <>
      <Detail.Header>TX XXX: <a className="hnscan-link" href="www.google.com">very343434longhashkjfd34</a></Detail.Header>
      <Detail.BorderedContainer>
        <Detail.FullColumn>
          <Detail.ColumnHeader>XXX Inputs</Detail.ColumnHeader>
          <div>Something blah</div>
          <a className="hnscan-link" href="www.google.com">tslksjfkjlkjdsj234jlkdjfjifgheh</a>
        </Detail.FullColumn>
        <Detail.FullColumn>
          <Detail.ColumnHeader>XXX Outputs</Detail.ColumnHeader>
          <div>Something blah</div>
          <a className="hnscan-link" href="www.google.com">tslksjfkjlkjdsj234jlkdjfjifgheh</a>
        </Detail.FullColumn>
      </Detail.BorderedContainer>
    </>
  }

  render() {
    return (
      <Wrapper>
        {/* ------- Top Card ------ */}
        <Cards.Card>
          <Cards.Header>
            <Cards.HeaderTitle>Address Summary</Cards.HeaderTitle>
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
                  <Cards.ItemLabel>Spent</Cards.ItemLabel>
                  <Cards.ItemDetail>
                    4
                  </Cards.ItemDetail>
                </Cards.ItemContainer>
              </Cards.Column>
              <Cards.Column>
                <Cards.ItemContainer>
                  <Cards.ItemLabel>Balance</Cards.ItemLabel>
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
            <Cards.HeaderTitle>XXXX Transactions</Cards.HeaderTitle>
          </Cards.Header>
          <Cards.Content>

            <Detail.Wrapper>
            {this.renderTransactions()}
            {this.renderTransactions()}
           </Detail.Wrapper>

          </Cards.Content>
        </Cards.Card>
      </Wrapper>
    );
  }
}
