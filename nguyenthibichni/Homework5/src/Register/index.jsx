import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css'

function Register() {
    return (
        <div>
        <h3 className="mb-3 mt-1 text-center text-primary">REGISTER FROM</h3>
        <div className="main">
        <Formik
        initialValues={{
            firstName:'',
            lastName:'',
            phone: '',
            email: '',
            birthDate:'',
            studentYear:'',
            address: '',
            password: '',
            rePassword:'',
            sex:'',
            accept:''
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
                .required('Please input First Name!!!')
                .max(8, 'Must be 8 characters or less'),
            lastName: Yup.string()
                .required('Please input Last Name!!!')
                .max(8, 'Must be 8 characters or less'),
            phone: Yup.string()
                .required('Please input Number Phone'),
                //.matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'The Number Phone is invalid'),
            email: Yup.string()
              .required('Please input Email')
              .email('Please input valid Email format'),
            birthDate: Yup.string()
                .required('Please input BirthDate'),
            studentYear:Yup.string()
                .required('Please choose Student Year'),
            address: Yup.string()
                .max(30, 'Must be 30 characters or more')
                .required('Please input Address'),
            password: Yup.string()
              .min(8, 'Must be 8 characters or more')
              .required('Please input Password'),
            rePassword: Yup.string()
              .min(8, 'Must be 8 characters or more')
              .required('Please input Password'),
            sex: Yup.string()
                .required('Please choose Sex'),
            accept:Yup.string()
            .required('Please!!!'),
          })
          }
          onSubmit={(values) => console.log('Values', values)
          }
        >
            <Form>
            <div className="row">
                <div className="col">
                    <label>First Name</label>
                     <Field type="text" name="firstName" className="form-control" placeholder="First name"/>
                     <div className="text-danger"><ErrorMessage name="firstName" /></div>
                </div>
                <div className="col">
                    <label>Last Name</label>
                    <Field type="text" name="lastName" className="form-control" placeholder="Last name"/>
                    <div className="text-danger"><ErrorMessage name="lastName" /></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Phone Number</label>
                     <Field type="number" name="phone" className="form-control" placeholder="Phone Number"/>
                     <div className="text-danger"><ErrorMessage name="phone" /></div>
                </div>
                <div className="col">
                    <label>Email</label>
                    <Field type="email" name="email" className="form-control"/>
                    <div className="text-danger"><ErrorMessage name="email"/></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Birth Date</label>
                     <Field name="birthDate" type="date" className="form-control"/>
                     <div className="text-danger"><ErrorMessage name="birthDate"/></div>
                </div>
                <div className="col">
                <label htmlFor="inputState">Student Year</label>
                    <Field as="select"  class="form-control" name="studentYear">
                         <option selected value="">Student Year: </option>
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                    </Field>
                    <div className="text-danger"><ErrorMessage name="studentYear"/></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Address</label>
                     <Field name="address" type="text" className="form-control" placeholder="123 Nguyen Van Linh"/>
                     <div className="text-danger"><ErrorMessage name="address"/></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Password</label>
                     <Field type="password" name="password" className="form-control" placeholder="Password"/>
                     <div className="text-danger"><ErrorMessage  name="password"/></div>
                </div>
                <div className="col">
                    <label>Confirm Password</label>
                    <Field type="password" name="rePassword" className="form-control" placeholder="Confirm Password"/>
                    <div className="text-danger"><ErrorMessage  name="rePassword"/></div>
                </div>
            </div>
            <div className="row mt-2">
            <div className="col-md-3">
                <div className = "ml-5">
                <Field className="form-check-input" type="radio" name="sex" id="Radios1" value="male" checked/>
                <label className="form-check-label" htmlFor="Radios1">Male</label>
                </div>
                </div>
                <div className="col-md-4">
                <Field className="form-check-input" type="radio" name="sex" id="Radios2" value="female"/>
                <label className="form-check-label" htmlFor="Radios2">
                Female
                </label>
                </div>    
                <div className="text-danger"><ErrorMessage  name="sex"/></div>
            </div>
            <div className="row ml-2">
                <div className="form-check">
                <Field className="form-check-input" name="accept" type="checkbox" id="Check"/>
                <label className="form-check-label" htmlFor="Check">
                 I accept
                </label>
                <div className="text-danger"><ErrorMessage  name="accept"/></div>
                </div>
            </div>
            <div className="row">
                <div className="col mr-auto d-flex justify-content-center">
                    <button type="submit" name="register" class="btn btn-primary mr-3">Register</button>
                    <button type="cancel" name="cancel" class="btn btn-danger">Cancel</button>
                </div>
            </div>
            </Form>
        </Formik>
        </div>
        
        </div>
    )
}
export default Register;