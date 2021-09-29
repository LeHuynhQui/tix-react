import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Loading from '../../../components/Loading'
import { getThongTinCumRap, getThongTinHeThongRap, getThongTinLichChieuHeThongRap } from '../actions/movie'
import hinhAnhRap from "./../others/hinhAnhCumRap.json"

export default function CumRap() {
    const dispatch = useDispatch()

    const history = useHistory()

    const { heThongRap, isLoading } = useSelector(state => state.thongTinHeThongRapReducer)

    const { cumRap, ...rest } = useSelector(state => state.cunRapReducer)

    const { lichChieu, ...rest2 } = useSelector(state => state.lichChieuReducer)


    const [chonLogo, setChonLogo] = useState("BHDStar")

    const [maCumRap, setMaCumRap] = useState("bhd-star-cineplex-3-2")


    const [showGioChieu, setShowGioChieu] = useState(0)

    useEffect(() => {
        dispatch(getThongTinHeThongRap())
        dispatch(getThongTinCumRap("BHDStar"))
        dispatch(getThongTinLichChieuHeThongRap(chonLogo))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        if (cumRap) {
            setMaCumRap(cumRap[0].maCumRap)
        }

    }, [cumRap])

    if (isLoading) {
        return <Loading />
    }



    const handleClickIcon = (maHeThongRap) => {
        dispatch(getThongTinCumRap(maHeThongRap))
        setChonLogo(maHeThongRap)

        // ///////
        dispatch(getThongTinLichChieuHeThongRap(maHeThongRap))


        // GOI Y THANG DAU TIEN NGAY SAU KHI CHON LOGO
        // console.log(cumRap)
        // setMaCumRap(cumRap.find(rap => rap.maHeThongRap === maHeThongRap)[0].maCumRap)


        setShowGioChieu(0)

    }


    const handleClickRap = (maCumRap) => {
        setMaCumRap(maCumRap)
        setShowGioChieu(0)
    }


    const handleClickShowLichChieu = (index) => {
        if (index === showGioChieu) {
            setShowGioChieu(-1)
            return;
        }
        setShowGioChieu(index)
    }


    const renderHeThongRap = () => {
        return heThongRap.map((rap, index) => {

            // const logo = "http://movie0706.cybersoft.edu" + rap.logo.slice(29)

            return (
                <div key={index} className={chonLogo === rap.maHeThongRap ? "active" : ""} onClick={() => handleClickIcon(rap.maHeThongRap)} >
                    <img src={rap.logo} alt={rap.tenHeThongRap} />
                </div>

            )
        })
    }

    const renderCumRap = () => {
        return cumRap.map((rap, index) => {
            const short = hinhAnhRap.filter(rap => rap.macumRap === chonLogo)[0].hinhRap;

            let hinh = short[index]

            if (index > short.length) {
                hinh = short[1]
            }

            return (
                <div className={maCumRap === rap.maCumRap ? "d-flex rap__container active" : "d-flex rap__container"} key={index} onClick={() => handleClickRap(rap.maCumRap)}>
                    <img src={hinh} alt={rap.maCumRap} loading="lazy" />
                    <div>
                        <h6 className={rap.tenCumRap.split("-")[0]}><span>{rap.tenCumRap.split("-")[0]}</span> {rap.tenCumRap.replace(rap.tenCumRap.split("-")[0], "")}</h6>
                        {/* <h6 >{rap.tenCumRap}</h6> */}
                        <p className="m-0">{rap.diaChi}</p>
                    </div>
                </div>
            )
        })
    }





    const renderLichChieuPhim = () => {

        if (lichChieu[0].lstCumRap.find(rap => rap.maCumRap === maCumRap)) {
            return lichChieu[0].lstCumRap.find(rap => rap.maCumRap === maCumRap).danhSachPhim.map((lich, index) => {
                // const hinhAnh = "http://movie0706.cybersoft.edu" + lich.hinhAnh.slice(29)
                return (
                    <div className="lich__container" key={index}>
                        <div className="lich__container-top row" onClick={() => handleClickShowLichChieu(index)}>
                            <div className="col-11" >
                                <img src={lich.hinhAnh} alt={lich.tenPhim} />
                                <div>
                                    <h6> <span className="ageType ">C12</span> {lich.tenPhim.toLowerCase()}</h6>
                                    <p className="m-0">116 phút - TIX 8.6 - IMDb 0</p>
                                </div>
                            </div>
                            <div className="col-1">
                                <i className={showGioChieu === index ? "fas fa-chevron-down rotate" : "fas fa-chevron-down"}></i>
                            </div>
                        </div>

                        <div className={showGioChieu === index ? "lich__container-bottom pt-3 show" : "lich__container-bottom pt-3"}>
                            <h5 className="m-0">2D Digital</h5>
                            <div className="row">
                                {renderGioChieu(lich.lstLichChieuTheoPhim, lich.maPhim)}
                            </div>

                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="lich__container" style={{ borderBottom: "none" }}>
                <h6>Không tìm thấy danh sách phim.</h6>
            </div>
        )

    }


    const renderGioChieu = (lstLichChieuTheoPhim, maPhim) => {
        // console.log(lstLichChieuTheoPhim)
        const ngayMau = lstLichChieuTheoPhim[0].ngayChieuGioChieu.slice(0, 10)

        const mangGioChieu = [];

        lstLichChieuTheoPhim.filter(phim => phim.ngayChieuGioChieu.slice(0, 10) === ngayMau).map(gio => {
            mangGioChieu.push(gio.ngayChieuGioChieu.slice(11, 16))
            return null
        })

        mangGioChieu.sort(function (a, b) {
            return a.localeCompare(b);
        });



        return mangGioChieu.map((gio, index) => {
            const hour = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()
            const minute = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()

            let isDisable = false;

            if (Number(`${hour}${minute}`) > Number(gio.replace(":", ""))) {
                isDisable = true;
            }

            const maLichChieu = lstLichChieuTheoPhim.filter(phim => phim.ngayChieuGioChieu.slice(0, 10) === ngayMau).
                filter(item => item.ngayChieuGioChieu.slice(11, 16) === gio)[0].maLichChieu



            return (
                <div className="col-3" key={index}>
                    <h6 className={isDisable ? "time disable" : "time"} onClick={() => handleXuatVe(maPhim, maLichChieu, isDisable)}>{gio}</h6>
                </div>
            )
        })
    }



    const handleXuatVe = (maPhim, maLichChieu, isDisable) => {
        if (!isDisable) {
            const thongTinVe = {
                maCumRap: maCumRap,
                maLichChieu: `${maLichChieu}`,
                maHeThongRap: chonLogo,
                maPhim: maPhim
            }

            sessionStorage.setItem("thongTinVe", JSON.stringify(thongTinVe))

            if (localStorage.getItem("user")) {
                // tác vụ mô phỏng tạo ra mãng ghế đã được đặt trước.
                const mangGheDaDat = []

                const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

                const soLuongGhe = Math.floor(Math.random() * 21)


                for (let i = 0; i < soLuongGhe; i++) {
                    const gheLetter = Math.floor(Math.random() * 10)

                    const gheNumber = Math.ceil(Math.random() * 12)

                    mangGheDaDat.push(`${letter[gheLetter]}${gheNumber}`)
                }

                // console.log(mangGheDaDat)
                sessionStorage.setItem("gheDaDat", JSON.stringify(mangGheDaDat))



                // Mở ra tab booking mới
                const win = window.open(`/booking/${maPhim}`, "_blank");
                win.focus();

            } else {
                history.push("/login")
            }
        }

    }


    return (
        <section id="cumRap" className="">
            <div className="container">
                <h3 className="text-center ">Hệ Thống Cụm Rạp</h3>
                <div className="cumRap__wraper">
                    <div className="logo">
                        {renderHeThongRap()}

                    </div>

                    <div className="rap">
                        {cumRap && renderCumRap()}


                    </div>

                    <div className="lich">
                        {lichChieu && renderLichChieuPhim()}
                    </div>

                </div>
            </div>
        </section>
    )
}
