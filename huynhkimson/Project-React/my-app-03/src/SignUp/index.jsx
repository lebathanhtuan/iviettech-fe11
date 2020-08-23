import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import './style.css'
function SignUp(props) {
    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                verifypassword: '',
                address: '',
                phoneNumber: '',
                gender: '',
                checkbox: [],
            }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .matches(/([A-Za-z])/, 'Tên của bạn không đúng định dạng.')
                    .max(20, 'Họ không quá 20 kí tự')
                    .required('Bạn chưa nhập Tên'),
                lastname: Yup.string()
                .matches(/([A-Za-z])/, 'Họ của bạn không đúng định dạng.')
                    .max(10, 'Họ không quá 10 kí tự')
                    .required('Bạn chưa nhập Họ'),
                email: Yup.string()
                    .email('Địa chỉ email không đúng định dạng')
                    .required('Bạn chưa nhập Email'),
                password: Yup.string()
                    .min(8, 'Password phải có độ dài tối thiểu là 8 kí tự')
                    .required('Bạn chưa nhập password'),
                verifypassword: Yup.string()
                    .min(8, 'Password phải có độ dài tối thiểu là 8 kí tự')
                    .required('Bạn chưa nhập Verify password'),
                address: Yup.string()
                    .max(30, 'Địa chỉ không quá 30 kí tự')
                    .required('Bạn chưa nhập address'),
                phoneNumber: Yup.string()
                    .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Số điện thoại không đúng định dạng')
                    .required('Bạn chưa nhập Phone number'),
                gender: Yup.string()
                    .required('Pls, chọn giới tính.'),
            })}
            onSubmit={(values) => console.log(values)}
        >
            <Form>
                <div className="form -row">
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="firstname">First name </label>
                            <Field
                                name="firstname"
                                type="text"
                                className="form-control"
                                placeholder="First name" />
                            <div className="text-danger">
                                <ErrorMessage name="firstname" />
                            </div>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="lastname">Last name </label>
                            <Field
                                name="lastname"
                                type="text"
                                className="form-control"
                                placeholder="Last name" />
                            <div className="text-danger">
                                <ErrorMessage name="lastname" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email </label>
                            <Field
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="ABC@gmail.com" />
                            <div className="text-danger">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                            <Field
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Password" />
                            <div className="text-danger">
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="verifypassword">Verify password</label>
                            <Field
                                name="verifypassword"
                                type="password"
                                className="form-control"
                                placeholder="Verify password" />
                            <div className="text-danger">
                                <ErrorMessage name="verifypassword" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field
                                name="phoneNumber"
                                type="text"
                                className="form-control"
                                placeholder="Phone number" />
                            <div className="text-danger">
                                <ErrorMessage name="phoneNumber" />
                            </div>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="gender">Gender</label>
                            <Field
                                as="select"
                                name="gender"
                                className="form-control">
                                <option value="">Choose</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Field>
                            <div className="text-danger">
                                <ErrorMessage name="gender" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="address">Address</label>
                            <Field
                                name="address"
                                type="text"
                                className="form-control"
                                placeholder="Address" />
                            <div className="text-danger">
                                <ErrorMessage name="address" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <div className="form-check">
                                <Field
                                    name="checkbox"
                                    type="checkbox"
                                    className="form-check-input"
                                    value="approve" />
                                <label className="form-check-label" htmlFor="approve">
                                    Remember me
                        </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Sign Up
                    </button>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default SignUp;
