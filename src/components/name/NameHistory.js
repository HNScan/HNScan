import React from "react";
import { Link } from "react-router-dom";
import { Pagination, Card, Table } from "@urkellabs/ucl";

// Util
import { hnsValues, timeAgo } from "utils/util";

//@todo th/tr do not work on Dark mode!! We need to have dark mode just set the global font color to something different.
//@todo last element is showing a bottom border.
export default function NameHistory({ history, page, changePage, pages, url }) {
  const names = history.map((name, index) => (
    <Table.Tr key={index}>
      <Table.Td>{name.action}</Table.Td>
      {/* @fixme Not working */}
      <Table.Td>{timeAgo(name.time)}</Table.Td>
      {/* @todo need to link this */}
      <Table.Td>
        <Link to={"/block/" + name.height}>{name.height}</Link>
      </Table.Td>
      <Table.Td>{hnsValues(name.value) || "--"}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Card title="History">
        {/* @todo remove all these class names. */}
        {/* @todo need links in here */}
        {/* @todo need auxilary labels -> bytes for size, scientific format for diff, etc */}
        {names.length === 0 && <p>There is no history for this name</p>}
        {names.length > 0 && (
          <Table>
            <Table.Head>
              <Table.Tr>
                <Table.Th>Action</Table.Th>
                <Table.Th>Time</Table.Th>
                <Table.Th>Block Height</Table.Th>
                <Table.Th>Value</Table.Th>
              </Table.Tr>
            </Table.Head>
            <Table.Body>{names}</Table.Body>
          </Table>
        )}
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
