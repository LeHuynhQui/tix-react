import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBarResponsive() {

    const [hasMenuAdmin, setHasMenuAdmin] =useState(false)

    const toggle = () => {
        setHasMenuAdmin(!hasMenuAdmin)
    }

    return (
        <div className={hasMenuAdmin? "SideBarResponsive active" : "SideBarResponsive"}>
            <div className="close-icon" onClick={toggle}>
                <i className= {hasMenuAdmin ? "fas fa-chevron-right active" : "fas fa-chevron-right"}></i>
            </div>
            <div className="admin-menu">
                <div className="link">
                    <div className="d-flex">
                        <NavLink to="/admin" exact activeClassName="active">
                            <i className="fas fa-home"></i>
                            <h6 className="m-0">Dashboard</h6>
                        </NavLink>
                    </div>

                    <div className="d-flex">
                        <NavLink to="/admin/movie" activeClassName="active"> 
                            <i className="fas fa-film"></i>
                            <h6 className="m-0">Quản lý phim</h6>
                        </NavLink>
                    </div>

                    <div className="d-flex">
                        <NavLink to="/admin/user" activeClassName="active">
                            <i className="fas fa-user-alt"></i>
                            <h6 className="m-0">Quản lý người dùng</h6>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
