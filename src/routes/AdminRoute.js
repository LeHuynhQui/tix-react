import React from 'react'

import { Route } from "react-router-dom"
import NotFound from '../components/NotFound'

export default function AdminRoute({children, ...rest}) {
    const user = localStorage.getItem("user")
    if (user && JSON.parse(user).maLoaiNguoiDung === "QuanTri") {
        return (
            <Route {...rest}>
                {children}
            </Route>
        )
    }
    return <NotFound />
}


    
