import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../actions/admin';
import ModalAddUser from './ModalAddUser';
import ModalDeleteUser from './ModalDeleteUser';

export default function QuanLyNguoiDung() {
    const { users } = useSelector(state => state.userReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [])


    const [modal, setModal] = useState(false);


    const [userUpdate, setUserUpdate] = useState(null);


    const [modalDelete, setModalDelete] = useState(false);

    const [taiKhoanXoa, setTaiKhoanXoa] = useState(null);

    
    const toggle = () => setModal(!modal);
    
    const toggleDelete = () => setModalDelete(!modalDelete);

    const renderPassword = (matKhau) => {

        if (matKhau) {
            const MKlength = matKhau.length
            const matKhauHide = []

            for (let i = 0; i < MKlength; i++) {
                matKhauHide.push(<span key={Math.random()}>*</span>)
            }
            return matKhauHide.map(mk => (mk))
        }
    }

    const handleDelete = (taiKhoan) => {
        toggleDelete()
        setTaiKhoanXoa(taiKhoan)
        console.log(taiKhoan)
    }

    const renderTable = () => {
        const usersCut = users.slice(-127)
        return users.map((user, index) => {
            return (
                <tr className={(index + 1) % 2 === 0 ? "" : "le"} key={index}>
                    <td className="tb-stt"><p className="m-0">{index + 1}</p></td>
                    <td className="tb-ava">
                        <img src={`https://i.pravatar.cc/50?${Math.random()}`} alt={user.hoTen} loading="lazy" />
                    </td>
                    <td className="tb-hoTen"><p>{user.hoTen.toLowerCase()}</p></td>
                    <td className="tb-taiKhoan" style={{textTransform: "none"}}><p>{user.taiKhoan}</p></td>
                    <td className="tb-matKhau"><p>{renderPassword(user.matKhau)}</p></td>
                    <td className="tb-email"><p>{user.email}</p></td>
                    <td className="tb-sdt">{user.soDt}</td>
                    <td className="tb-khachHang"><p className={user.maLoaiNguoiDung === "KhachHang" ? "circle  mb-0  mt-2 circle-khachHang" : "circle  mb-0  mt-2"}></p></td>
                    <td className="tb-quanTri"><p className={user.maLoaiNguoiDung === "QuanTri" ? "circle  mb-0  mt-2 circle-quanTri" : "circle  mb-0  mt-2"}></p></td>
                    <td className="tb-setting">
                        <button className="mr-2 mt-2 xoa" onClick={() => handleDelete(user.taiKhoan)}>Xoá</button>
                        <button className="sua mt-2" onClick={() =>showModal(user)}>Sửa</button>
                    </td>
                </tr>
            )
        })
    }

    const showModal = (user) => {
        if(user) {
            dispatch({
                type: "HAS_ACTION",
                value: false
            })
            setUserUpdate(user)
            toggle()
            return
        }
        setUserUpdate(null)
        toggle()
    }

    return (
        <div>
            <div className="mainContent">
                <div className="d-flex justify-content-between mb-3 align-items-center res">
                    <h2>Quản lý người dùng</h2>
                    <button className="addBTn" onClick={() =>showModal(null)}><i className="fas fa-plus mr-2"></i>Thêm người dùng</button>
                </div>
                <div className="quanLyUserContent">
                    <table>
                        <thead>
                            <tr>
                                <th className="tb-stt">#</th>
                                <th className="tb-ava">Avatar</th>
                                <th className="tb-hoTen">Họ tên</th>
                                <th className="tb-taiKhoan">Tài khoản</th>
                                <th className="tb-matKhau">Mật khẩu</th>
                                <th className="tb-email">Email</th>
                                <th className="tb-sdt">Số điện thoại</th>
                                <th className="tb-khachHang">Khách hàng</th>
                                <th className="tb-quanTri">Quản trị</th>
                                <th className="tb-setting">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTable()}

                        </tbody>
                    </table>
                </div>
            </div>

            <ModalAddUser  toggle={toggle} modal={modal} userUpdate={userUpdate}/>
            <ModalDeleteUser modalDelete={modalDelete} toggleDelete={toggleDelete} taiKhoanXoa={taiKhoanXoa}/>
        </div>

    )
}
