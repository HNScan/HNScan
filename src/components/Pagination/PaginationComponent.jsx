import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  margin-top: 30px;
`;

export default class PaginationComponent extends Component {
  constructor(props) {
    super(props);
    if (!this.props.url) throw Error('no url provided for PaginationComponent');

    // this.props = {
    //   page: this.props.page || 1,
    //   totalPages: this.props.totalPages || 1,
    //   url: this.props.url,
    // };
  }

  // computed values
  get firstPage() { return 1 }
  get lastPage() { return this.props.totalPages }
  get nextPage() { return (this.props.page + 1 === this.props.totalPages) ? undefined : this.props.page + 1 }
  get previousPage() { return (this.props.page - 1  === 0) ? undefined : this.props.page - 1 }


  handleClick(e, page) {
    e.preventDefault();
    this.props.pageChanger(page);
  }

  // rendered components
  previousButton() {
    let prevPage = this.props.page - 1;

    return <button
      className="pagination-previous"
      onClick={(e) => {this.handleClick(e, prevPage)}}
      disabled={this.props.page === this.firstPage}>
      Previous
    </button>;
  }

  nextButton() {
    let nextPage = this.props.page + 1;

    return <button
      className="pagination-next"
      onClick={(e) => {this.handleClick(e, nextPage)}}
      disabled={this.props.page === this.lastPage }>
      Next
      </button>;
  }

  currentPageButton() {
    return <div
      className="pagination-link is-current"
      aria-current="page">
      {this.props.page}
      </div>;
  }

  previousPageButton() {
    let page = this.props.page - 1;

    if (this.props.page === this.firstPage) return;
    return <button
      onClick={(e) => {this.handleClick(e, page)}}
      className="pagination-link">
      {this.props.page - 1}
      </button>;
  }

  previousEllipse() {
    if (this.props.page <= this.firstPage + 2 ) return;
    return <span
      className="pagination-ellipse">
      &hellip;
      </span>;
  }

  nextPageButton() {
    let page = this.props.page + 1;

    if (this.props.page === this.lastPage) return;
    return <button
      onClick={(e) => {this.handleClick(e, page)}}
      className="pagination-link">
      {this.props.page + 1}
      </button>;
  }

  nextEllipse() {
    if (this.props.page >= this.lastPage - 2) return;
    return <span
      className="pagination-ellipse">
      &hellip;
      </span>;
  }

  firstPageButton() {
    if (this.props.page <= this.firstPage + 1) return;
    return <button
      onClick={(e) => {this.handleClick(e, this.firstPage)}}
      className="pagination-link">
      {this.firstPage}
      </button>;
  }

  lastPageButton() {
    if (this.props.page >= this.lastPage - 1) return;
    return <button
      onClick={(e) => {this.handleClick(e, this.lastPage)}}
      className="pagination-link">
      {this.lastPage}
      </button>
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
