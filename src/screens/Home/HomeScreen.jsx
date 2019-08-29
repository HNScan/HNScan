import React, { Component } from 'react';
import * as Home from './styled-components';
import * as Cards from '../../components/Cards/Cards';


export default class HomeScreen extends Component {
  render() {
    return (
      // Cards Container
      <Home.ContentContainer>

        {/* Horizontal card container */}
        <Home.HorizontalContainer>
          <Cards.Card>
            <Cards.Header>
              <Cards.HeaderTitle>Network Summary</Cards.HeaderTitle>
            </Cards.Header>
          </Cards.Card>
        </Home.HorizontalContainer>

        {/* Vertical card container */}
        <Home.VerticalContainer>
          <Home.IndividualCardContainer>
            <Cards.Card>
              <Cards.Header>
                <Cards.HeaderTitle>Recent Transactions</Cards.HeaderTitle>
              </Cards.Header>
            </Cards.Card>
          </Home.IndividualCardContainer>
          <Home.IndividualCardContainer>
            <Cards.Card>
              <Cards.Header>
                <Cards.HeaderTitle>Recent Blocks</Cards.HeaderTitle>
                <Cards.HeaderLink href="/blocks">View All</Cards.HeaderLink>
              </Cards.Header>
            </Cards.Card>
          </Home.IndividualCardContainer>
        </Home.VerticalContainer>

      </Home.ContentContainer>
    )
  }
}
