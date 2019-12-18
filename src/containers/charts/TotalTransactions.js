import React from "react";
import { useQuery, Card, LineChart } from "@urkellabs/ucl";

export default function TotalTransactions() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/dailyTotalTransactions", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <Card fullHeight title="Total Transactions">
      <LineChart
        data={data}
        title="# of Transactions"
        tooltip="Total TXs: [bold]{valueY}[\]"
        fill
      />
    </Card>
  );
}
