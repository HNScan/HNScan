import React from "react";
import { useQuery, LineChart } from "@urkellabs/ucl";

export default function DailyClaims() {
  // @todo we make the CORRECT request here!
  const { data } = useQuery("/charts/burned", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "Claims"]}
      chartLabel="Daily Airdrop Claims"
      data={data}
      dataLabels={["Daily Airdrop Claims"]}
      yTooltipFormatter={el => el.toLocaleString()}
      yFormatter={el => el.toLocaleString()}
    />
  );
}
