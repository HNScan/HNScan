import React from "react";
import { useQuery, LineChart } from "@urkellabs/ucl";

export default function TotalSupply() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/supply", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "HNS Tokens (in millions)"]}
      chartLabel="Total HNS Supply"
      data={data}
      dataLabels={["Total HNS Supply"]}
      yFormatter={el => el / 1000000}
    />
  );
}
