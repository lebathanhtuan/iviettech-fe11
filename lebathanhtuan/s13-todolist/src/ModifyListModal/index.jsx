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
}) {
  return (
    <Modal show={isShowModal} onHide={handleHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm công việc</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ title: '' }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required('Nội dung công việc không được để trống')
            .max(50, 'Nội dung công việc không được quá 50 kí tự'),
        })}
        onSubmit={(values) => handleSubmitForm(values)}
      >
        <Form>
          <Modal.Body>
            <FormBootstrap.Group>
              <label htmlFor="title">Nội dung công việc</label>
              <Field
                type="text"
                className="form-control"
                name="title"
                placeholder="Nội dung công việc"
              />
              <div className="text-danger">
                <ErrorMessage name="title" />
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
