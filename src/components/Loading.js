import React from 'react'
import Header from './Header'

export default function Loading(props) {
    const renderHeader = () => {
        if(props) {
            if (!props.hasHeader) {
                return  null
            }
        }
        return <Header />
    }

    return (
        <div>
            {renderHeader ()}
            <div className="loading">
                <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="loading"/>
            </div>
        </div>
    )
}
