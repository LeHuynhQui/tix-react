import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default function DoanhThuMap() {

    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        // Create chart instance
        var chart = am4core.create("chartDoanhThu", am4charts.XYChart);

        // Add data
        chart.data = [{
            "date": new Date(2021, 9, 1),
            "value": 450,
            "value2": 162,
            "value3": 1100
        }, {
            "date": new Date(2021, 9, 2),
            "value": 669,
            "value3": 841
        }, {
            "date": new Date(2021, 9, 3),
            "value": 1200,
            "value3": 199
        }, {
            "date": new Date(2021, 9, 4),
            "value2": 867
        }, {
            "date": new Date(2021, 9, 5),
            "value2": 185,
            "value3": 669
        }, {
            "date": new Date(2021, 9, 6),
            "value": 150
        }, {
            "date": new Date(2021, 9, 7),
            "value": 1220,
            "value2": 350,
            "value3": 600
        }];

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.strokeOpacity = 0;
        dateAxis.renderer.labels.template.fill = am4core.color("#f4f4f599");

        // dateAxis.renderer.grid.template.location = 0;
        // dateAxis.renderer.minGridDistance = 30;
        // dateAxis.stroke = am4core.color("#f4f4f599");
        // dateAxis.title.fill= "red"

        // dateAxis.renderer.line.strokeOpacity = 1;
        // dateAxis.renderer.line.strokeWidth = 2;
        // dateAxis.renderer.line.stroke = am4core.color("red");


        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        valueAxis.stroke = am4core.color("#f4f4f599");
        // valueAxis.title.text = "Turnover ($M)";
        // valueAxis.title.fontWeight = "bold";
        // valueAxis.title.fill = "red";

        valueAxis.renderer.grid.template.strokeOpacity = 1;
        valueAxis.renderer.grid.template.stroke = am4core.color("#040620");
        valueAxis.renderer.grid.template.strokeWidth = 1;



        valueAxis.renderer.labels.template.fill = am4core.color("#f4f4f599");
        // valueAxis.renderer.labels.template.fontSize = 20;   

        // valueAxis.renderer.ticks.template.disabled = false;
        // valueAxis.renderer.ticks.template.strokeOpacity = 1;
        // valueAxis.renderer.ticks.template.stroke = am4core.color("#f4f4f599");
        // valueAxis.renderer.ticks.template.strokeWidth = 2;
        // valueAxis.renderer.ticks.template.length = 10;




        const color = {
            value: "red",
            value2: "green",
            value3: "blue"
        }

        // Create series
        function createSeries(field, name) {
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.dateX = "date";
            series.name = name;
            series.tooltipText = "{dateX}: [b]{valueY}[/]";
            series.strokeWidth = 2;
            series.stroke = am4core.color(color[field]);


            series.smoothing = "monotoneX";

            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.stroke = am4core.color("#f4f4f599");
            bullet.circle.strokeWidth = 2;


            // series.dataFields.id;
            // // series.ticks.template.disabled = true;

            // series.colors.list = [
            //     am4core.color("#2d8515"),
            //     am4core.color("#d92934")
            // ];


            return series;
        }

        createSeries("value", "Doanh thu");
        createSeries("value2", "Chi phí");
        createSeries("value3", "Lợi nhuận");




        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.stroke = am4core.color("#f4f4f599");
        chart.cursor.lineY.stroke = am4core.color("#f4f4f599");

        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.fill = am4core.color("#f4f4f599");
        // chart.legend.useDefaultMarker = true;
        // var marker = chart.legend.markers.template.children.getIndex(0);
        // marker.cornerRadius(12, 12, 12, 12);
        // marker.strokeWidth = 2;
        // marker.strokeOpacity = 1;
        // marker.stroke = am4core.color("#ccc");
    },[])

    return (
        <div className="doanhThuMap">
            <h6>Doanh thu, chi phí, lợi nhuận</h6>
            <small><i>Đơn vị: triệu đồng</i></small>

            <div id="chartDoanhThu"></div>
        </div>
    )
}
