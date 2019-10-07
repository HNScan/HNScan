import React from "react";
import { Link } from "react-router-dom";

// Components
import * as Cards from "./Cards/Cards";
import Pagination from "./Pagination";

// Util
import { hnsValues, timeAgo } from "../util/util";

//@todo th/tr do not work on Dark mode!! We need to have dark mode just set the global font color to something different.
//@todo last element is showing a bottom border.
export default function NameHistory({ history, page, changePage, pages, url }) {
  const names = history.map((name, index) => (
    <tr key={index}>
      <td>{name.action}</td>
      {/* @fixme Not working */}
      <td>{timeAgo(name.time)}</td>
      {/* @todo need to link this */}
      <td>
        <Link to={"/block/" + name.height}>{name.height}</Link>
      </td>
      <td>{hnsValues(name.value)}</td>
    </tr>
  ));
  return (
    <>
      <Cards.Card>
        <Cards.Header>
          <Cards.HeaderTitle>History</Cards.HeaderTitle>
        </Cards.Header>
        {/* @todo remove all these class names. */}
        {/* @todo need links in here */}
        {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
        <div className="card-content">
          {names.length === 0 && <p>There is no history for this name</p>}
          {names.length > 0 && (
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Time</th>
                  <th>Block Height</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>{names}</tbody>
            </table>
          )}
        </div>
      </Cards.Card>
      <Pagination
        totalPages={pages}
        page={page}
        url={url}
        changePage={changePage}
      />
    </>
  );
}
