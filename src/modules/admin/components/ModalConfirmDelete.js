import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalConfirmDelete({modal, toggle, handleDelete, tenPhimCanXoa}) {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Xác nhận</ModalHeader>
            <ModalBody>
                Bạn có chắc chắn muốn xoá phim <span className="text-danger font-weight-bold">{tenPhimCanXoa ? tenPhimCanXoa : "này"}</span> không? <br />
                    Thao tác tiếp theo sẽ <b>không</b> thể hoàn tác.
                </ModalBody>
            <ModalFooter>
                <Button className="xoaBtn" onClick={() => handleDelete()}>Xoá</Button>{' '}
                <Button color="primary" onClick={toggle}>Huỷ</Button>
            </ModalFooter>
        </Modal>
    )
}
