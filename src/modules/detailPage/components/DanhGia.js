import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { XEM_THEM_FEEDBACK } from '../constants/movieDetail'
import Comment from './Comment'
import { useHistory } from "react-router-dom"

export default function DanhGia() {
    const dispatch = useDispatch()
    const { feedBack } = useSelector(state => state.xemThemFeedBackReducer)

    const history = useHistory()

    const handleClick = () => {
        dispatch({ type: XEM_THEM_FEEDBACK })
    }

    const renderAvatar = () => {
        if (localStorage.getItem("user")) {
            return <img src={JSON.parse(localStorage.getItem("user")).avatar} alt="ava"/>
        }

        return <img src="https://tix.vn/app/assets/img/avatar.png" alt="ava"/>
    }

    const handleComment = () => {
        if (localStorage.getItem("user")) {
            history.push('/coming-soon')
            return null
        }

        history.push('/login')

    }

    return (
        <section className="detailReview">
            <div className="box" onClick={handleComment}>
                <span className="ava">
                    {renderAvatar()}
                </span>
                <input className="inputReviwer" type="text" placeholder="  Bạn nghĩ gì về phim này?" readOnly="readonly" />
                <span className="start">
                    <img src="https://tix.vn/app/assets/img/icons/listStar.png" alt="lorem"/>
                </span>
            </div>
            <Comment />
            
            <div className= {feedBack ===2 ? "text-center d-none" : "text-center"}>
                <button onClick={handleClick} >XEM THÊM</button>
            </div>
        </section>
        
    )
}
