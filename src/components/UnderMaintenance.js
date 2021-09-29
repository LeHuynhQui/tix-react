import React from 'react'
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import underMaintenace from "./../data/underMaintenance.json"

export default function UnderMaintenance() {

    const history = useHistory();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: underMaintenace,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleClick = () => {
        history.goBack()
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center under-maintenance" style={{width:"100vw", height: "100vh"}}>
            <Lottie
                options={defaultOptions}
                style={{width:"816px", height:"372px"}}
            />
            <button className="notFoundBtn comingSoonBtn mt-5" onClick={handleClick}>Quay lại</button>
        </div>
    )
}
