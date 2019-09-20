import React, { Component } from 'react';
import * as Home from '../Home/styled-components';
import * as Cards from '../../components/Cards/Cards';
import * as Api from '../../api/api';
import BlocksTable from './BlockTable';
import Pagination from '../../components/Pagination/PaginationComponent';
import queryString from 'query-string';

export default class BlocksScreen extends Component {
  constructor(props) {
    super(props);

    // Page Location
    let query = queryString.parse(props.location.search);
    let page = 1;
    if (!isNaN(parseInt(query.p)) && query.p > 0) {
      page = parseInt(query.p);
    }

    this.state = {
      loading: true,
      blocks: [],
      limit: 25,
      pages: 1,
      page: page
    };

    this.loadBlocks = this.loadBlocks.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  async componentDidMount() {
    await this.loadBlocks();
  }

  async changePage(page) {
    await this.setState({
      page: page
    });

    // Update Page Location
    this.props.history.push({pathname: "/blocks", search: `?p=${page}`})

    await this.loadBlocks();
  }

  async loadBlocks() {
    let offset = (this.state.page - 1) * this.state.limit;
    let limit = this.state.limit;
    let blocks = await Api.getBlocks(limit, offset);
    let pages = Math.ceil(blocks.total / blocks.limit);

    console.log(blocks);
    
    this.setState({
      blocks: blocks.result,
      pages: pages,
      loading: false
     });

     window.scrollTo(0,0);
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
        <Pagination totalPages={this.state.pages} page={this.state.page} url="/blocks" pageChanger={this.changePage} />
      </Home.ContentContainer>
    )
  }
}
