import React from 'react'

import { Route } from "react-router-dom"
import NotFound from '../components/NotFound'

export default function BookingRoute({children, ...rest}) {
    const user = localStorage.getItem("user")
    const thongtinVe = sessionStorage.getItem("thongTinVe")
    if (user && thongtinVe) {
        return (
            <Route {...rest}>
                {children}
            </Route>
        )
    }
    return <NotFound />
}
