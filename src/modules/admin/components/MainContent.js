import React from 'react'
import ChartDoanhThu from './ChartDoanhThu'
import ChartNguoiDung from './ChartNguoiDung'
import ChartPhim from './ChartPhim'
import Map from './Map'

export default function MainContent() {
    return (
        <div className="mainContent">
            <h2>Dashboard</h2>
            <Map />
            <div className="d-flex mt-5 justify-content-between wrapper chart-res">
                <ChartPhim />
                <ChartNguoiDung />
            </div>
            <ChartDoanhThu />
        </div>
    )
}
