import React from 'react'
import { useDispatch } from 'react-redux'
import { DANG_XUAT } from '../modules/login/constants/login'

export default function DangXuat() {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({
            type: DANG_XUAT
        })
    }

    return (
        <div className="dangXuatBtn" onClick={handleClick}>
            <button>Đăng xuất</button>
        </div>
    )
}
