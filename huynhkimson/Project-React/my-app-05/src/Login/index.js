import React, { useEffect, useRef } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import history from '../history'
import './style.css'
function Login() {
    const inputElement = useRef(null);

    useEffect(() => {
        inputElement.current.focus();
    }, []);

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                checkbox: [],
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Địa chỉ email không đúng định dạng')
                    .required('Mời bạn nhập Email'),
                password: Yup.string()
                    .min(8, 'Password phải có độ dài tối thiểu là 8 kí tự')
                    .required('Mời bạn nhập password'),
                checkbox: Yup.string()
                    .required('Mời bạn chấp nhận các quy tắc và điều kiện'),
            })}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: '' });
            }}>
            <Form>
                <div className="form-login">
                    <div className="title-form-login">
                        <h3>LOGIN</h3>
                    </div>
                    <div className="content-form-login">
                        <div className="row">
                            <div className="form-group ">
                                <Field
                                    name="email"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    ref={inputElement}
                                                    {...field}
                                                    type="text"
                                                    className={`form-control inpEmail-login ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                    placeholder="Email" />
                                                {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <Field
                                    name="password"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    {...field}
                                                    type="password"
                                                    className={`form-control inpPass-login ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                    placeholder="Password" />
                                                {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <div className="form-check">
                                    <Field
                                        name="checkbox"
                                        type="checkbox"
                                        className="form-check-input"
                                        value="approve" />
                                    <label className="form-check-label mr-2" htmlFor="approve">
                                        Remember me
                                </label>
                                </div>
                                <div className="text-danger">
                                    <ErrorMessage name="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary btnSubmit "
                                >SUBMIT
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <button
                                    className="btn btn-primary btnRegister "
                                    onClick={() => history.push('/signup')}
                                >REGISTER
                                </button>
                            </div>
                        </div>
                        <div className="back">
                            <a href="https://www.google.com.vn">
                                <u>Back</u>
                            </a>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default Login;
