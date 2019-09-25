import React from "react";
import { useResource, useResultCache } from "rest-hooks";
import BlocksView from "./BlocksView";
import BlockResource from "../../resources/BlockResource";

export default function BlocksContainer(props) {
  const pageOffset = (props.page - 1) * 25;
  const blocks = useResource(BlockResource.listShape(), { offset: pageOffset });
  const { limit, total } = useResultCache(BlockResource.listShape(), {
    offset: pageOffset
  });
  const pages = Math.ceil(total / limit);
  return (
    <BlocksView
      blocks={blocks}
      totalPages={pages}
      page={props.page}
      url="/blocks"
      pageChanger={props.changePage}
    />
  );
}
