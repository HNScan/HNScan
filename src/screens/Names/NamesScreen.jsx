import React, { Component } from 'react';
import Table from 'reactbulma/lib/components/Table/Table.js';
import * as Home from '../Home/styled-components';
import * as Cards from '../../components/Cards/Cards';
import * as Blocks from '../Blocks/styled-components';
import * as Api from '../../api/api';
import NameRow from './NameRow';
import PaginationComponent from '../../components/Pagination/PaginationComponent';
import queryString from 'query-string';

function insertNameRows(namesData) {
  let names = [];
  for (let i = 0; i < namesData.length; i++) {
    names.push(<NameRow key={i} name={namesData[i]}/>);
  }
  return names;
}

export default class NamesScreen extends Component {
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
      names: [],
      limit: 25,
      pages: 1,
      page: page
    };

    this.loadNames = this.loadNames.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  async componentDidMount() {
    await this.loadNames();
  }

  async changePage(page) {
    await this.setState({
      page: page
    });

    // Update Page Location
    this.props.history.push({pathname: "/names", search: `?p=${page}`})

    await this.loadNames();
  }

  async loadNames() {
    let offset = (this.state.page - 1) * this.state.limit;
    let limit = this.state.limit;
    let names = await Api.getNames("all", limit, offset);
    let pages = Math.ceil(names.total / names.limit);

    this.setState({
      names: names.result,
      pages: pages,
      loading: false
     });

     window.scrollTo(0,0);
  }

  // 25 blocks per page
  render() {
    if (this.props.loading) {
      return (
        //TODO: Need a Skeleton Here
        <div>loading...</div>
      )
    } else {
      return (
        <Home.ContentContainer>
          <Cards.Card>
            <Cards.Header>
              <Cards.HeaderTitle>TLD Names</Cards.HeaderTitle>
            </Cards.Header>
            <Cards.Content>
              <Blocks.TableContainer>
                <Blocks.BlocksTable>
                  <Table.Head>
                    <Table.Tr>
                      <Table.Th><Blocks.Abbr title="Top Level Domain Name">Name</Blocks.Abbr></Table.Th>
                      <Table.Th><Blocks.Abbr title="Name Auction State">State</Blocks.Abbr></Table.Th>
                      <Table.Th><Blocks.Abbr title="Block Height">Height</Blocks.Abbr></Table.Th>
                    </Table.Tr>
                  </Table.Head>
                  <Table.Body>
                    {insertNameRows(this.state.names)}
                  </Table.Body>
                </Blocks.BlocksTable>
              </Blocks.TableContainer>
            </Cards.Content>
          </Cards.Card>
          <PaginationComponent totalPages={this.state.pages} page={this.state.page} url="/names" pageChanger={this.changePage} />
        </Home.ContentContainer>
      )
    }
  }
}
