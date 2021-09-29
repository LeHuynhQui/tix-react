import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { XEM_THEM_KHUYEN_MAI } from '../constants/movie'
import khuyenMaiData from "./../others/khuyenMai.json"
import { useHistory } from 'react-router-dom'


export default function KhuyenMai() {
    const history = useHistory()

    const dispatch = useDispatch()

    const { khuyenMai } = useSelector(state => state.xemThemReducer)

    const handleClick = () => {
        dispatch({ type: XEM_THEM_KHUYEN_MAI })
    }

    const handleClickDetail = () => {
        history.push("/coming-soon")
    }

    const renderKhuyenMai1 = () => {
        return (
            <Fragment>
                <div className="row top mb-3">
                    {khuyenMaiData[1].top.map((top, index) => {
                        return (
                            <div className="col-sm-6 d-flex flex-column" key={index}>
                                <img src={top.hinhAnh} alt="buff1" onClick={handleClickDetail}/>
                                <div>
                                    <h6 onClick={handleClickDetail}>{top.title}</h6>
                                    <p>{top.sub}</p>
                                    <div className="d-flex align-items-center icon">
                                        <div className="d-flex like align-items-center mr-3">
                                            <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                            <p className="mb-2">{top.like}</p>
                                        </div>
                                        <div className="d-flex comment align-items-center ml-3">
                                            <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                            <p className="mb-2">{top.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="row bottom mb-3">
                    {khuyenMaiData[1].bottomLeft.map((left, index) => {
                        return (
                            <div className="col-sm-4 d-flex flex-column" key={index}>
                                <img src={left.hinhAnh} alt="buff1" onClick={handleClickDetail}/>
                                <div>
                                    <h6 onClick={handleClickDetail}>{left.title}</h6>
                                    <p>{left.sub}</p>
                                    <div className="d-flex align-items-center icon">
                                        <div className="d-flex like align-items-center mr-3">
                                            <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                            <p className="mb-2">{left.like}</p>
                                        </div>
                                        <div className="d-flex comment align-items-center ml-3">
                                            <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                            <p className="mb-2">{left.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="col-sm-4 bottom_right">

                        {khuyenMaiData[1].bottomRight.map((right, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-sm-3">
                                        <img src={right.hinhAnh} alt="right" onClick={handleClickDetail}/>
                                    </div>
                                    <div className="col-sm-9">
                                        <h6 onClick={handleClickDetail}>{right.title}</h6>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </Fragment>
        )
    }



    return (
        <div className="mb-5 ">
            <div className="row top mb-3">
                {khuyenMaiData[0].top.map((top, index) => {
                    return (
                        <div className="col-sm-6 d-flex flex-column" key={index}>
                            <img src={top.hinhAnh} alt="buff1" onClick={handleClickDetail}/>
                            <div>
                                <h6 onClick={handleClickDetail}>{top.title}</h6>
                                <p>{top.sub}</p>
                                <div className="d-flex align-items-center icon">
                                    <div className="d-flex like align-items-center mr-3">
                                        <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                        <p className="mb-2">{top.like}</p>
                                    </div>
                                    <div className="d-flex comment align-items-center ml-3">
                                        <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                        <p className="mb-2">{top.comment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="row bottom mb-3">
                {khuyenMaiData[0].bottomLeft.map((left, index) => {
                    return (
                        <div className="col-sm-4 d-flex flex-column" key={index}>
                            <img src={left.hinhAnh} alt="buff1" onClick={handleClickDetail}/>
                            <div>
                                <h6 onClick={handleClickDetail}>{left.title}</h6>
                                <p>{left.sub}</p>
                                <div className="d-flex align-items-center icon">
                                    <div className="d-flex like align-items-center mr-3">
                                        <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                        <p className="mb-2">{left.like}</p>
                                    </div>
                                    <div className="d-flex comment align-items-center ml-3">
                                        <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                        <p className="mb-2">{left.comment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="col-sm-4 bottom_right">

                    {khuyenMaiData[0].bottomRight.map((right, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-sm-3">
                                    <img src={right.hinhAnh} alt="right" onClick={handleClickDetail}/>
                                </div>
                                <div className="col-sm-9">
                                    <h6 onClick={handleClickDetail}>{right.title}</h6>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            { khuyenMai === 1 && renderKhuyenMai1()}

            <div className={khuyenMai === 1 ? "text-center d-none" : "text-center"}>
                <button onClick={handleClick}>XEM THÊM</button>
            </div>
        </div>
    )
}
