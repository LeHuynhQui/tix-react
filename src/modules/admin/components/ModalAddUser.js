import React, { useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label } from 'reactstrap';

import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../actions/admin';
import { postTaiKhoan } from '../../register/actions/register';

let schema = yup.object().shape({
    taiKhoan: yup.string().required("* Tài khoản người dùng là bắt buộc!"),
    hoTen: yup.string().required("* Họ tên người dùng là bắt buộc!"),
    email: yup.string().required("* Email người dùng là bắt buộc!").email("* Email không đúng định dạng!"),
    soDt: yup.string().required("* Số điện thoại là bắt buộc!").matches(/[0-9]+/, "Số điện thoại phải là số!").min(10, "* Số điện thoại ít nhất 10 ký tự!"),
    matKhau: yup.string().required("* Mật khẩu là bắt buộc!"),
    maLoaiNguoiDung: yup.string().required("* Mã loại người dùng là bắt buộc!"),
});

export default function ModalAddUser({ modal, toggle, userUpdate }) {


    const dispatch = useDispatch()

    const { handleSubmit, formState: { errors }, register, control } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (e) => {
        e.preventDefault()
        let user = {
            taiKhoan: null,
            matKhau: null,
            email: null,
            soDt: null,
            maNhom: null,
            hoTen: null
        }

        let maLoaiNguoiDung = ""
        if (document.querySelector("#user-form input#KhachHang").checked) {
            maLoaiNguoiDung = document.querySelector("#user-form input#KhachHang").value
        }
        if (document.querySelector("#user-form input#QuanTri").checked) {
            maLoaiNguoiDung = document.querySelector("#user-form input#QuanTri").value
        }
        document.querySelectorAll("#user-form input").forEach(input => {
            if (input.name !== "maLoaiNguoiDung") {
                user = { ...user, [input.name]: input.value, maNhom: "GP15", maLoaiNguoiDung: maLoaiNguoiDung }
            }
        })

        if (userUpdate) {
            dispatch(updateUser(user))
            toggle()
            return
        }
        dispatch(addUser(user))
        toggle()
    }


    const renderLoaiNguoiDung = () => {
        if (userUpdate) {
            return (
                <Fragment>
                    <input name="maLoaiNguoiDung" className="mr-2" type="radio" id="KhachHang" value="KhachHang" defaultChecked={userUpdate && userUpdate.maLoaiNguoiDung === "KhachHang" ? true : false} />
                    <label className="mr-5 mb-0" htmlFor="html">Khách hàng</label><br />
                    <input name="maLoaiNguoiDung" className="mr-2" type="radio" id="QuanTri" value="QuanTri" defaultChecked={userUpdate && userUpdate.maLoaiNguoiDung === "QuanTri" ? true : false} />
                    <label className="mb-0" htmlFor="css">Quản trị</label><br />
                </Fragment>
            )
        }

        return (
            <Fragment>
                <input className="mr-2" type="radio" id="KhachHang" name="maLoaiNguoiDung" value="KhachHang" defaultChecked />
                <label className="mr-5 mb-0" htmlFor="html">Khách hàng</label><br />
                <input className="mr-2" type="radio" id="QuanTri" name="maLoaiNguoiDung" value="QuanTri" />
                <label className="mb-0" htmlFor="css">Quản trị</label><br />
            </Fragment>
        )
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}> {userUpdate ? "Cập nhật người dùng" : "Thêm người dùng"}</ModalHeader>
            <ModalBody>
                <Form id="user-form" onSubmit={onSubmit}>
                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-user"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="taiKhoan"
                            control={control}
                            render={({ field }) => <Input placeholder="Tài khoản" defaultValue={userUpdate ? userUpdate.taiKhoan : ""} {...field} />}
                        /> */}
                        <Input placeholder="Tài khoản" name="taiKhoan" defaultValue={userUpdate ? userUpdate.taiKhoan : ""} readOnly={userUpdate ? true : false}/>
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.taiKhoan?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-signature"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="hoTen"
                            control={control}
                            render={({ field }) => <Input placeholder="Họ tên" defaultValue={userUpdate ? userUpdate.hoTen : ""}  {...field} />}
                        /> */}
                        <Input placeholder="Họ tên" name="hoTen" defaultValue={userUpdate ? userUpdate.hoTen : ""} />

                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.hoTen?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <Input type="email" placeholder="Email" defaultValue={userUpdate ? userUpdate.email : ""}  {...field} />}
                        /> */}
                        <Input type="email" name="email" placeholder="Email" defaultValue={userUpdate ? userUpdate.email : ""} readOnly={userUpdate ? true : false}/>
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.email?.message}</p>


                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-phone-alt"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="soDt"
                            control={control}
                            render={({ field }) => <Input type="tel" placeholder="Số điện thoại" defaultValue={userUpdate ? userUpdate.soDt : ""}  {...field} />}
                        /> */}
                        <Input type="tel" name="soDt" placeholder="Số điện thoại" defaultValue={userUpdate ? userUpdate.soDt : ""} />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.soDt?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-key"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="matKhau"
                            control={control}
                            render={({ field }) => <Input placeholder="Mật khẩu" defaultValue={userUpdate ? userUpdate.matKhau : ""}  {...field} />}
                        /> */}
                        <Input placeholder="Mật khẩu" name="matKhau" defaultValue={userUpdate ? userUpdate.matKhau : ""} />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.matKhau?.message}</p>


                    <InputGroup className="mt-3 align-items-center">
                        <InputGroupAddon addonType="prepend">
                            <Label className="mr-5 mb-0">Loại người dùng</Label>
                        </InputGroupAddon>
                        {renderLoaiNguoiDung()}
                    </InputGroup>


                    <InputGroup className="mt-4">
                        <Button className="mb-3 w-100" color={userUpdate ? "warning" : "success"}>{userUpdate ? "Cập nhật" : "Thêm"}</Button>
                    </InputGroup>
                </Form>

                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="">Tai Khoan</label>
                        <input type="text" placeholder="taikhoan" {...register("taiKhoan", require)} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button>Them</button>
                    </div>
                </form> */}
            </ModalBody>
        </Modal>
    )
}
