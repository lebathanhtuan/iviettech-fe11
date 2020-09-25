import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './style.css';

function ModifyListModal(props) {
    const { isShowModal,
        handleHideModal,
        handleSubmitForm,
        modalData,
    } = props;
    return (
        <>
            <Modal show={!!isShowModal} onHide={handleHideModal}>
                <Formik
                    initialValues={modalData.type === 'create'
                        ? {
                            title: '',
                            description: '',
                        }
                        : {
                            title: modalData.title,
                            description: modalData.description,
                        }
                    }
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required('Mời bạn nhập nội dung công việc.')
                            .max(40, 'Nội dung công việc không được quá 40 kí tự.'),
                        description: Yup.string()
                            .required('Mời bạn nhập mô tả công việc.')
                            .max(80, 'Nội dung công việc không được quá 80 kí tự.')
                    })}
                    onSubmit={(values) => handleSubmitForm(values, modalData.type, modalData.id)}>
                    <Form>
                    
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {`${modalData.type === 'create' ? 'Thêm' : 'Sửa'} công việc`}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="form-group ">
                                <label htmlFor="title">Tiêu đề</label>
                                <Field
                                    name="title"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    {...field}
                                                    type="text"
                                                    className={`form-control ${meta.error ? 'border-danger' : ''}`}
                                                    placeholder="Nội dung công việc" />
                                                {(meta.error) && <div className="text-danger" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="title">Mô tả</label>
                                <Field
                                    name="description"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <textarea
                                                    {...field}
                                                    type="text"
                                                    className={`form-control ${meta.error ? 'border-danger' : ''}`}
                                                    placeholder="Mô tả công việc" />
                                                {(meta.error) && <div className="text-danger" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => { handleHideModal() }}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Formik>
            </Modal>
        </>
    );
}

export default ModifyListModal;