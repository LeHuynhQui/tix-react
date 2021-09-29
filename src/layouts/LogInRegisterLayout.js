import React from 'react'
import { useLocation } from "react-router-dom"

export default function LogInRegisterLayout({ children, ...rest }) {
    const location  = useLocation()
    console.log()
    return (
        <div className= {location.pathname === "/register" ? "register" : "logIn"}>
            <div className="card-logIn container">
                <img src="./img/group@2x.png" alt="icon" />
                {children}
            </div>
        </div>
    )
}