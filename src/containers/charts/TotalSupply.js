import React from "react";
import { useQuery, Card, LineChart } from "@urkellabs/ucl";

export default function TotalSupply() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/supply", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <Card fullHeight title="Total HNS Supply">
      <LineChart data={data} axesLabels={["Date", "Total HNS"]} isArea />
    </Card>
  );
}
