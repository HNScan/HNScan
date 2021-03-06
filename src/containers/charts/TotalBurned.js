import React from "react";
import { useQuery } from "@urkellabs/ucl";
import { LineChart } from "@urkellabs/uchl";

export default function TotalBurned() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/burned", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "HNS Tokens (in millions)"]}
      chartLabel="Total HNS Burned"
      data={data}
      dataLabels={["Total HNS Burned"]}
      yFormatter={el => el / 1000000}
    />
  );
}
