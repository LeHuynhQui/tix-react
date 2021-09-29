import React from 'react'

import PersonalLogo from "./../../../components/PersonalLogo"

import { NavLink } from "react-router-dom"
export default function SlideBar() {
    return (
        <div className="slide-bar">
            <div className="logo">
                <PersonalLogo />
            </div>
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
    )
}
