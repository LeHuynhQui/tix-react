import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Loading from '../../../components/Loading';
import { SHOW_TRAILER } from '../../homePage/constants/movie';

export default function HinhAnh() {
    const dispatch = useDispatch()

    const { feedBack } = useSelector(state => state.xemThemFeedBackReducer)
    if (!feedBack) {
        window.scrollTo(0, 0);
    }



    const { movie, isLoading } = useSelector(state => state.movieDetailReducer)


    // TẠO ĐỘ ĐÁNH DẤU ĐỘ TUỔI ĐƯỢC XEM PHIM (DO API KHÔNG CÓ CHỨC NĂNG NÀY)
    const ageTypes = ["P", "C13", "C16", "C18"]
    const types = ["129 phút - 0 IMDb - 2D/Digital", "100 phút - 0 IMDb - 2D/Digital", "92 phút - 7.4 IMDb - 2D/Digitals", "100 phút - 3.9 IMDb - 2D/Digitals"]
    let ramdom = Math.floor(Math.random() * 4)

    if (isLoading) {
        return <Loading />
    }

    const showTrailer = (trailer) => {
        dispatch({
            type: SHOW_TRAILER,
            value: true,
            trailer
        })
    }

    const renderHinhAnh = () => {
        let ddMMyyyy = "";

        if (movie.ngayKhoiChieu) {
            let yyyyMMdd = movie.ngayKhoiChieu.slice(0, 10).replaceAll("-", ".");
            ddMMyyyy += yyyyMMdd.slice(-2)
            ddMMyyyy += `.${yyyyMMdd.slice(5, 7)}`
            ddMMyyyy += `.${yyyyMMdd.slice(0, 4)}`

        }

        // const hinhAnh = "http://movie0706.cybersoft.edu" + movie.hinhAnh.slice(29)

        return (
            <Fragment>
                <div className="col-5 p-0 hinhAnh-wrapper"  onClick={() => showTrailer(movie.trailer)}>
                    <img style={{ width: "88%", height: "320px", objectFit: "cover", borderRadius: "4px" }} src={movie.hinhAnh} alt={movie.tenPhim} />
                    <i className="fas fa-play"></i>
                </div>
                <div className="col-7 p-0">
                    <div>
                        <p className="m-0 mb-1">{movie.ngayKhoiChieu ? ddMMyyyy : null}</p>
                        <h1> <span className={ageTypes[ramdom] === "P" ? "ageType2 p" : "ageType2"}>{ageTypes[ramdom]}</span> {movie.tenPhim ? movie.tenPhim.toLowerCase() : null} </h1>
                        <p className="m-0">{types[ramdom]}</p>
                    </div>
                </div>
            </Fragment>
        )
    }

    const renderChart = () => {
        const percentage = Number(movie.danhGia) > 10 ? 10 * 10 : Number(movie.danhGia) * 10;
        // const percentage = 80;

        return (<CircularProgressbar value={percentage} text={`${movie.danhGia  > 10 ? 10 : movie.danhGia}`} />)
    }


    const renderDanhGia = () => {
        if (movie.dangChieu) {
            // XỬ LÝ ICON RATING
            let numberRating = Number(movie.danhGia) > 10 ? 10 : Number(movie.danhGia)
            let rating = []

            for (let i = 1; i <= numberRating; ++i) {
                if (i % 2 === 0) {
                    rating.push(<img src="https://tix.vn/app/assets/img/icons/star1.png" alt="star1" key={Math.random()} />)
                }
            }

            if (numberRating % 2 !== 0) {
                rating.push(<img src="https://tix.vn/app/assets/img/icons/star1.2.png" alt="star1/2" key={Math.random()} />)
            }

            return rating.map(item => {
                return item
            })
        }

        return null

    }

    const renderRating = () => {
        return (
            <div className="col-3 h-100 row align-items-center justify-content-center flex-column">
                <div className="bg_chart">
                    {movie.dangChieu && renderChart()}
                </div>
                <div className="my-2">{movie && renderDanhGia()}</div>

                {movie.dangChieu && <p>{Math.floor(Math.random() * 1000)} người đánh giá</p>}
            </div>
        )
    }

    return (
        <section className="hinhAnh">
            <div className="container hinhAnh__content h-100">
                <div className="row h-100 justify-content-between">
                    <div className= "col-8 h-100 row align-items-center">
                        {movie && renderHinhAnh()}
                    </div>

                    {movie.dangChieu && renderRating()}
                </div>
            </div>
        </section>
    )
}
