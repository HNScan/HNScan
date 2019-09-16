import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 24px;
`;

export default class PaginationComponent extends Component {
  constructor(props) {
    super(props);
    if (!this.props.url) throw Error('no url provided for PaginationComponent');

    this.state = {
      page: this.props.page || 1,
      totalPages: this.props.totalPages || 1,
      url: this.props.url,
    };
  }

  // computed values
  get firstPage() { return 1 }
  get lastPage() { return this.state.totalPages }
  get nextPage() { return (this.state.page + 1 === this.state.totalPages)? undefined : this.state.page + 1 }
  get previousPage() { return (this.state.page - 1  === 0) ? undefined : this.state.page + 1 }

  // rendered components
  previousButton() {
    return <a
      href={`${this.state.url}?p=${this.state.page - 1}`}
      className="pagination-previous"
      disabled={this.state.page === this.firstPage}>
      Previous
    </a>;
  }

  nextButton() {
    return <a
      href={`${this.state.url}?p=${this.state.page + 1}`}
      className="pagination-next"
      disabled={this.state.page === this.lastPage }>
      Next
      </a>;
  }

  currentPageButton() {
    return <div
      className="pagination-link is-current"
      aria-current="page">
      {this.state.page}
      </div>;
  }

  previousPageButton() {
    if (this.state.page === this.firstPage) return;
    return <a
      href={`${this.state.url}?p=${this.state.page - 1}`}
      className="pagination-link">
      {this.state.page - 1}
      </a>;
  }

  previousEllipse() {
    if (this.state.page <= this.firstPage + 2 ) return;
    return <span
      className="pagination-ellipse">
      &hellip;
      </span>;
  }

  nextPageButton() {
    if (this.state.page === this.lastPage) return;
    return <a
      href={`${this.state.url}?p=${this.state.page + 1}`}
      className="pagination-link">
      {this.state.page + 1}
      </a>;
  }

  nextEllipse() {
    if (this.state.page >= this.lastPage - 2) return;
    return <span
      className="pagination-ellipse">
      &hellip;
      </span>;
  }

  firstPageButton() {
    if (this.state.page <= this.firstPage + 1) return;
    return <a
      href={`${this.state.url}?p=${this.firstPage}`}
      className="pagination-link">
      {this.firstPage}
      </a>;
  }

  lastPageButton() {
    if (this.state.page >= this.lastPage - 1) return;
    return <a
      href={`${this.state.url}?p=${this.lastPage}`}
      className="pagination-link">
      {this.lastPage}
      </a>
  }

  render() {
    return (
      <Wrapper className="pagination-list">
        {this.previousButton()}
        {this.firstPageButton()}
        {this.previousEllipse()}
        {this.previousPageButton()}
        {this.currentPageButton()}
        {this.nextPageButton()}
        {this.nextEllipse()}
        {this.lastPageButton()}
        {this.nextButton()}
      </Wrapper>
    );
  }
}
