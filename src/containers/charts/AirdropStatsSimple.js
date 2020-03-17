import React from "react";
import { DoughnutChart } from "@urkellabs/ucl";

export default function AirdropStatsSimple() {
  // @todo make request here!

  return (
    <DoughnutChart
      chartLabel="Airdrop Claims"
      hideLegend
      data={[
        { label: "Not Claimed", value: 300 },
        // Kill these two if you decide to make a detailed graph
        { label: "Not Claimed", value: 0 },
        { label: "Not Claimed", value: 0 },
        { label: "Claimed", value: 25 }
      ]}
    />
  );
}
