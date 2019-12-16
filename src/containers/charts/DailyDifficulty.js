import React from "react";
import { useQuery, Card, TimeSeries } from "@urkellabs/ucl";

export default function DailyDifficulty() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/difficulty", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <Card fullHeight title="Daily Average Difficulty">
      <TimeSeries data={data} />
    </Card>
  );
}
