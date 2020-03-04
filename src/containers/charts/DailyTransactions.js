import React from "react";
import { useQuery, Card, LineChart } from "@urkellabs/ucl";

import { sciNotation } from "utils/util";

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
      // @note add me once daily transactions start getting out of hand
      // yTooltipFormatter={el =>
      //   `${sciNotation(el, 4)[0]} x 10^${sciNotation(el, 4)[1]}`
      // }
    />
  );
}
