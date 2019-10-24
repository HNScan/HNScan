import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import ScrollToTopOnMount from "components/shared/ScrollToTopOnMount";

//@todo move completely to styled components (Pagination Nav, is-centered).

const Wrapper = styled.nav`
  // padding: 10px;
  // margin-top: 30px;
  margin-top: 50px;
  width: 100%;
`;

const List = styled.ul``;

const Previous = ({ page, url, onClick }) => (
  // @todo try to figure out a cleaner way of doing this
  <Link
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
  </Link>
);

const Next = ({ page, lastPage, url }) => (
  // @todo try to figure out a cleaner way of doing this
  <Link
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
  </Link>
);

const Current = ({ page }) => (
  <Link
    to={location => location}
    className="pagination-link is-current"
    aria-current="page"
  >
    {page}
  </Link>
);

const PreviousPage = ({ page, url }) => {
  let newPage = page - 1;
  if (newPage < 1) return null;
  return (
    <Link
      to={{ pathname: url, search: "?p=" + newPage }}
      className="pagination-link"
    >
      {newPage}
    </Link>
  );
};

const FirstPage = ({ page, url }) => {
  if (page <= 2) return null;
  return (
    <Link to={{ pathname: url, search: "?p=" + 1 }} className="pagination-link">
      {1}
    </Link>
  );
};

const LastPage = ({ page, url, lastPage }) => {
  if (page >= lastPage - 1) return null;
  return (
    <Link
      to={{ pathname: url, search: "?p=" + lastPage }}
      className="pagination-link"
    >
      {lastPage}
    </Link>
  );
};

const NextPage = ({ page, lastPage, url }) => {
  let newPage = page + 1;
  if (page >= lastPage) return null;
  return (
    <Link
      to={{ pathname: url, search: "?p=" + newPage }}
      className="pagination-link"
    >
      {newPage}
    </Link>
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
    <Wrapper
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ScrollToTopOnMount />
      <Previous page={page - 1} url={url} />
      <Next page={page} lastPage={totalPages} url={url} />
      <List className="pagination-list">
        <FirstPage page={page} url={url} />
        <PreviousEllipse page={page} />
        <PreviousPage page={page} url={url} />
        <Current page={page} />
        <NextPage page={page} url={url} lastPage={totalPages} />
        <NextEllipse page={page} lastPage={totalPages} />
        <LastPage page={page} url={url} lastPage={totalPages} />
      </List>
    </Wrapper>
  );
}
