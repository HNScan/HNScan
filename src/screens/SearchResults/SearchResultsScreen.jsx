import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px auto 60px;
  text-align: center;
  width: 95%;

  @media (min-width: 1024px) {
    width: 90%;
    max-width: 1216px;
  }
`;

const Header = styled.h1`
  margin-top: 50px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;

    @media(min-width: $tablet) {
      font-size: 32px;
    }
`;

const SearchResultsTable = styled.table`
  /* margin-top: 25px; */
  margin: 25px auto 0;
  font-size: 20px;
`;

const TableCell = styled.td`
  color: ${props => props.theme['--text-color-normal']};
`;

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // results: []
      results: [{ type: 'Block', url: '/block/123' }, { type: 'Name', url: '/name/shane' }]
    }
  }

  tableRow() {
    const tableRows = [];
    this.state.results.forEach(result => {
      tableRows.push(
        <tr key={result.type}>
          <TableCell>{result.type}:</TableCell>
          <td>
            <a className="hnscan-link" href={result.url}>{result.url}</a>
          </td>
        </tr>
      )
    });
    return tableRows
  }

  render() {
    if (this.state.results.length === 0) {
      return (
        <Wrapper>
          <Header>We couldn't find what you were looking for</Header>
          <h2>Please try searching again</h2>
          {/* Put searchbar here */}
          {/* form.control.has - icons - left.searchResearch(onsubmit = "search()")
             button.hiddenSearchSubmit(type = "submit")
             input.input.is - rounded.searchbar(
               type = "search"
               placeholder = "Search the HNS Blockchain"
               maxlength = "64")
             span.icon.is - small.is - left
               i.fas.fa - search */}
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Header>We found multiple resources matching your search</Header>
        <SearchResultsTable className="table">
          <tbody>
            {this.tableRow()}
          </tbody>
        </SearchResultsTable>
      </Wrapper>
      //     h1.searchHeader We found multiple resources matching your search
      //     table.table.searchResults
      //       tbody
      //         each result in results
      //           tr
      //             td = result.type + ":"
      //             td
      //               a(href = result.url) = result.url
      );
  }
}


// .searchResearch {
//   margin - top: 50px;
// }

// .searchHeader {
//   margin - top: 50px;
//   font - size: 24px;
//   font - weight: bold;
//   text - align: center;

//   @media(min - width: $tablet) {
//     font - size: 32px;
//   }
// }

// .searchResults {
//   margin - top: 25px;
//   font - size: 20px;
// }
