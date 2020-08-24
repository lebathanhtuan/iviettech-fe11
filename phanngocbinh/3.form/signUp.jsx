import React from 'react';
import './styte.css';
import Group from './groupList.jsx'
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function SignUp(props){
   const {checkValidate, errors}= props;
   return (
    <Formik
      initialValues={{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        address:'',
        phoneNumber:'',
        radioGroup:'',
        checkbox:[],
        multiCheckbox: [],
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
           .max(15, 'Nhập 15 kí tự trở xuống')
           .required('Bạn chưa nhập First Name'),
        lastName: Yup.string()
           .max(20, 'Nhập 15 kí tự trở xuống')
           .required('Bạn chưa nhập Last Name'),
        email: Yup.string()
          .required('Bạn chưa nhập email')
          .email('Email có định dạng chưa đúng'),
        password: Yup.string()
          .required('Bạn chưa nhập password')
          .min(8, 'Mật khẩu phải có độ dài tối thiểu là 8 kí tự'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Bạn chưa nhập đúng password ở trên")
          .required("Bạn chưa nhập lại password"),
        address: Yup.string()
          .required('Bạn chưa nhập địa chỉ')
          .max(30, 'Địa chỉ không được dài quá 30 kí tự'),
        phoneNumber: Yup.string()
          .required('Bạn chưa nhập số điện thoại')
          .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/ ,'Số điện thoại không đúng định dạng'),
        radioGroup: Yup.string()
          .required("Chọn giới tính"),
        multiCheckbox: Yup.array()
          .min(2,'Bạn cần đồng ý cả 2 checkbox')
      })}
      onSubmit={(values)=> console.log(values)}
      >
      <Form className="col-md-6 mx-auto">
          <h4 className="text-success" style={{fontWeight:'900', color:'#221E1D', marginLeft:'210px'}}>Sign Up</h4>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <Field  type="text"
                    name='firstName'
                    className={`form-control ${errors.email.length > 0 ? 'border-danger':''}`}
                    />
            <div className="text-danger">
              <ErrorMessage name="firstName" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <Field  type="text"
                    name='lastName'
                    className={`form-control ${errors.email.length > 0 ? 'border-danger':''}`}
                    />
            <div className="text-danger">
              <ErrorMessage name="lastName" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputEmail4">Email</label>
            <Field  type="email"
                    name='email'
                    className={`form-control ${errors.email.length > 0 ? 'border-danger':''}`}
                    id="inputEmail4" />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div> 
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword4">Password</label>
            <Field  type="password"
                    name='password'
                    className={`form-control ${errors.password.length > 0 ? 'border-danger':''}`}
                    id="inputPassword4" />
            <div className="text-danger">
              <ErrorMessage name="password" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword4">Confirm password</label>
            <Field  type="password"
                    name='confirmPassword'
                    className={`form-control ${errors.password.length > 0 ? 'border-danger':''}`}
                    id="inputPassword4" />
            <div className="text-danger">
              <ErrorMessage name="confirmPassword" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputAddress2">Address</label>
            <Field  type="text"
                    name='address'
                    className="form-control"
                    id="inputAddress2"
                    placeholder="address" />
            <div className="text-danger">
              <ErrorMessage name="address" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputAddress">Phone number</label>
            <Field  type="text"
                    name='phoneNumber'
                    className="form-control"
                    id="inputAddress"
                    placeholder="0123456789" />
            <div className="text-danger">
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>

          <div className="form-group">
              <label htmlFor="type">School's Name</label>
              <Field  id="inputState"
                      name='typeSelect'
                      as="select"
                      className="form-control">
                <option selected>Select the school name</option>
                <option value='1'>Trường Đại Học Bách Khoa Đà nẵng</option>
                <option value='2'>Trường Đại Học Sư Phạm Đà Nẵng</option>
                <option value='3'>Trường Đại Học Ngoại Ngữ Đà Nẵng</option>
              </Field>
          </div>

          <div className="row mb-2" style={{marginLeft:'1px'}}>
            <div className="form-check mr-2">
                <Field className="form-check-input" value='1' type="radio" name="radioGroup"/>
                <label className="form-check-label">
                  Nam
                </label>
            </div>
            <div className="form-check mr-2">
                <Field className="form-check-input" value='2' type="radio" name="radioGroup" />
                <label className="form-check-label">
                  Nữ
                </label>
            </div>
            <div className="text-danger m-0 p-0">
              <ErrorMessage name="radioGroup" />
            </div>
          </div>
          
          <div className="form-check mb-2">
            <Field className="form-check-input"
              type="checkbox"
              name="multiCheckbox"
              value='1' />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Please agree to our policy
            </label>
          </div>

          <div className="form-check">
            <Field className="form-check-input"
              type="checkbox"
              name="multiCheckbox"
              value='2' />
            <label className="form-check-label" htmlFor="exampleRadios2">
              I'd like to receive the newsletter
            </label>
          </div>
          <div className="text-danger">
            <ErrorMessage name="multiCheckbox" />
          </div>

          <button type="submit"
            className="btn btn-primary form-control mt-2"
            >Sign Up
          </button>
      </Form>
      </Formik>
    );
}
export default SignUp;
