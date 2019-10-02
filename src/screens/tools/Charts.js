import React, { Suspense } from "react";

const ChartView = () => {
  return (
    <div class="tabs is-toggle is-toggle-rounded">
      <ul>
        <li class="is-active">
          <a>
            <span>Distribution</span>
          </a>
        </li>
        <li>
          <a>
            <span>Hash Rate</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default function Charts() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ChartView />
      </Suspense>
    </>
  );
}