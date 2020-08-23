import React, { useState } from "react";
import SignUp from "./SignUp";
import "./style.css";

function List(props) {
 
  const [finishFormValue, setFinishFormValue] = useState("");
  const [error, setError] = useState({
    Email : "",
    Password : ""
  });
  console.log('Log: : List -> error', error);
  const checkValidate = (values) => {
   
    let errorData = {};
    if(!values.Email && values.Email.length === 0){
      errorData = {
        ...errorData,
        Email : "Bạn chưa nhập email"
      }
    } else {
      errorData = {
        ...errorData,
        Email : ""
      }
    };
    if(!values.Password && values.Password.length === 0){
      errorData = {
        ...errorData,
        Password : "Bạn chưa nhập password"
      }
    } else if(values.Password.length <8) {
      errorData = {
        ...errorData,
        Password : "Mật khẩu tối thiểu 8 kí tự"
      }
    } else {
      errorData = {
        ...errorData,
        Password : ""
      }
    };
    setError( errorData)
      
    
  }
  return (
    <div className=" list container ">
      <div >
        <h2>Result Form</h2>
        <p>Email: {finishFormValue.Email}</p>
        <p>Password: {finishFormValue.Password}</p>
        <p>Address: {finishFormValue.Address}</p>
        <p>Phone Number: {finishFormValue.Phone}</p>
        <p>Number: {finishFormValue.Number}</p>

      </div>
      <div >
        <h2>Form</h2>
        <SignUp 
          setFinishFormValue={setFinishFormValue}
          checkValidate={checkValidate}
          error = {error}
           ></SignUp>
      </div>
    </div>
  );
}

export default List;
