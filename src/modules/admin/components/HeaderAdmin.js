import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import PersonalLogo from '../../../components/PersonalLogo';
import { GET_SEARCH_PHIM_VALUE, GET_SEARCH_USER_VALUE } from '../constants/admin';
export default function HeaderAdmin() {
    const dispatch = useDispatch()

    const {path} = useRouteMatch()
    const {avatar, hoTen} = JSON.parse(localStorage.getItem("user"))



    const handleChangeMovie = (event) => {
        dispatch({
            type: GET_SEARCH_PHIM_VALUE,
            searchPhimValue : event.target.value
        })
    }

    const handleChangeUser = (event) => {
        dispatch({
            type: GET_SEARCH_USER_VALUE,
            searchUserValue : event.target.value
        })
    }


    const renderInput = () => {
        if (path === "/admin") {
            return (
                <Input placeholder="Tìm kiếm" readOnly/>
            )
        }

        if (path === "/admin/user") {
            return (
                <Input placeholder="Nhập tên tài khoản" onChange={handleChangeUser}/>
            )
        }
        
        if (path === "/admin/movie") {
            return (
                <Input placeholder="Nhập tên phim" onChange={handleChangeMovie}/>
            )
        }
    }

    return (
        <div className="header">
            <div className="logo">
                <a href="/admin"><PersonalLogo /></a>
            </div>

            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><i className="fas fa-search"></i></InputGroupText>
                </InputGroupAddon>
               {renderInput()}
            </InputGroup>
            <div className="user-setting d-flex">
                <img src={avatar} alt="ava" />
                <div className="d-flex">
                    <p className="m-0">{hoTen} <span className="number">9</span> </p>
                    <i className="fas fa-chevron-down"></i>
                    <i className="far fa-comment-dots"></i>
                </div>
            </div>

            <div className="d-flex icons">
                <i className="fas fa-cog mr-3"></i>
                <i className="far fa-bell mr-3"></i>
                <i className="fas fa-power-off"></i>
            </div>
        </div>
    )
}
