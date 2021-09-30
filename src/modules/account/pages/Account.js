import React, { useState } from 'react'
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import Lotties from '../../../components/NotFound';

import data from "./../../../data/17528-pulse-click.json"

export default function Account() {
    const history = useHistory ()
    const user = localStorage.getItem("user")


    const [isHover, setIsHover] = useState(false)


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
                            <h6 className="ten">{userInfor.hoTen}</h6>
                            <p className="mb-0">Thay đổi</p>
                        </div>

                        <div className="d-flex justify-content-between py-2">
                            <h6>{userInfor.email}</h6>
                            <p className="mb-0 no-drop">Thay đổi</p>

                        </div>

                        <div className="d-flex justify-content-between py-2">
                            <h6>{userInfor.soDT}</h6>
                            <p className="mb-0">Thay đổi</p>
                        </div>


                        <div className="d-flex justify-content-between py-2">
                            <h6>*********</h6>
                            <p className="mb-0 no-drop">Thay đổi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back" onClick={clickBack}>
                <i className="fas fa-arrow-circle-left"></i>
            </div>
        </div>
    )
}
