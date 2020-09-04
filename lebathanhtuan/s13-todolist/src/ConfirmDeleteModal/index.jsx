import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ConfirmDeleteModal({
  isShowModal,
  handleHideModal,
  handleDeleteTask,
  modalData,
}) {
  return (
    <Modal show={isShowModal} onHide={handleHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận xóa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Bạn có chắc muốn xóa không
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleHideModal()}>
          Hủy
        </Button>
        <Button
          type="submit"
          variant="danger"
          onClick={() => handleDeleteTask(modalData.index)}
        >
          Xóa
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;
