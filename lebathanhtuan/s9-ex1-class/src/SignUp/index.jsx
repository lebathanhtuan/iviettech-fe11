import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './styles.css';

function SignUp(props) {
  const renderCustomInput = (props) => {
    const { field, meta } = props;
    return (
      <>
        <input
          { ...field }
          type="email"
          className={`form-control ${(meta.touched && meta.error) && 'border-danger'}`}
        />
        {(meta.touched && meta.error) && <div className="text-danger">{meta.error}</div>}
      </>
    )
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phoneNumber: '',
        type: '',
        radio: '',
        checkbox: [],
        multiCheckbox: [],
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required('Bạn chưa nhập email')
          .email('Email có định dạng chưa đúng'),
        password: Yup.string()
          .required('Bạn chưa nhập password')
          .min(8, 'Mật khẩu phải có độ dài tối thiểu là 8 kí tự'),
        confirmPassword: Yup.string()
          .required('Bạn chưa nhập xác thực password')
          .oneOf([Yup.ref('password')], 'Mật khẩu xác thực không trùng'),
        address: Yup.string()
          .required('Bạn chưa nhập địa chỉ')
          .max(30, 'Địa chỉ không được dài quá 30 kí tự'),
        phoneNumber: Yup.string()
          .required('Bạn chưa nhập số điện thoại')
          .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Số điện thoại không đúng định dạng'),
        multiCheckbox: Yup.array()
          .min(2, 'Bạn cần đồng ý cả 2 cái checkbox'),
      })}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              render={(props) => renderCustomInput({
                ...props,
                field: {
                  ...props.field,
                  placeholder: 'Email của bạn'
                },
              })}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              // className={`form-control ${errors.password.length > 0 ? 'border-danger' : ''}`}
              className="form-control"
              name="password"
            />
            <div className="text-danger">
              <ErrorMessage name="password" />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Confirm Password</label>
            <Field
              type="password"
              className="form-control"
              name="confirmPassword"
            />
            <div className="text-danger">
              <ErrorMessage name="confirmPassword" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <Field
            name="address"
            render={(props) => renderCustomInput({
              ...props,
              field: {
                ...props.field,
                placeholder: 'Địa chỉ của bạn'
              },
            })}
          />
          <div className="text-danger">
            <ErrorMessage name="address" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <Field
            className="form-control"
            name="phoneNumber"
            render={(props) => renderCustomInput({
              ...props,
              field: {
                ...props.field,
                placeholder: 'Số điện thoại của bạn'
              },
            })}
          />
          <div className="text-danger">
            <ErrorMessage name="phoneNumber" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <Field
            className="form-control"
            name="type"
            as="select"
          >
            <option value="">Select type</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Field>
        </div>
        <div className="form-group">
          <Field
            type="radio"
            className="form-check-input"
            name="radio"
            value="1"
          />
          <label htmlFor="phoneNumber">Radio 1</label>
          <Field
            type="radio"
            className="form-check-input"
            name="radio"
            value="2"
          />
          <label htmlFor="phoneNumber">Radio 2</label>
        </div>
        <div className="form-group">
          <Field
            type="checkbox"
            className="form-check-input"
            name="checkbox"
            value="OK"
          />
          <label htmlFor="phoneNumber">Checkbox</label>
        </div>
        <div className="form-group">
          <Field
            type="checkbox"
            className="form-check-input"
            name="multiCheckbox"
            value="1"
          />
          <label htmlFor="phoneNumber">Checkbox 1</label>
          <Field
            type="checkbox"
            className="form-check-input"
            name="multiCheckbox"
            value="2"
          />
          <label htmlFor="phoneNumber">Checkbox 2</label>
          <div className="text-danger">
            <ErrorMessage name="multiCheckbox" />
          </div>
        </div>
        {/* <div className="form-check">
          <input className="form-check-input" type="checkbox" name="approve" value="ABC1" onChange={(e) => handleChangeValue(e)} />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Đồng ý DK 1
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="approve" value="ABC2" onChange={(e) => handleChangeValue(e)} />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Đồng ý DK 2
          </label>
        </div> */}
        <button
          type="submit"
          className="btn btn-primary"
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
}

export default SignUp;
