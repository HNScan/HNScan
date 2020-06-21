import React from "react";
import { useQuery } from "@urkellabs/ucl";
import { LineChart } from "@urkellabs/uchl";

export default function TotalLocked() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/locked", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "HNS Tokens (in millions)"]}
      chartLabel="Total HNS Locked"
      data={data}
      dataLabels={["Total HNS Locked"]}
      yFormatter={el => el / 1000000}
    />
  );
}
