import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { getMovieList } from '../actions/movie';
import { useHistory } from "react-router-dom"
import { RENDER_DETAIL_PAGE_SAP_CHIEU, SHOW_TRAILER } from '../constants/movie';
import Loading from '../../../components/Loading';

import Slider from "react-slick";
import Trailer from '../../../components/Trailer';


export default function MovieResponsive() {
    const { movies, isLoading } = useSelector(state => state.movieReducer)


    const history = useHistory()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



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

    if (isLoading) {
        return <Loading />
    }



    const renderMovie = () => {
        return movies.filter(phim => phim.dangChieu).map((movie, index) => {

            // XỬ LÝ ICON RATING
            let numberRating = Number(movie.danhGia) > 10 ? 10 : Number(movie.danhGia)
            let rating = []

            for (let i = 1; i <= numberRating; ++i) {
                if (i % 2 === 0) {
                    rating.push(<img src="./img/star1.png" alt="star1" key={Math.random()}/>)
                }
            }

            if (numberRating % 2  !== 0) {
                rating.push(<img src="./img/star1.2.png" alt="star1/2" key={Math.random()}/>)
            }

            let boomTan = null;

            if(movie.hot) {
                boomTan = "./img/boom.png"
            }

            
            // TẠO ĐỘ ĐÁNH DẤU ĐỘ TUỔI ĐƯỢC XEM PHIM (DO API KHÔNG CÓ CHỨC NĂNG NÀY)
            const ageTypes = ["P", "C13", "C16", "C18"]

            let ramdom = Math.floor(Math.random()*4)
            
            // const hinhAnh = "http://movie0706.cybersoft.edu" + movie.hinhAnh.slice(29)

            return (
                <div className="col-sm-12 mb-5 movie-card" key={index}>
                    <Card>
                        <div className="poster" onClick={() => handleClick(movie.trailer)}>
                            <CardImg top width="100%" height="100px" src={movie.hinhAnh} alt={movie.tenPhim}/>
                            <div className="overlay">
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                        <CardBody className="card-body" onClick = {() => handleDetail(movie.maPhim)}>
                            <CardTitle className="card-body__title" tag="h5"> <span className={ageTypes[ramdom] === "P" ? "ageType p": "ageType"}>{ageTypes[ramdom]}</span> {movie.tenPhim.toLowerCase()}</CardTitle>
                            <p className="minute mb-0 mt-3">{movie.thoiLuong} phút</p>
                        </CardBody>
                        <div className="mb-2 rating">
                            <p className="rating__text">{numberRating}</p>
                            <div className="rating__icon">
                                {rating.map(item => { return item })}
                            </div>
                       </div>
                    </Card>
                    <div className="boom">
                            {boomTan && <img src={boomTan} alt="boom tan phim"/>}
                    </div>
                </div>
            )
        })
    }

    return (
       <div>
            {renderMovie()}
       </div>
    )
}
