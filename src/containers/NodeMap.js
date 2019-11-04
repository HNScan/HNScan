import React, { useEffect } from "react";
import { useResource } from "rest-hooks";
import styled from "styled-components";
import { Card } from "@urkellabs/ucl";

// AMChart imports
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4core from "@amcharts/amcharts4/core";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

// API Resources
import MapResource from "../resources/MapResource";

const Map = styled.div`
  width: 100%;
  height: 500px;
`;

export default function PeersMap() {
  const { data } = useResource(MapResource.detailShape(), {});

  useEffect(() => {
    let targetSVG =
      "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    // Create map instance
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();

    // Add zoom control
    map.zoomControl = new am4maps.ZoomControl();

    // Disable scroll hijack
    map.chartContainer.wheelable = false;

    // Create map polygon series
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ["AQ"];

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.strokeOpacity = 0.5;
    polygonTemplate.nonScalingStroke = true;

    // Create data point markers
    let imageSeries = map.series.push(new am4maps.MapImageSeries());

    // Define template
    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Sprite);
    circle.scale = 0.4;
    circle.fill = am4core.color("#532ad1");
    circle.path = targetSVG;

    // Set propertyfields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    imageSeriesTemplate.horizontalCenter = "middle";
    imageSeriesTemplate.verticalCenter = "middle";
    imageSeriesTemplate.align = "center";
    imageSeriesTemplate.valign = "middle";
    imageSeriesTemplate.width = 8;
    imageSeriesTemplate.height = 8;
    imageSeriesTemplate.nonScaling = true;
    imageSeriesTemplate.tooltipText = "{title}";
    imageSeriesTemplate.setStateOnChildren = true;
    imageSeriesTemplate.states.create("hover");
    imageSeries.data = data;

    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, [data]);

  return (
    <Card>
      <Map id="chartdiv" />
    </Card>
  );
}
