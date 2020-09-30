import React from "react";

import { Button, Modal,} from 'react-bootstrap';

function ConfirmDelete({
  isShowModal,
  handleHideModal,
  handelDeleteTask
}) 
  {
   
  
 
  return (
    <div className=" confirmDelete  ">
      <Modal show={!!isShowModal} onHide={handleHideModal} animation={false}>
     <Modal.Header closeButton>
       <Modal.Title>Xác nhận xoá</Modal.Title>
     </Modal.Header>
     
     Bạn muốn xoá không
      <Modal.Body>
           
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={() =>handleHideModal()}>
         Đóng
       </Button>
       <Button 
        type="submit"
        variant="primary"
        onClick={() =>handelDeleteTask(isShowModal.index)}
       >
         Xoá
       </Button>
     </Modal.Footer>
   
     
     
   </Modal>
    </div>
  );
}

export default ConfirmDelete;
