import React from "react";
import { useQuery } from "@urkellabs/ucl";
import { LineChart } from "@urkellabs/uchl";

export default function DailyOpens() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/dailyOpens", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "Auction Starts"]}
      chartLabel="Daily Auction Starts"
      data={data}
      dataLabels={["Daily Auction Starts"]}
    />
  );
}
