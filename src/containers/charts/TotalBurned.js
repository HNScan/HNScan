import React from "react";
import { useQuery, Card, LineChart } from "@urkellabs/ucl";

export default function TotalBurned() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/burned", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <Card fullHeight title="Total HNS Burned">
      <LineChart data={data} axesLabels={["Date", "Burned HNS"]} />
    </Card>
  );
}
