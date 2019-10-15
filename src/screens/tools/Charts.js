import React, { Suspense } from "react";

const ChartView = () => {
  return (
    <div className="tabs is-toggle is-toggle-rounded">
      <ul>
        <li className="is-active">
          <a href="/charts">
            <span>Distribution</span>
          </a>
        </li>
        <li>
          <a href="/charts">
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
