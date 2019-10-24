import React from "react";

import Page from "components/styles/Page";

const Previous = ({ page, url, onClick }) => (
  // @todo try to figure out a cleaner way of doing this
  <Page.Button
    to={location => {
      if (page >= 1) {
        return { pathname: url, search: "?p=" + page };
      } else {
        return location;
      }
    }}
    className="pagination-previous"
    disabled={page < 1}
  >
    Previous
  </Page.Button>
);

const Next = ({ page, lastPage, url }) => (
  // @todo try to figure out a cleaner way of doing this
  <Page.Button
    to={location => {
      if (page < lastPage) {
        return { pathname: url, search: "?p=" + (page + 1) };
      } else {
        return location;
      }
    }}
    className="pagination-next"
    disabled={page >= lastPage}
  >
    Next Page
  </Page.Button>
);

const Current = ({ page }) => (
  <Page.Button
    to={location => location}
    className="pagination-link is-current"
    aria-current="page"
  >
    {page}
  </Page.Button>
);

const PreviousPage = ({ page, url }) => {
  let newPage = page - 1;
  if (newPage < 1) return null;
  return (
    <Page.Button
      to={{ pathname: url, search: "?p=" + newPage }}
      className="pagination-link"
    >
      {newPage}
    </Page.Button>
  );
};

const FirstPage = ({ page, url }) => {
  if (page <= 2) return null;
  return (
    <Page.Button to={{ pathname: url, search: "?p=" + 1 }} className="pagination-link">
      {1}
    </Page.Button>
  );
};

const LastPage = ({ page, url, lastPage }) => {
  if (page >= lastPage - 1) return null;
  return (
    <Page.Button
      to={{ pathname: url, search: "?p=" + lastPage }}
      className="pagination-link"
    >
      {lastPage}
    </Page.Button>
  );
};

const NextPage = ({ page, lastPage, url }) => {
  let newPage = page + 1;
  if (page >= lastPage) return null;
  return (
    <Page.Button
      to={{ pathname: url, search: "?p=" + newPage }}
      className="pagination-link"
    >
      {newPage}
    </Page.Button>
  );
};

const PreviousEllipse = ({ page }) => {
  if (page <= 1 + 2) return null;
  return <span className="pagination-ellipse">&hellip;</span>;
};

const NextEllipse = ({ page, lastPage }) => {
  if (page >= lastPage - 2) return null;
  return <span className="pagination-ellipse">&hellip;</span>;
};

// firstPageButton() {
//   if (this.props.page <= this.firstPage + 1) return;
//   return <button
//     onClick={(e) => {this.handleClick(e, this.firstPage)}}
//     className="pagination-link">
//     {this.firstPage}
//     </button>;
// }

// lastPageButton() {
//   if (this.props.page >= this.lastPage - 1) return;
//   return <button
//     onClick={(e) => {this.handleClick(e, this.lastPage)}}
//     className="pagination-link">
//     {this.lastPage}
//     </button>
// }

// export default class PaginationComponent extends Component {
export default function Pagination({ totalPages, page, url }) {
  return (
    <Page
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <Previous page={page - 1} url={url} />
      <Next page={page} lastPage={totalPages} url={url} />
      <Page.List className="pagination-list">
        <FirstPage page={page} url={url} />
        <PreviousEllipse page={page} />
        <PreviousPage page={page} url={url} />
        <Current page={page} />
        <NextPage page={page} url={url} lastPage={totalPages} />
        <NextEllipse page={page} lastPage={totalPages} />
        <LastPage page={page} url={url} lastPage={totalPages} />
      </Page.List>
    </Page>
  );
}
