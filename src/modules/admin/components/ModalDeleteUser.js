import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteUser } from '../actions/admin';

export default function ModalDeleteUser({ modalDelete, toggleDelete, taiKhoanXoa }) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteUser(taiKhoanXoa))
        toggleDelete()

    }   

    return (
        <Modal isOpen={modalDelete} toggle={toggleDelete}>
            <ModalHeader toggle={toggleDelete}>Xác nhận</ModalHeader>
            <ModalBody>
                Bạn có chắc chắn muốn xoá tài khoản <span className="text-danger font-weight-bold">{taiKhoanXoa ? taiKhoanXoa : "này"}</span> không? <br />
                Thao tác tiếp theo sẽ <b>không</b> thể hoàn tác.
            </ModalBody>
            <ModalFooter>
            <Button className="xoaBtn" onClick={() => handleDelete()}>Xoá</Button>{' '}
                <Button color="primary" onClick={toggleDelete}>Huỷ</Button>
            </ModalFooter>
        </Modal>
    )
}
