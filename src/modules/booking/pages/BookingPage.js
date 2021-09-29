import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom"
import { getMovieDetail } from '../../detailPage/actions/movieDetail';
import Loading from "./../../../components/Loading"
export default function BookingPage() {
    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch();

    let [seatNumber, setSeatNumber] = useState([]);
    const { movie, isLoading } = useSelector(state => state.movieDetailReducer);

    let xuatVe = {
        tenPhim: "",
        diaChi:"",
        giaVe: "",
        ngayXem: "",
        gioXem: "",
        rap: "",
        soGhe:"",
        hinhAnh:""
    };


    useEffect(() => {
        dispatch(getMovieDetail(id))
    }, [])

    if (isLoading) {
        return <Loading hasHeader = {false}/>
    }

    const handleSelectSeat = (seat, letter, number) => {
        if (seat !== "daChon") {
            let index = seatNumber.findIndex(seat => seat.trim() === `${letter}${number}`)

            if (index === -1) {
                setSeatNumber([...seatNumber, `${letter}${number} `])
                
            }

            if (index !== -1) {
                setSeatNumber(seatNumber = seatNumber.filter(seat => seat.trim() !== `${letter}${number}`))

            }

        }
    }




    const renderSeat = () => {

        const mangGheDaDat = JSON.parse(sessionStorage.getItem("gheDaDat"))

        let seats = []
        const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]


        for (let i = 1; i <= 10; i++) {
           




            for (let j = 1; j <= 12; j++) {
                let seat = "trong"
                if (letter[i - 1] === "F" || letter[i - 1] === "G") {
                    seat = "vip"
                }

                if (j === 1) {
                    seats.push(<div key={Math.random()}><span className="letter">{letter[i - 1]}</span></div>)
                }

                // mangGheDaDat.map(gheDaDat => {
                //     if (gheDaDat.slice(0,1) === letter[i - 1]) {
                //         if (gheDaDat.slice(1) === j) {
                //             seat = "daChon"   
                //         }
                //     }

                // })
                if (seatNumber.length!==0 && seatNumber.find(ghe => ghe.trim() === `${letter[i - 1]}${j}`)) {
                    seat = "dangChon"
                } 

                if (mangGheDaDat.find(ghe => ghe === `${letter[i - 1]}${j}`)) {
                    seat = "daChon"
                } 


                seats.push(<div key={Math.random()}><span className={`${seat} square`} onClick={() => handleSelectSeat(seat, letter[i - 1], j )}></span></div>)
            }
        }


        return seats.map(item => (item))
    }


    const handleCheckOut = () => {
        if(seatNumber.length) {
            sessionStorage.setItem("xuatVe", JSON.stringify(xuatVe))

            history.push(`/booking/${id}/checkout`)
        }
    }

    const renderOrderBox = () => {
        const thongTinVe = JSON.parse(sessionStorage.getItem("thongTinVe"))
        let tenCumRap = ""
        let tenRap = ""
        let ngayGioChieu = ""
        let giaVe = 0
        // console.log(movie)
        movie.heThongRapChieu.map(heThong => {
            if (heThong.maHeThongRap === thongTinVe.maHeThongRap) {
                heThong.cumRapChieu.map(cumRap => {
                    if (cumRap.maCumRap === thongTinVe.maCumRap) {
                        tenCumRap = cumRap.tenCumRap
                        cumRap.lichChieuPhim.map(lich => {
                            if (lich.maLichChieu === thongTinVe.maLichChieu) {
                                tenRap = lich.tenRap
                                ngayGioChieu = `${lich.ngayChieuGioChieu.slice(8, 10)}/${lich.ngayChieuGioChieu.slice(5, 7)}/${lich.ngayChieuGioChieu.slice(0, 4)} - ${lich.ngayChieuGioChieu.slice(11, 16)}`
                                giaVe = lich.giaVe

                                // set thong tin chuan bi xuat ve
                                xuatVe = {
                                    ...xuatVe,
                                    tenPhim: movie.tenPhim,
                                    diaChi: tenCumRap,
                                    ngayXem: `${lich.ngayChieuGioChieu.slice(8, 10)}/${lich.ngayChieuGioChieu.slice(5, 7)}/${lich.ngayChieuGioChieu.slice(0, 4)}`,
                                    gioXem: `${lich.ngayChieuGioChieu.slice(11, 16)}`,
                                    rap: tenRap,
                                    giaVe: seatNumber.length * giaVe,
                                    soGhe: seatNumber,
                                    hinhAnh: movie.hinhAnh
                                }
                            }
                        })
                    }
                })
            }
        })


        return (
            <div className="container-fluid booking">
                <div className="left">
                    <div>
                        <p className="type">Rạp: {tenCumRap} - <b style={{ color: "#fb4126" }}>{tenRap}</b> - 2D/Digital  </p>
                        <p className="date">Suất chiếu: {ngayGioChieu}</p>
                        {/* <p className="seat">Số ghế: {seatNumber.sort().map(seat => (seat))}</p> */}
                        <p className="seat">Số ghế: {seatNumber.map(seat => (seat))}</p>
                    </div>
                    <div className="seatMap">
                        {renderSeat()}
                    </div>
                    <div className="legend d-flex">
                        <div className="d-flex align-items-center">
                            <p className="square trong"></p>
                            <p>Trống</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="square vip"></p>
                            <p>VIP</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="square daChon"></p>
                            <p>Đã chọn</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="square dangChon"></p>
                            <p>Đang chọn</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className="total m-0"><span>TATAL: </span> {(seatNumber.length * giaVe).toLocaleString()}</p>
                        <p className={seatNumber.length ? "checkOut m-0" : "checkOut disabled m-0"} onClick={handleCheckOut}>CHECK OUT</p>
                    </div>
                </div>
                <div className="right">
                    <div className="img"><img src={movie.hinhAnh} alt={movie.tenPhim} /></div>
                    <div className="content">
                        <h1>{movie.tenPhim} </h1>
                        <p>{movie.moTa}</p>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div>
            {movie && renderOrderBox()}
            {/* {renderOrderBox()} */}
        </div>
    )
}
