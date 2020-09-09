import React from 'react';
import {
  Button,
  Modal,
  Form as FormBootstrap,
} from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ModifyListModal({
  isShowModal,
  handleHideModal,
  handleSubmitForm,
  modalData,
}) {
  return (
    <Modal show={isShowModal} onHide={handleHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {`${modalData.type === 'create' ? 'Thêm' : 'Sửa'} công việc`}
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ title: modalData.type === 'create' ? '' : modalData.title }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Nội dung công việc không được để trống')
            .max(50, 'Nội dung công việc không được quá 50 kí tự'),
          description: Yup.string()
            .required('Mô tả công việc không được để trống')
            .max(50, 'Mô tả công việc không được quá 200 kí tự'),
        })}
        onSubmit={(values) => handleSubmitForm(values, modalData.type, modalData.index)}
      >
        <Form>
          <Modal.Body>
            <FormBootstrap.Group>
              <label htmlFor="title">Tiêu đề</label>
              <Field
                type="text"
                className="form-control"
                name="title"
                placeholder="Nội dung công việc"
              />
              <div className="text-danger">
                <ErrorMessage name="title" />
              </div>
              <label htmlFor="title">Mô tả</label>
              <Field
                type="text"
                as="textarea"
                className="form-control"
                name="description"
                placeholder="Mô tả công việc"
              />
              <div className="text-danger">
                <ErrorMessage name="description" />
              </div>
            </FormBootstrap.Group>
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
  );
}

export default ModifyListModal;
