import React, { useEffect } from "react";
import { useQuery, Card, Header } from "@urkellabs/ucl";
import styled from "styled-components";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const FullHeightCard = styled(Card)`
  height: 50vh;
`;

export default function DailyDifficulty() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/difficulty", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.data = data;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.tooltipDateFormat = "MMM d";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "Average Block Difficulty";

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "Difficulty: [bold]{valueY}[/]";
    series.fillOpacity = 0.3;
    series.groupFields.valueY = "average";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;

    dateAxis.keepSelection = true;
    return function cleanup() {
      if (chart) {
        chart.dispose();
      }
    };
  }, [data]);

  return (
    <>
      <Header>Daily Average Difficulty</Header>
      <FullHeightCard>
        <div id="chartdiv" style={{ height: "40vh" }} />
      </FullHeightCard>
    </>
  );
}
