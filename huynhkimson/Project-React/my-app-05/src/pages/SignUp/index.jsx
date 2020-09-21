import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import history from '../../util/history'
import './style.css'
function SignUp() {
    // const inputElement = useRef(null);

    // useEffect(() => {
    //     inputElement.current.focus();
    // }, []);

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
                    .matches(/([A-Za-z])/, 'Tên của bạn không đúng định dạng')
                    .max(20, 'Họ không quá 20 kí tự')
                    .required('Mời bạn nhập Tên'),
                lastname: Yup.string()
                    .matches(/([A-Za-z])/, 'Họ của bạn không đúng định dạng')
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
                    .required('Mời bạn nhập Confirm Password')
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
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: '' });
            }}>
            <Form>
                <div className="form-register">
                    <div className="title-form-signup">
                        <h3>REGISTER</h3>
                    </div>
                    <div className="content-form-signup">
                        <div className="row ">
                            <div className="form-group ">
                                <Field
                                    name="firstname"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    // ref={inputElement}
                                                    {...field}
                                                    type="text"
                                                    className={`form-control inpSignUp-firstname ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                    placeholder="First Name" />
                                                {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                            <div className="form-group">
                                <Field
                                    name="lastname"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    {...field}
                                                    type="text"
                                                    className={`form-control inpSignUp-lastname ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                    placeholder="Last Name" />
                                                {(meta.touched && meta.error) && <div className="text-danger lastname" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group ">
                                <Field
                                    name="email"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    {...field}
                                                    type="text"
                                                    className={`form-control inpSignUp ${meta.touched && meta.error ? 'border-danger' : ''}`}
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
                                                    className={`form-control inpSignUp ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                    placeholder="Password" />
                                                {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <Field
                                    name="confirmpassword"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    {...field}
                                                    type="password"
                                                    className={`form-control inpSignUp ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                    placeholder="Confirm Password" />
                                                {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <Field
                                    name="phoneNumber"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    {...field}
                                                    type="text"
                                                    className={`form-control inpSignUp-phone  ${meta.touched && meta.error ? 'border-danger' : ''}`}
                                                    placeholder="Phone Number" />
                                                {(meta.touched && meta.error) && <div className="text-danger" >{meta.error}</div>}
                                            </>
                                        )
                                    }} />
                            </div>
                            <div className="form-group">
                                <Field
                                    name="gender"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <select
                                                    {...field}
                                                    as="select"
                                                    className={`form-control inpSignUp-gender  ${meta.touched && meta.error ? 'border-danger' : ''}`}
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
                                <Field
                                    name="address"
                                    render={(props) => {
                                        const { field, meta } = props;
                                        return (
                                            <>
                                                <input
                                                    {...field}
                                                    type="text"
                                                    className={`form-control inpSignUp ${meta.touched && meta.error ? 'border-danger' : ''}`}
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
                                    <a href="https://www.google.com.vn">
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
                                    className="btn btn-primary btnSignUp "
                                >SIGN UP
                            </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary btnLogin "
                                    onClick={() => history.push('/login')}
                                >LOGIN
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default SignUp;
