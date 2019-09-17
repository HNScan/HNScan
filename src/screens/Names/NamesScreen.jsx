import React, { Component } from 'react';
import Table from 'reactbulma/lib/components/Table/Table.js';
import * as Home from '../Home/styled-components';
import * as Cards from '../../components/Cards/Cards';
import * as Blocks from '../Blocks/styled-components';
import * as Api from '../../api/api';
import NameRow from './NameRow';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

function insertNameRows() {
  let num = 25;
  let names = [];

  for (let i = 0; i < num; i++) {
    names.push(<NameRow key={i} />);
  }

  return names;
}

export default class NamesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      names: []
    };
  }

  async componentDidMount() {
    this.setState({
      names: await Api.getNames('all', 25)
     });
    this.setState({
      loading: false
    });

    console.log(this.state.names);
  }

  // 25 blocks per page
  render() {
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
                  {insertNameRows()}
                </Table.Body>
              </Blocks.BlocksTable>
            </Blocks.TableContainer>
          </Cards.Content>
        </Cards.Card>
        <PaginationComponent totalPages={100} page={10} url="/names" />
      </Home.ContentContainer>
    )
  }
}
