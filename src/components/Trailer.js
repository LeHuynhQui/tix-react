import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SHOW_TRAILER } from '../modules/homePage/constants/movie'

export default function Trailer() {
    const dispatch = useDispatch()
    const { show, trailer } = useSelector(state => state.movieReducer)

    const handleClose = () => {
        dispatch({
            type: SHOW_TRAILER,
            value: false
        })
    }

    const renderTrailer = () => {
        return (
            <div className="trailer" onClick={handleClose}>
                <div>
                    <iframe src={trailer} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <img src="https://tix.vn/app/assets/img/icons/close.png" alt="close" onClick={handleClose} />
                </div>
            </div>
        )
    }
    return (
        <div>
            {show ? renderTrailer() : null}
        </div>
    )
}
