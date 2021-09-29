import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useDispatch, useSelector } from 'react-redux';
import { getMovieList } from '../../homePage/actions/movie';

export default function ChartPhim() {
    const dispatch = useDispatch()

    const {movies} =  useSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(getMovieList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        const soLuongPhimDangChieu = movies.filter(movie => movie.dangChieu).length + movies.filter(movie => !movie.dangChieu && !movie.sapChieu).length
        const soLuongPhimSapChieu = movies.filter(movie => movie.sapChieu && !movie.dangChieu).length
        // Set theme
        am4core.useTheme(am4themes_animated);
        var chart = am4core.create("chartPhim", am4charts.PieChart);

        // Add data
        chart.data = [{
            "phim": "Đang chiếu",
            "tong": soLuongPhimDangChieu
        }, {
            "phim": "Sắp Chiếu",
            "tong": soLuongPhimSapChieu
        }];

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "tong";
        pieSeries.dataFields.category = "phim";

        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
    },[movies])

    return (
        <div className="chartPhim-container">
            <div className="d-flex justify-content-between px-3 pt-2">
                <h6>Phim ảnh</h6>
                <h6 className="text-white">{movies && `${movies.filter(movie => movie.dangChieu).length + movies.filter(movie => movie.sapChieu && !movie.dangChieu).length + movies.filter(movie => !movie.dangChieu && !movie.sapChieu).length}`}</h6>
            </div>
            <div id="chartPhim"></div>
        </div>
    )
}
