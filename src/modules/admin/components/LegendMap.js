import React from 'react'

export default function LegendMap() {
    return (
        <div className="legend">
            <h6>Top 3 quốc gia</h6>
            <h6> có số lượng phim nhiều nhất</h6>
            <div>
                <div className="d-flex align-items-center justify-content-between pr-5 mb-2">
                    <div className="d-flex  align-items-center">
                        <h6 className="green m-0 mr-2"> </h6>
                        <p className="m-0">Top 1</p>
                    </div>
                    <p className="m-0 percent">53%</p>
                </div>
                <div className="d-flex align-items-center justify-content-between pr-5 mb-2">
                    <div className="d-flex  align-items-center">
                        <h6 className="red m-0 mr-2"> </h6>
                        <p className="m-0">Top 2</p>
                    </div>
                    <p className="m-0 percent">27%</p>
                </div>
                <div className="d-flex align-items-center justify-content-between pr-5">
                    <div className="d-flex  align-items-center">
                        <h6 className="blue m-0 mr-2"> </h6>
                        <p className="m-0">Top 3</p>
                    </div>
                    <p className="m-0 percent">23%</p>
                </div>
            </div>
        </div>
    )
}
