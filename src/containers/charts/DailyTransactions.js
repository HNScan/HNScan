import React from "react";
import { useQuery } from "@urkellabs/ucl";
import { LineChart } from "@urkellabs/uchl";

export default function DailyTransactions() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/dailyTransactions", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "Transactions"]}
      chartLabel="Daily Transactions"
      data={data}
      dataLabels={["Daily Transactions"]}
    />
  );
}
