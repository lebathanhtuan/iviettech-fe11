import React, { useState } from "react";

import "./style.css";

function SignUp(props) {
  const {  checkValidate, error} = props;
  console.log('Log: : SignUp -> error', error);
  console.log('Log: : SignUp -> checkValidate', checkValidate);
  const [formValue, setFormValue] = useState({
    Email: "",
    Password: "",
    approve: []
  });


  const handleChangeValue = (e) => {
    const { name, value , checked} = e.target;
    let newValueCheckbox = "";
    if (name==="approve"){
      if(checked){
        newValueCheckbox = [
          ...formValue.approve ,
          value,
        ]
      }
      else if(formValue.approve.indexOf(value) !== -1){
        const approveArr = formValue.approve;
        approveArr.splice(formValue.approve.indexOf(value));
        newValueCheckbox = [ ...formValue.approve ]
      }
    }
    else newValueCheckbox = value;
    
    setFormValue({
      ...formValue,

      [name]: value,

    });

  }


  return (
    <form >
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            className= {`form-control `}
            name="Email"
            onChange={(e) => handleChangeValue(e)}
          />
          <div>{error.Email}</div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="form-control"
            name="Password"
            onChange={(e) => handleChangeValue(e)}
          />
          <div>{error.Password}</div>

        </div>

      </div>
      <div className="form-group">
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          className="form-control"
          name="Address"
          placeholder="1234 Main St"
          onChange={(e) => handleChangeValue(e)}

        />
      </div>
      <div className="form-group">
        <label htmlFor="Phone">Phone Number</label>
        <input
          type="text"
          className="form-control"
          name="Phone"
          placeholder="Apartment, studio, or floor"
          onChange={(e) => handleChangeValue(e)}

        />
      </div>
      <div>
        <label htmlFor="Number"></label>
        <select
          name="Number"
          className="form-group"
          onChange={(e) => handleChangeValue(e)}

        >
          <option value="Number"  >Number</option>

          <option value="1"  >1</option>
          <option value="2">2</option>
          <option value="3">3</option>

        </select>
      </div>
      
      <div className="form-check">
        <input className="form-check-input" type="checkbox"  name="approve" value="đồng ý 1" onChange={(e) => handleChangeValue(e)}/>
          <label className="form-check-label" htmlFor="defaultCheck2">
            Đồng ý 1
          </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox"  name="approve" value="đồng ý 2" onChange={(e) => handleChangeValue(e)}/>
          <label className="form-check-label" htmlFor="defaultCheck2">
            Đồng ý 2
          </label>
      </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => checkValidate(formValue)}
            >
              Sign in
        </button>
          </div>
    </form>
  );
}

export default SignUp;
