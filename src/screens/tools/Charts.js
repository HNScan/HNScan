import React, { Suspense, useEffect } from "react";
import { LineChart, useQuery, Card } from "@urkellabs/ucl";
import styled from "styled-components";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const FullHeightCard = styled(Card)`
  height: 50vh;
`;

const ChartView = () => {
  //start = 30 days ago
  //end = right now.
  const { data } = useQuery("/charts/difficulty", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });
  console.log(data);
  useEffect(() => {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.data = data;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.baseInterval = {
    //   timeUnit: "second",
    //   count: 1
    // };
    dateAxis.tooltipDateFormat = "MMM d";
    // dateAxis.groupData = true;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "Average Block Difficulty";

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "visits";
    series.tooltipText = "Difficulty: [bold]{valueY}[/]";
    series.fillOpacity = 0.3;
    series.groupFields.valueY = "average";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series);

    // dateAxis.start = 0.8;
    dateAxis.keepSelection = true;

    // Create axes
    // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.minGridDistance = 50;
    // dateAxis.renderer.grid.template.stroke = am4core.color("#afafaf");
    // dateAxis.renderer.grid.template.strokeOpacity = 0;
    // dateAxis.renderer.labels.template.fill = am4core.color("#afafaf");
    // dateAxis.renderer.labels.template.strokeWidth = 1;
    // dateAxis.renderer.labels.template.fontSize = 14;

    // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.grid.template.stroke = am4core.color("#afafaf");
    // valueAxis.renderer.grid.template.strokeOpacity = 0;
    // valueAxis.renderer.labels.template.fill = am4core.color("#afafaf");
    // valueAxis.renderer.labels.template.strokeWidth = 1;
    // valueAxis.renderer.labels.template.fontSize = 14;

    // Create chart series
    // let series = chart.series.push(new am4charts.LineSeries());
    // series.dataFields.valueY = "visits";
    // series.dataFields.dateX = "date";
    // series.strokeWidth = 2;
    // series.stroke = am4core.color("#693AFA");
    // series.strokeOpacity = 0.7;
    // series.minBulletDistance = 10;
    // series.bullets.push(new am4charts.CircleBullet());
    // series.tooltipText = "{dateX}: [bold]{valueY}[/]";

    // Configure cursor and cursor lines
    // chart.cursor = new am4charts.XYCursor();
    // chart.cursor.lineX.stroke = am4core.color("#8f8f8f");
    // chart.cursor.lineX.strokeWidth = 1;
    // chart.cursor.lineX.strokeOpacity = 1;
    // chart.cursor.lineY.stroke = am4core.color("#8f8f8f");
    // chart.cursor.lineY.strokeWidth = 1;
    // chart.cursor.lineY.strokeOpacity = 1;

    // Responsiveness
    // chart.responsive.enabled = true;
    // chart.cursor.snapToSeries = series;

    return function cleanup() {
      if (chart) {
        chart.dispose();
      }
    };
  }, [data]);

  return (
    <FullHeightCard>
      <div id="chartdiv" style={{ height: "40vh" }} />
    </FullHeightCard>
  );
};

export default function Charts() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ChartView />
      </Suspense>
    </>
  );
}
//    <div className="tabs is-toggle is-toggle-rounded">
//      <ul>
//        <li className="is-active">
//          <a href="/charts">
//            <span>Distribution</span>
//          </a>
//        </li>
//        <li>
//          <a href="/charts">
//            <span>Hash Rate</span>
//          </a>
//        </li>
//      </ul>
//    </div>
