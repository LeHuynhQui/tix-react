import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../actions/admin';


export default function ChartNguoiDung() {
    const dispatch = useDispatch()

    const { users } = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getUser())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        const soLuongUserKhachHang= users.filter(user => user.maLoaiNguoiDung === "KhachHang").length
        const soLuongUserQuanTri = users.filter(user => user.maLoaiNguoiDung === "QuanTri").length
        // Set theme
        am4core.useTheme(am4themes_animated);

        // Create chart instance
        var chart = am4core.create("chartMovie", am4charts.PieChart);

        // Add data
        chart.data = [{
            "phim": "Khách hàng",
            "tong": soLuongUserKhachHang
        }, {
            "phim": "Quản trị",
            "tong": soLuongUserQuanTri
        }];

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "tong";
        pieSeries.dataFields.category = "phim";


        // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.innerRadius = am4core.percent(40);

        // Put a thick white border around each Slice
        // pieSeries.slices.template.stroke = am4core.color("#4a2abb");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;

        pieSeries.colors.list = [
            am4core.color("#2d8515"),
            am4core.color("#d92934")
        ];





    }, [users])





    return (
        <div className="chartMovie-container">
            <div className="d-flex justify-content-between px-3 pt-2">
                <h6>Người dùng</h6>
                <h6 className="text-white">{users && `${users.filter(user => user.maLoaiNguoiDung === "KhachHang").length + users.filter(user => user.maLoaiNguoiDung === "QuanTri").length}`}</h6>
            </div>
            <div id="chartMovie"></div>
        </div>
    )
}
