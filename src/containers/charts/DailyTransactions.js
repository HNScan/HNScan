import React from "react";
import { useQuery, Card, LineChart } from "@urkellabs/ucl";

export default function DailyTransactions() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/dailyTransactions", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <Card fullHeight title="Daily Transactions">
      <LineChart
        data={data}
        title="# TXs per Day"
        tooltip="Transactions: [bold]{valueY}[\]"
      />
    </Card>
  );
}
