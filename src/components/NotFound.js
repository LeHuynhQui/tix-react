import React from 'react'
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import animationData from "./../data/notFound.json"

export default function Lotties() {

    const history = useHistory();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleClick = () => {
        history.replace("/")
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center not-found" style={{width:"100vw", height: "100vh"}}>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
            <button className="notFoundBtn" onClick={handleClick}>Về trang chủ</button>
        </div>
    )
}
