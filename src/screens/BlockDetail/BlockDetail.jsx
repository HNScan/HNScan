import React, { Suspense } from "react";
import Block from "./Block.jsx";

export default function BlockDetail({ match }) {
  return (
    <>
        <Suspense
          fallback={
            <div>
              <p>Hi</p>
            </div>
          }
        >
          <Block height={match.params.height} />
        </Suspense>
    </>
  );
}
