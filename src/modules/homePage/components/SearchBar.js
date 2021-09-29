import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getMovieDetail } from '../../detailPage/actions/movieDetail'

export default function SearchBar() {

    const history = useHistory()

    const dispatch = useDispatch()

    const [isShowMovie, setIsShowMovie] = useState(false)

    const [isShowRap, setIsShowRap] = useState(false)
    const [getTenRap, setGetTenRap] = useState("Rạp")

    const [isShowNgayChieu, setIsShowNgayChieu] = useState(false)
    const [getNgayChieu, setGetNgayChieu] = useState(null)
    const [getNgay, setGetNgay] = useState("Ngày xem")

    const [isShowSuatChieu, setIsShowSuatChieu] = useState(false)
    const [getSuatChieu, setGetSuatChieu] = useState("Suất chiếu")


    const [thongTinVe, setThongTinVe] = useState({
        maCumRap: "",
        maLichChieu: "",
        maHeThongRap: "",
        maPhim:""
    })


    const { movies } = useSelector(state => state.movieReducer)
    const { movie } = useSelector(state => state.movieDetailReducer)




    useEffect(() => {
        return () => {
            setIsShowMovie(false)
            setIsShowRap(false)
            setGetTenRap("")
            setGetNgay("")
            setGetSuatChieu("")
            setIsShowNgayChieu(false)
            setIsShowSuatChieu(false)
            setGetNgayChieu(null)
            setThongTinVe({})
        }
    }, [])



    // Render List
    const renderPhimList = () => {
        return movies.map((movie, index) => {
            return (
                <h6 className="mb-2" key={index} onClick={() => handleSelectPhim(movie.maPhim)}>{movie.tenPhim.toLowerCase()}</h6>
            )
        })
    }

    const renderRapList = () => {
        if (movie) {
            return movie.heThongRapChieu.map((rap, index) => {
                // console.log("rap",rap)
                return rap.cumRapChieu.map((rapChiTiet, ind) => {
                    return (
                        <h6 className="mb-2" key={`${index}/${ind}`} onClick={() => handleSelectRap(rapChiTiet.tenCumRap, rapChiTiet,rapChiTiet.maCumRap, rap.maHeThongRap)}>{rapChiTiet.tenCumRap}</h6>
                    )
                })
            })
        }
        return (
            <h6 className="mb-2">Vui lòng chọn phim.</h6>
        )
    }


    const renderNgayXemList = () => {
        if (getTenRap !== "Rạp") {
            let mangNgayChieu = []

            if (getNgayChieu) {
                getNgayChieu.lichChieuPhim.map((ngayChieu) => {
                    let ddMMyyyy = "";
                    let yyyyMMdd = ngayChieu.ngayChieuGioChieu.slice(0, 10);
                    ddMMyyyy += yyyyMMdd.slice(-2)
                    ddMMyyyy += `/${yyyyMMdd.slice(5, 7)}`
                    ddMMyyyy += `/${yyyyMMdd.slice(0, 4)}`
    
                    mangNgayChieu.push(ddMMyyyy)
                    return null
                })
            }




            let sort = mangNgayChieu.filter((item, index) => {
                return mangNgayChieu.indexOf(item) === index;
            });


            // sap xep dung thu tu ngay tang dan

            for (let i = 0; i < sort.length - 1; i++) {
                for (let j = i + 1; j < sort.length; j++) {
                    let ddI = sort[i].slice(0, 2)
                    let mmI = sort[i].slice(3, 5)
                    let yyyyI = sort[i].slice(6)
                    let ddJ = sort[j].slice(0, 2)
                    let mmJ = sort[j].slice(3, 5)
                    let yyyyJ = sort[j].slice(6)
                    if (ddI > ddJ && mmI >= mmJ && yyyyI >= yyyyJ) {
                        const newDate = sort[j]
                        const newChange = sort[i]
                        sort.splice(i, 1, newDate)
                        sort.splice(j, 1, newChange)
                    }
                }
            }

            return sort.map((ngay, index) => {
                return <h6 className="mb-2" key={index} onClick={() => handleSelectNgay(ngay)}>{ngay}</h6>
            })

        }

        return (
            <h6 className="mb-2">Vui lòng chọn phim & rạp.</h6>
        )

    }

    const renderSuatChieuList = () => {
        if (getNgay !== "Ngày xem") {
            if(getNgayChieu) {
                let yyyyMMdd = `${getNgay.slice(6 - 10)}-${getNgay.slice(3, 5)}-${getNgay.slice(0, 2)}`

            let mangSuatChieu = []

                getNgayChieu.lichChieuPhim.map((ngayChieu) => {
                    let strimDay = ngayChieu.ngayChieuGioChieu.slice(0, 10);
                    if (strimDay === yyyyMMdd) {
                        mangSuatChieu.push(ngayChieu.ngayChieuGioChieu)
                    }
                    return null
                })
                return mangSuatChieu.map((suatChieu, index) => {
                    let maLich = ""
                    getNgayChieu.lichChieuPhim.map(lich => {
                        if (lich.ngayChieuGioChieu === suatChieu) {
                            maLich = lich.maLichChieu
                        }
                    })
                    // console.log("suatchieu",suatChieu)
                    // console.log("getNgayChieu", getNgayChieu)
                    let suat = suatChieu.slice(-8)
                    return <h6 className="mb-2" key={index} onClick={() => handleSelectSuatChieu(suat, maLich)}>{suat.slice(0, 5)}</h6>
                })
            }
            return null
        }


        return (
            <h6 className="mb-2">Vui lòng chọn phim, rạp & ngày xem.</h6>
        )

    }


    // onClick 
    const showMovieList = () => {
        setIsShowMovie(isShowMovie => !isShowMovie)
        setIsShowRap(false)
        setGetTenRap("Rạp")
        setIsShowNgayChieu(false)
        setGetNgay("Ngày xem")
        setGetSuatChieu("Suất chiếu")
        setIsShowSuatChieu(false)
    }

    const showRapList = () => {
        // if (movie && !isShowMovie) {
        setIsShowRap(isShowRap => !isShowRap)
        // }
        
        setGetNgay("Ngày xem")
        setGetSuatChieu("Suất chiếu")


        setIsShowMovie(false)
        setIsShowNgayChieu(false)
        setIsShowSuatChieu(false)
    }

    const showNgayList = () => {
        // if (!isShowMovie && !isShowRap) {
        setIsShowNgayChieu(isShowNgayChieu => !isShowNgayChieu)
        // }
        setGetSuatChieu("Suất chiếu")
        

        setIsShowMovie(false)
        setIsShowRap(false)
        setIsShowSuatChieu(false)
    }

    const showSuatChieuList = () => {
        // if (getNgay !== "Ngày xem" && !isShowMovie && !isShowRap && !isShowNgayChieu) {
            setIsShowSuatChieu(isShowSuatChieu => !isShowSuatChieu)

        // }

        setIsShowMovie(false)
        setIsShowRap(false)
        setIsShowNgayChieu(false)
    }




    // Select List
    const handleSelectPhim = (maPhim) => {
        dispatch(getMovieDetail(maPhim))
        setIsShowMovie(isShowMovie => !isShowMovie)
        setIsShowRap(isShowRap => !isShowRap)

        setThongTinVe({...thongTinVe, maPhim: maPhim})

    }

    const handleSelectRap = (tenRap, rapChiTiet, maCumRap, maHeThongRap) => {
        setThongTinVe({...thongTinVe, maCumRap: maCumRap, maHeThongRap: maHeThongRap})

        setIsShowRap(isShowRap => !isShowRap)
        setGetTenRap(tenRap)
        setGetNgayChieu(rapChiTiet)
        setIsShowNgayChieu(isShowNgayChieu => !isShowNgayChieu)
    }

    const handleSelectNgay = (ngay) => {
        setGetNgay(ngay)
        setIsShowNgayChieu(isShowNgayChieu => !isShowNgayChieu)
        setIsShowSuatChieu(isShowSuatChieu => !isShowSuatChieu)
    }

    const handleSelectSuatChieu = (suat, maLich) => {
        setGetSuatChieu(suat.slice(0, 5))
        setIsShowSuatChieu(isShowSuatChieu => !isShowSuatChieu)
        
        setThongTinVe({...thongTinVe, maLichChieu: maLich})
    }



    const renderMuaBtn = () => {
        if (getSuatChieu !== "Suất chiếu") {
            return <button className="mua" onClick={handleClick}>MUA VÉ NGAY</button>
        }

        return <button>MUA VÉ NGAY</button>
    }

    const handleClick = () => {
        sessionStorage.setItem("thongTinVe", JSON.stringify(thongTinVe))

        if(localStorage.getItem("user")) {
            // tác vụ mô phỏng tạo ra mãng ghế đã được đặt trước.
            const mangGheDaDat = []

            const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

            const soLuongGhe = Math.floor(Math.random() * 21)


            for (let i = 0; i < soLuongGhe; i++) {
                const gheLetter = Math.floor(Math.random() * 10)

                const gheNumber = Math.ceil(Math.random() * 12)

                mangGheDaDat.push(`${letter[gheLetter]}${gheNumber}`)
            }

            console.log(mangGheDaDat)
            sessionStorage.setItem("gheDaDat", JSON.stringify(mangGheDaDat))



            // Mở ra tab booking mới
            const win = window.open(`/booking/${movie.maPhim}`, "_blank");
            win.focus();




        } else {
            history.push("/login")
        }

        
    }

    return (
        <section className="searchBar container">
            <div className="row searchBar_wapper">
                <div className="col-4 py-1 position-relative">
                    <div className="border-right w-100 h-50 d-flex align-items-center justify-content-between pr-3" onClick={showMovieList}>
                        <p className="phim">{movie ? `${movie.tenPhim}` : "Phim"}</p>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className={isShowMovie ? "phimList" : "phimList d-none"}>
                        <div>
                            {isShowMovie && renderPhimList()}
                        </div>
                    </div>
                </div>

                <div className="col-2 py-1">
                    <div className="border-right w-100 h-50 d-flex align-items-center justify-content-between pr-3" onClick={showRapList}>
                        <p className="rap">{getTenRap}</p>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className={isShowRap ? "rapList" : "rapList d-none"} >
                        {renderRapList()}
                    </div>
                </div>
                <div className="col-2 py-1">
                    <div className="border-right w-100 h-50 d-flex align-items-center justify-content-between pr-3" onClick={showNgayList}>
                        <p className="ngay">{getNgay}</p>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className={isShowNgayChieu ? "ngayList" : "ngayList d-none"}  >
                        {renderNgayXemList()}
                    </div>
                </div>
                <div className="col-2 py-1">
                    <div className="border-right w-100 h-50 d-flex align-items-center justify-content-between pr-3" onClick={showSuatChieuList}>
                        <p className="suat">{getSuatChieu}</p>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className={isShowSuatChieu ? "suatchieuList" : "suatchieuList d-none"}>
                        {renderSuatChieuList()}
                    </div>
                </div>
                <div className="col-2 py-1">
                    {renderMuaBtn()}
                </div>
            </div>
        </section>
    )
}
