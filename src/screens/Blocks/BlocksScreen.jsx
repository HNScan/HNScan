import React, { Component } from 'react';
import * as Home from '../Home/styled-components';
import * as Cards from '../../components/Cards/Cards';
import * as Api from '../../api/api';
import BlocksTable from './BlockTable';
import Pagination from '../../components/Pagination/PaginationComponent';

export default class BlocksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      blocks: []
    };
  }

  async componentDidMount() {
    this.setState({
      blocks: await Api.getBlocks(25),
      loading: false
    });

    console.log(this.state.blocks);
  }

  render() {
    return (
      <Home.ContentContainer>
        <Cards.Card>
          <Cards.Header>
            <Cards.HeaderTitle>HNS Blocks</Cards.HeaderTitle>
          </Cards.Header>
          <Cards.Content>
            <BlocksTable blocks={this.state.blocks} loading={this.state.loading} />
          </Cards.Content>
        </Cards.Card>
        <Pagination totalPages={100} page={10} url="/blocks" />
      </Home.ContentContainer>
    )
  }
}
