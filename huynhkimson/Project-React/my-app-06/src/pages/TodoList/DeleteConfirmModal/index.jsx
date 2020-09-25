import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import './style.css';

function DeleteConfirmModal(props) {
    const { isShowModal, handleHideModal, handleDeleteTodoList, modalData } = props;

    return (
        <>
            <Modal show={!!isShowModal} onHide={handleHideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group ">
                        Bạn chắc chắn có muốn xóa không
                            </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => { handleHideModal() }}>
                        Close
                            </Button>
                    <Button type="submit" variant="primary" onClick={() => { handleDeleteTodoList(modalData.itemIndex) }} >
                        Ok
                            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteConfirmModal;