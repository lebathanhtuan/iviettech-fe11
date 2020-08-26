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
                confirmpassword: '',
                address: '',
                phoneNumber: '',
                gender: '',
                checkbox: [],
            }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .matches(/([A-Za-z])/, 'Tên của bạn không đúng định dạng.')
                    .max(20, 'Họ không quá 20 kí tự')
                    .required('Mời bạn nhập Tên'),
                lastname: Yup.string()
                    .matches(/([A-Za-z])/, 'Họ của bạn không đúng định dạng.')
                    .max(10, 'Họ không quá 10 kí tự')
                    .required('Mời bạn nhập Họ'),
                email: Yup.string()
                    .email('Địa chỉ email không đúng định dạng')
                    .required('Mời bạn nhập Email'),
                password: Yup.string()
                    .min(8, 'Password phải có độ dài tối thiểu là 8 kí tự')
                    .required('Mời bạn nhập password'),
                confirmpassword: Yup.string()
                    .min(8, 'Password phải có độ dài tối thiểu là 8 kí tự')
                    .required('Mời bạn nhập Verify Password')
                    .oneOf([Yup.ref('password')], 'Mật khẩu xác thực không trùng'),
                address: Yup.string()
                    .max(30, 'Địa chỉ không quá 30 kí tự')
                    .required('Mời bạn nhập address'),
                phoneNumber: Yup.string()
                    .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Số điện thoại không đúng định dạng')
                    .required('Mời bạn nhập Phone number'),
                gender: Yup.string()
                    .required('Pls, chọn giới tính.'),
                checkbox: Yup.string()
                    .required('Mời bạn chấp nhận các quy tắc và điều kiện'),
            })}
            onSubmit={(values) => console.log(values)}
        >
            <Form>
                <div className="form -row">
                    <h3>Register Form</h3>
                    <div className="row ">
                        <div className="form-group ">
                            {/* <label htmlFor="firstname">First name </label> */}
                            <Field
                                name="firstname"
                                render={(props) => {
                                    const { field, meta } = props;
                                    return (
                                        <>
                                            <input
                                                {...field}
                                                type="text"
                                                className={`form-control firstname ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                placeholder="First Name" />
                                            {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                        </>
                                    )
                                }} />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="lastname">Last name </label> */}
                            <Field
                                name="lastname"
                                render={(props) => {
                                    const { field, meta } = props;
                                    return (
                                        <>
                                            <input
                                                {...field}
                                                type="text"
                                                className={`form-control lastname ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                placeholder="Last Name" />
                                            {(meta.touched && meta.error) && <div className="text-danger lastname" >{meta.error}</div>}
                                        </>
                                    )
                                }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group ">
                            {/* <label htmlFor="email">Email </label> */}
                            <Field
                                name="email"
                                render={(props) => {
                                    const { field, meta } = props;
                                    return (
                                        <>
                                            <input
                                                {...field}
                                                type="text"
                                                className={`form-control ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                placeholder="Email" />
                                            {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                        </>
                                    )
                                }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            {/* <label htmlFor="password">Password</label> */}
                            <Field
                                name="password"
                                render={(props) => {
                                    const { field, meta } = props;
                                    return (
                                        <>
                                            <input
                                                {...field}
                                                type="password"
                                                className={`form-control ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                placeholder="Password" />
                                            {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                        </>
                                    )
                                }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
                            <Field
                                name="confirmpassword"
                                render={(props) => {
                                    const { field, meta } = props;
                                    return (
                                        <>
                                            <input
                                                {...field}
                                                type="password"
                                                className={`form-control ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                placeholder="Confirm Password" />
                                            {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                        </>
                                    )
                                }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            {/* <label htmlFor="phoneNumber">Phone Number</label> */}
                            <Field
                                name="phoneNumber"
                                render={(props) => {
                                    const { field, meta } = props;
                                    return (
                                        <>
                                            <input
                                                {...field}
                                                type="text"
                                                className={`form-control phoneNumber ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                placeholder="Phone Number" />
                                            {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                        </>
                                    )
                                }} />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="gender">Gender</label> */}
                            <Field
                                name="gender"
                                render={(props) => {
                                    const { field, meta } = props;
                                    return (
                                        <>
                                            <select
                                                {...field}
                                                as="select"
                                                className={`form-control gender  ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                            >
                                                <option value="" >Gender</option>
                                                <option value="male" >Male</option>
                                                <option value="female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {(meta.touched && meta.error) && <div className="text-danger gender" >{meta.error}</div>}
                                        </>
                                    )
                                }}>
                            </Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            {/* <label htmlFor="address">Address</label> */}
                            <Field
                                name="address"
                                render={(props) => {
                                    const { field, meta } = props;
                                    return (
                                        <>
                                            <input
                                                {...field}
                                                type="text"
                                                className={`form-control ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                placeholder="Address" />
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
                                    Accept rules and conditions
                                </label>
                                <a href="#">
                                    <u>Click here</u>
                                </a>
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
                                className="btn btn-primary "
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
