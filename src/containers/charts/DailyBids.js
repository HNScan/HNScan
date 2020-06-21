import React from "react";
import { useQuery } from "@urkellabs/ucl";
import { LineChart } from "@urkellabs/uchl";

export default function DailyBids() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/dailyBids", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "Bids"]}
      chartLabel="Daily Bids"
      data={data}
      dataLabels={["Daily Bids"]}
    />
  );
}
