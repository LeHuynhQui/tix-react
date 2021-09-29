import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import LegendMap from './LegendMap';


export default function Map() {
    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#474d84");
        polygonTemplate.stroke = am4core.color("#5e6bb3");

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#535781");

        // Remove Antarctica
        polygonSeries.exclude = ["AQ"];

        // Add some data
        polygonSeries.data = [{
            "id": "US",
            "name": "United States",
            "value": 100,
            "fill": am4core.color("#2d8515")
        }, {
            "id": "GB",
            "name": "United Kingdom",
            "value": 50,
            "fill": am4core.color("#da2934")
        },
        {
            "id": "VN",
            "name": "Viet Nam",
            "value": 50,
            "fill": am4core.color("#2376fe")
        }];

        // Bind "fill" property to "fill" key in data
        polygonTemplate.propertyFields.fill = "fill";

        // Add line series
        var lineSeries = chart.series.push(new am4maps.MapLineSeries());
        lineSeries.mapLines.template.line.stroke = am4core.color("#5C5CFF");
        lineSeries.mapLines.template.line.strokeOpacity = 0.5;
        lineSeries.mapLines.template.line.strokeWidth = 4;
        lineSeries.mapLines.template.line.strokeDasharray = "3,3";

        // lineSeries.data = [{
        //     "multiGeoLine": [
        //         [
        //             { "latitude": 48.856614, "longitude": 2.352222 },
        //             { "latitude": 40.712775, "longitude": -74.005973 },
        //             { "latitude": 49.282729, "longitude": -123.120738 }
        //         ]
        //     ]
        // }];

        // Create image series
        var imageSeries = chart.series.push(new am4maps.MapImageSeries());

        // Create a circle image in image series template so it gets replicated to all new images
        var imageSeriesTemplate = imageSeries.mapImages.template;
        var circle = imageSeriesTemplate.createChild(am4core.Circle);
        circle.radius = 4;
        circle.fill = am4core.color("#c7d0ff");
        circle.stroke = am4core.color("#c7d0ff");
        circle.strokeWidth = 2;
        circle.nonScaling = true;
        circle.tooltipText = "{title}";

        // Set property fields
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";

        // Add data for the three cities
        imageSeries.data = [{
            "latitude": 51.509865,
            "longitude": -0.118092,
            "title": "London"
        }, {
            "latitude": 40.712775,
            "longitude": -74.005973,
            "title": "New York"
        }, {
            "latitude": 21.028511,
            "longitude": 105.804817,
            "title": "Ha Noi"
        }];
    }, [])
    return (
        <div className="d-flex justify-content-between align-items-center map-res">
            <div id="chartdiv"></div>
            <LegendMap />
        </div>
    )
}
