import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { useHistory } from "react-router-dom"
import { RENDER_DETAIL_PAGE_SAP_CHIEU, SHOW_TRAILER } from '../constants/movie';
import Loading from '../../../components/Loading';

import Slider from "react-slick";


export default function MovieSapChieu() {
    const { movies, isLoading } = useSelector(state => state.movieReducer)


    const history = useHistory()

    const dispatch = useDispatch()


    const settings = {
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        slidesToScroll: 2,
    };



    const handleClick = (trailer) => {
        dispatch({
            type: SHOW_TRAILER,
            value: true,
            trailer
        })
    }

    const handleDetail = (id) => {
        history.push(`/detail/${id}`)
        dispatch({
            type: RENDER_DETAIL_PAGE_SAP_CHIEU,
            isShowRating: true
        })
    }

    if(isLoading) {
        return <Loading />
    }



    const renderMovie = () => {
        return movies.filter(phim => phim.sapChieu && !phim.dangChieu).map((movie, index) => {
            
            // TẠO ĐỘ ĐÁNH DẤU ĐỘ TUỔI ĐƯỢC XEM PHIM (DO API KHÔNG CÓ CHỨC NĂNG NÀY)
            const ageTypes = ["P", "C13", "C16", "C18"]

            let ramdom = Math.floor(Math.random()*4)
            
            let boomTan = null;

            if(movie.hot) {
                boomTan = "./img/boom.png"
            }
            
            // const hinhAnh = "http://movie0706.cybersoft.edu" + movie.hinhAnh.slice(29)


            return (
                <div className="col-6 mb-3 movie-card" key={index}>
                    <Card>
                        <div className="poster" onClick={() => handleClick(movie.trailer)}>
                            <CardImg top width="100%" src= {movie.hinhAnh} alt={movie.tenPhim} />
                            <div className="overlay">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                        <CardBody className="card-body"  onClick = {() => handleDetail(movie.maPhim)}>
                            <CardTitle className="card-body__title" tag="h5"> <span className={ageTypes[ramdom] === "P" ? "ageType p": "ageType"}>{ageTypes[ramdom]}</span> {movie.tenPhim.toLowerCase()}</CardTitle>
                            <p className="minute mb-0 mt-3">{movie.thoiLuong} phút</p>
                        </CardBody>
                       
                    </Card>
                    <div className="boom">
                            {boomTan && <img src={boomTan} alt="boom tan phim"/>}
                    </div>
                </div>
            )
        })
    }

    return (
        <Slider {...settings} className="mt-5">
            {renderMovie()}
        </Slider>
    )
}
