import React from "react";
import { useQuery, LineChart } from "@urkellabs/ucl";

export default function NameClaim() {
  //@todo get correct request up in here
  const { data } = useQuery("/charts/dailyTransactions", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "Total Names Claimed"]}
      chartLabel="Names Claimed"
      data={data}
      dataLabels={["Total Names Claimed"]}
      yFormatter={el => el.toLocaleString()}
      yTooltipFormatter={el => el.toLocaleString()}
    />
  );
}
