import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom"
import DangXuat from './DangXuat';

export default function Header() {
    const history = useHistory()

    const [city, setCity] = useState("Hồ Chí Minh")
    const [show, setShow] = useState(false)

    const [cityList, setCityList] = useState([])

    const [hasMenu, setHasMenu] = useState(false)

    const { user } = useSelector(state => state.loginReducer)


    useEffect(() => {
        const getCity = async () => {
            try {
                let { data } = await axios.get("https://provinces.open-api.vn/api/")

                let mangSort = [];
                data.map(city => {
                    mangSort.push(city.name.replace("Thành phố", "").replace("Tỉnh", "").trim())
                    return city
                })

                setCityList(mangSort.sort())
            } catch (error) {
                console.log(error)
            }
        }

        getCity()

        return () => {
            setCity("")
            setShow(false)

            setCityList([])
        }
    }, [])

    const setCityName = (cityName) => {
        setCity(cityName)
        setShow(show => !show)

    }

    const renderCity = () => {
        return cityList.map((city, index) => {
            return <p key={index} onClick={() => setCityName(city)}>{city}</p>
        })
    }

    const handleShow = () => {
        setShow(show => !show)
    }




    const handleClick = () => {
        history.push("/login")
    }


    const hanldleClickAccount = () => {
        history.push("/account")
    }

    const renderUser = () => {
        if (user) {
            if (user.maLoaiNguoiDung === "QuanTri") {
                return (
                    <div className="d-flex align-items-center">
                        <Link to="/admin" target="_blank" rel="noreferrer"><img className="admin-icon" style={{ width: "50px" }} src="https://static.vecteezy.com/system/resources/thumbnails/001/990/068/small/confidential-folder-protected-data-icon-vector.jpg" alt="icon admin" /></Link>
                        <div className="account d-flex align-items-center dangXuat" >
                            <img className="mr-2" src={user.avatar ? user.avatar : "https://i.pravatar.cc/200"} alt="avatar" onClick={hanldleClickAccount}/>
                            <p className=" p-0 m-0" onClick={hanldleClickAccount}>{user.hoTen}</p>
                            <DangXuat />
                        </div>
                    </div>
                )
            }

            return (
                <div className="account d-flex align-items-center dangXuat">
                    <img className="mr-2" src={user.avatar ? user.avatar : "https://i.pravatar.cc/200"} alt="avatar" />
                    <p className=" p-0 m-0">{user.hoTen}</p>
                    <DangXuat />
                </div>
            )
        }

        return (
            <div className="account d-flex align-items-center" onClick={handleClick}>
                <img className="mr-2" src="https://tix.vn/app/assets/img/avatar.png" alt="avatar" />
                <p className=" p-0 m-0">Đăng Nhập</p>
            </div>
        )
    }

    const renderSubMenu = () => {
        return(
            <div className="menu-container">
                <div className="menu">
                    <div className="top d-flex align-items-center justify-content-between">
                        <div>
                            {renderUseResponsive()}
                        </div>
                        <i className="fas fa-chevron-right" onClick={toggle}></i>
                    </div>
                    <div className="list">
                        <a href="/#lichChieu" onClick={toggle}>Lịch Chiếu</a>
                        <a href="/#cumRap" onClick={toggle}>Cụm rạp</a>
                        <a href="/#tinTuc" onClick={toggle}>Tin Tức</a>
                        <a href="/#ungDung" onClick={toggle}>Ứng dụng</a>
                        <hr/>
                        {renderOtherFunction()}
                    </div>
                </div>
            </div>
        )
    }

    const renderUseResponsive = () => {
        if (user) {
            return (
                <div className="account d-flex align-items-center dangXuat">
                    <img className="mr-2" src={user.avatar ? user.avatar : "https://i.pravatar.cc/200"} alt="avatar" />
                    <p className=" p-0 m-0">{user.hoTen}</p>
                </div>
            )
        }

        return (
            <div className="account d-flex align-items-center" onClick={handleClick}>
                <img className="mr-2" src="https://tix.vn/app/assets/img/avatar.png" alt="avatar" />
                <p className=" p-0 m-0">Đăng nhập</p>
            </div>
        )
    }

    const renderOtherFunction = () => {
        if (user) {
            if (user.maLoaiNguoiDung === "QuanTri") {
                return (
                    <div>
                        <Link to="/admin" target="_blank" rel="noreferrer" className="text-danger">Admin</Link>
                        <Link to="/account" target="_blank" rel="noreferrer">Account</Link>
                        <DangXuat />
                    </div>
                )
            }
            return (
                <div>
                    <Link to="/account" target="_blank" rel="noreferrer">Account</Link>
                    <DangXuat />
                </div>
            )
        }
    }


    const toggle = () => {
        setHasMenu(!hasMenu)
    }

    return (
        <header className="d-flex justify-content-between px-3">
            <a className="logo" href="/">
                <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="logo" />
            </a>
            <div className="center">
                <a href="/#lichChieu">Lịch Chiếu</a>
                <a href="/#cumRap">Cụm rạp</a>
                <a href="/#tinTuc">Tin Tức</a>
                <a href="/#ungDung">Ứng dụng</a>
            </div>

            <div className="right d-flex">
                {renderUser()}
                <div className="d-flex align-items-center location" onClick={handleShow}>
                    <i className="fas fa-map-marker-alt"></i>
                    <p className=" p-0 m-0" style={{ width: "115px" }} >{city}</p>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            <div className={show ? "city show" : "city"}>
                {renderCity()}
            </div>
            <div className="humburger" onClick={toggle}>
                <img src="https://tix.vn/app/assets/img/icons/menu-options.png" alt="humburger" />
            </div>

            {hasMenu && renderSubMenu()}

        </header>
    )
}
