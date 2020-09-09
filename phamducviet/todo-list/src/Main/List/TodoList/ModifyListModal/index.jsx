import React from "react";
import "./style.css";
import { Button, Modal, Form as FormBootstrap } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function ModifyListModal({
  isShowModal,
  handleHideModal,
  handelSubmitForm,
  modifyModalData,
}) {
  console.log("Log: : ModifyListModal -> modifyModalData", modifyModalData);

  return (
    <div className=" todoListItem  ">
      <Modal show={isShowModal} onHide={handleHideModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {`${modifyModalData.type === "create" ? "Thêm" : "Sửa"} công việc`}
          </Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            title:
              modifyModalData.type === "create" ? "" : modifyModalData.title,
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(50, "Nhập quá 50 kí tự")
              .required("Không được bỏ trống"),
          })}
          enableReinitialize // để có thể sửa chữa dữ liệu
          onSubmit={(value) =>
            handelSubmitForm(value, modifyModalData.type, modifyModalData.index)
          }
        >
          <Form>
            <Modal.Body>
              <FormBootstrap>
                <label htmlFor="Email">Nhập Zô</label>
                <Field type="text" className={`form-control `} name="title" />
              </FormBootstrap>
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleHideModal()}>
                Đóng
              </Button>
              <Button type="submit" variant="primary">
                Lưu
              </Button>
            </Modal.Footer>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default ModifyListModal;
