import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.css";

function SignUp(props) {
  // const {  checkValidate, error} = props;
  
  // const [formValue, setFormValue] = useState({
  //   Email: "",
  //   Password: "",
  //   approve: []
  // });


  // const handleChangeValue = (e) => {
  //   const { name, value , checked} = e.target;
  //   let newValueCheckbox = "";
  //   if (name==="approve"){
  //     if(checked){
  //       newValueCheckbox = [
  //         ...formValue.approve ,
  //         value,
  //       ]
  //     }
  //     else if(formValue.approve.indexOf(value) !== -1){
  //       const approveArr = formValue.approve;
  //       approveArr.splice(formValue.approve.indexOf(value));
  //       newValueCheckbox = [ ...formValue.approve ]
  //     }
  //   }
  //   else newValueCheckbox = value;
    
  //   setFormValue({
  //     ...formValue,

  //     [name]: value,

  //   });

  // }


  return (
    <Formik
      initialValues={{ 
        Email: "",
        Password: "",
        Address: "",
        Phone: "",
        radio: "",
        
        approve: ""
      }}
      validationSchema={Yup.object({
        Email: Yup.string()
          .email("Email chưa đúng định dạng")
          .required('Bạn chưa nhập email'),
        Password: Yup.string()
          .min(6, 'Độ dài mật khẩu lớn hơn 6 kí tự')
          .required('Bạn chưa nhập mật khẩu'),
        Address: Yup.string()
          .required('Bạn chưa nhập địa chỉ')
          .max("Địa chỉ không được dài quá 30 kí tự"),
        Phone: Yup.string()
          .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/ , "Số điện thoại không đúng định dạng")
          .required('Bạn chưa nhập địa chỉ'),

      })}
      onSubmit={(value) => {
        
        console.log('Log: : SignUp -> value', value);
      }}
    >
      <Form >
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="Email">Email</label>
            <Field
              type="email"
              className= {`form-control `}
              name="Email"
             
            />
            <ErrorMessage name="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Password">Password</label>
            <Field
              type="password"
              className="form-control"
              name="Password"
              
            />
            <ErrorMessage name="Password" />
          </div>

        </div>
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <Field
            type="text"
            className="form-control"
            name="Address"
            placeholder="1234 Main St" 
          />
            <ErrorMessage name="Address" />

        </div>
        <div className="form-group">
          <label htmlFor="Phone">Phone Number</label>
          <Field
            type="text"
            className="form-control"
            name="Phone"
            placeholder="Apartment, studio, or floor"
          />
            <ErrorMessage name="Phone" />

        </div>
        <div  className="form-group">
         
            <Field
              type="radio"
              className="form-check-input"
              name="radio"
              value="1"
            >
            </Field>
            <label htmlFor="Number">Radio1</label>
         
            <Field
              type="radio"
              className="form-check-input"
              name="radio"
              value="2"
            >
            </Field>
            <label htmlFor="Number">Radio2</label>
        </div>
        <div>
          <label htmlFor="Number"></label>
          <Field
            name="Number"
            className="form-group"
           
            as="select"
          >
            <option value="Number"  >Number</option>

            <option value="1"  >1</option>
            <option value="2">2</option>
            <option value="3">3</option>

          </Field>
        </div>
        
        <div className="form-group">
          <Field 
              className="form-check-input"

          // className="form-check-Field" t
          type="checkbox"  
          name="multiCheckbox" 
          value="đồng ý 1" 
          />
            <label 
            className="form-check-label" 
            htmlFor="multiCheckbox">
              Đồng ý 1
            </label>
     
          <Field 
            className="form-check-input"
          // className="form-check-Field" 
          type="checkbox"  
          name="multiCheckbox" 
          value="đồng ý 2" 
          />
            <label 
            className="form-check-label" 
            htmlFor="multiCheckbox">
              Đồng ý 2
            </label>
        </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Sign in
          </button>
            </div>
      </Form>
    </Formik>
  );
}

export default SignUp;
