import React, { useState } from 'react'
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import Lotties from '../../../components/NotFound';

import data from "./../../../data/17528-pulse-click.json"

export default function Account() {
    const history = useHistory ()
    const user = localStorage.getItem("user")


    const [isHover, setIsHover] = useState(false)

    const [hasChange, setHasChange] = useState(null)

    const [isDisableHoten, setIsDisableHoTen] = useState(true)
    const [isDisableSdt, setIsDisableSdt] = useState(true)

    const [valueHoten, setValueHoten] = useState(null)
    const [valueSdt, setValueSoDt] = useState(null)



    // NHAP
    const [soon, setSoon] = useState(null)



    if(!user) {
        return <Lotties />
    }

    const userInfor = JSON.parse(user)

    const clickMe = () => {
        setIsHover(true)
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const clickBack = () => {
        history.goBack()
    }

    const change = (titile) => {
        setHasChange(titile)
    }

    const handleChange = (event) => {
        let {name, value} = event.target
        if(name === "hoTen") {
            if(value.trim()) {
                setIsDisableHoTen(false)
                setValueHoten(value)
            } else {
                setIsDisableHoTen(true)

            }
        }
        if(name === "soDT") {
            if(value.trim()) {
                setIsDisableSdt(false)
                setValueSoDt(value)
            } else {
                setIsDisableSdt(true)

            }
        }
    }

    const focus = () => {
        setIsDisableHoTen(true)
        setIsDisableSdt(true)
        setValueHoten(null)
        setValueSoDt(null)
    }


    const updateTen = () => {
        if(!isDisableHoten) {
            console.log("valueHoten", valueHoten)
            setSoon("Tính năng đang được phát triển")
        }
    }


    const updateSDT = () => {
        if(!isDisableSdt) {
            console.log("valueSDT", valueSdt)
            setSoon("Tính năng đang được phát triển")
        }
    }
    

    return (
        <div className="user-account">
            <div className={isHover ? "glass d-flex justify-content-center align-items-center active" : "glass d-flex justify-content-center align-items-center"}>
                <div className="">
                    <div className={isHover ? "ava text-center active" : "ava text-center"}>
                        <img src={userInfor.avatar} alt="avtar" onClick={clickMe} />
                        <div className={isHover ? "d-none" : "click-me"}>
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                    <div className={isHover ? "body-content active" : "body-content"}>
                        <h5 className="text-center">{userInfor.taiKhoan}</h5>
                        <hr />

                        <div className="d-flex justify-content-between py-2">
                            {hasChange === "hoTen" ? <input type="text" placeholder= {userInfor.hoTen} name="hoTen" onFocus={focus} onChange={handleChange}/> : <h6 className="ten">{userInfor.hoTen}</h6>}
                            {hasChange === "hoTen" ? <p className={isDisableHoten ? "mb-0 no-drop" : "mb-0"} onClick={updateTen}>Xác nhận</p> : <p className="mb-0" onClick={() => change("hoTen")}>Thay đổi</p>}
                            
                        </div>

                        <div className="d-flex justify-content-between py-2">
                            <h6>{userInfor.email}</h6>
                            <p className="mb-0 no-drop">Thay đổi</p>

                        </div>

                        <div className="d-flex justify-content-between py-2">
                            {hasChange === "soDT" ? <input type="text" placeholder= {userInfor.soDT} name="soDT" onFocus={focus} onChange={handleChange}/> : <h6 className="ten">{userInfor.soDT}</h6>}
                            {hasChange === "soDT" ? <p className={isDisableSdt ? "mb-0 no-drop" : "mb-0"} onClick={updateSDT}>Xác nhận</p> : <p className="mb-0" onClick={() => change("soDT")}>Thay đổi</p>}
                        </div>


                        <div className="d-flex justify-content-between py-2">
                            <h6>*********</h6>
                            <p className="mb-0 no-drop">Thay đổi</p>
                        </div>
                        {soon && <p className="text-danger">* {soon}</p>}
                    </div>
                </div>
            </div>
            <div className="back" onClick={clickBack}>
                <i className="fas fa-arrow-circle-left"></i>
            </div>
        </div>
    )
}
