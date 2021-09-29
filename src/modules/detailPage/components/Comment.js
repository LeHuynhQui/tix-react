import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import feedBackData from "./../others/feedback.json"


export default function Comment() {

    const { feedBack } = useSelector(state => state.xemThemFeedBackReducer)

   

    const renderFeedBack = (from) => {
        let cut = [...feedBackData]
        return cut.splice(from, 5).map((idea, index) => {
            return (
                <div className="comment" key={index}>
                    <div className="frame">
                        <div className="d-flex justify-content-between">
                            <div className="userInfo d-flex">
                                <img src={idea.avatar} alt="ava" />
                                <div>
                                    <p className="name m-0">{idea.name}</p>
                                    <p className="date mb-1">{idea.time}</p>
                                </div>
                            </div>
                            <div className="rating">
                                <p>{idea.rating}</p>
                                <div>
                                    {renderRating(idea.rating)}
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            {idea.comment}
                        </div>
                        <div className="like">
                            <span><img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" /></span>
                            <span>{idea.like} Thích</span>
                        </div>
                    </div>

                </div>
            )
        })
    }

    const renderRating = (number) => {
        
        let rating = []

        for (let i = 1; i <= number; ++i) {
            if (i % 2 === 0) {
                rating.push(<span  key={Math.random()}><img src="https://tix.vn/app/assets/img/icons/star1.png" alt="star1"/></span>)
            }
        }

        if (number % 2  !== 0) {
            rating.push(<span key={Math.random()}><img src="https://tix.vn/app/assets/img/icons/star1.2.png" alt="star1/2"/></span>)
        }

        return rating.map(item => { return item })
}


    return (
        <Fragment>
            {renderFeedBack(0)}
            {feedBack >=1 && renderFeedBack(5)}
            {feedBack ===2 && renderFeedBack(10)}
        </Fragment>
    )
}
