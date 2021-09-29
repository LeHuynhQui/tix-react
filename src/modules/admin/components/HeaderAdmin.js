import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import PersonalLogo from '../../../components/PersonalLogo';
export default function HeaderAdmin() {

    const {avatar, hoTen} = JSON.parse(localStorage.getItem("user"))

    return (
        <div className="header">
            <div className="logo">
                <a href="/admin"><PersonalLogo /></a>
            </div>

            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><i className="fas fa-search"></i></InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Tìm kiếm" />
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
