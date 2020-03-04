import React from "react";
import { useQuery, LineChart } from "@urkellabs/ucl";

import { sciNotation } from "utils/util";

export default function TotalTransactions() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/dailyTotalTransactions", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "Transactions (in thousands)"]}
      chartLabel="Total Transactions"
      data={data}
      dataLabels={["Total Transactions"]}
      yFormatter={el => el / 1000}
      // @note add me if transactions start getting out of hand
      // yTooltipFormatter={el =>
      //   `${sciNotation(el, 4)[0]} x 10^${sciNotation(el, 4)[1]}`
      // }
    />
  );
}
