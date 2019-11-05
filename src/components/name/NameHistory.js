import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "@urkellabs/ucl";

// Components
import Card from "components/styles/Card";
import DataTable from "components/styles/DataTable";

// Util
import { hnsValues, timeAgo } from "utils/util";

//@todo th/tr do not work on Dark mode!! We need to have dark mode just set the global font color to something different.
//@todo last element is showing a bottom border.
export default function NameHistory({ history, page, changePage, pages, url }) {
  const names = history.map((name, index) => (
    <DataTable.Tr key={index}>
      <DataTable.Td>{name.action}</DataTable.Td>
      {/* @fixme Not working */}
      <DataTable.Td>{timeAgo(name.time)}</DataTable.Td>
      {/* @todo need to link this */}
      <DataTable.Td>
        <Link to={"/block/" + name.height}>{name.height}</Link>
      </DataTable.Td>
      <DataTable.Td>{hnsValues(name.value) || "--"}</DataTable.Td>
    </DataTable.Tr>
  ));
  return (
    <>
      <Card>
        <Card.Header>
          <Card.HeaderTitle>History</Card.HeaderTitle>
        </Card.Header>
        {/* @todo remove all these class names. */}
        {/* @todo need links in here */}
        {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
        <Card.Content>
          {names.length === 0 && <p>There is no history for this name</p>}
          {names.length > 0 && (
            <DataTable className="table is-fullwidth">
              <DataTable.Head>
                <DataTable.Tr>
                  <DataTable.Th>Action</DataTable.Th>
                  <DataTable.Th>Time</DataTable.Th>
                  <DataTable.Th>Block Height</DataTable.Th>
                  <DataTable.Th>Value</DataTable.Th>
                </DataTable.Tr>
              </DataTable.Head>
              <DataTable.Body>{names}</DataTable.Body>
            </DataTable>
          )}
        </Card.Content>
      </Card>
      <Pagination
        totalPages={pages}
        page={page}
        url={url}
        changePage={changePage}
      />
    </>
  );
}
