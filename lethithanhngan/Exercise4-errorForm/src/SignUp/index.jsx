import React, {useState} from 'react';
import './styles.css';


function SignUp(props) {
  const{errors, checkValidate} =props;
  const [formValue, setFormValue] = useState({
    email:'',
    password:'',
    phoneNumber:'',
    approve:[],
  });
  const {finishFormValue, setFinishFormValue} = props;
   //function //e là event , sử dụng event target.value để lây giá trị trong input
   const handleChangeValue =(e) =>{
     const {name, value, checked} =e.target;
     let newValue='';
     if(name ==='approve'){
       if(checked){
         newValue=[
           ...formValue.approve,
           value,
         ]
       } else if(formValue.approve.indexOf(value) !== -1){
         const approveArr=formValue.approve;
         approveArr.splice(formValue.approve.indexOf(value),1)
         newValue=[...approveArr]
       }
     }
     else{
       newValue=value;
     }
     setFormValue({
         ...formValue,
         [name] :newValue,
       //  inputGender:value
         
     });
     console.log("handleChangeValue -> formValue", formValue)
   
   };

    return(
        <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" 
              className={`form-control ${errors.email.length >0 ? 'border-danger' : ''}` }
              name="email" 
              placeholder="Email" 
              onChange={(e) => handleChangeValue(e)}
              />
              <div className="text-danger">{errors.email}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" 
            className={`form-control ${errors.password.length >0 ? 'border-danger' : ''}` }
            name="inputPassword4" placeholder="Password" 
            onChange={(e) => handleChangeValue(e)}
            />
            <div className="text-danger">{errors.password}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPhone">Phone Number</label>
          <input type="tel" className="form-control" name="inputPhone" placeholder="0789999999" 
          onChange={(e) => handleChangeValue(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address </label>
          <input type="text" className="form-control" name="inputAddress2" placeholder="Apartment, studio, or floor"
          onChange={(e) => handleChangeValue(e)}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputGender">Gender</label>
          <select id="inputGender" className="form-control" name="inputGender" onChange={(e) => handleChangeValue(e)}
          >
            <option value="">Select Gender</option>
            <option value={0}>Male</option>
            <option value={1}>Female</option>
          </select>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="approve" id="exampleRadios1" value="option1" />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Text
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="approve" id="exampleRadios2" value="option2" />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Number
          </label>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => checkValidate(formValue)} >Sign in</button> 
      </form>
    );
        // sử dụng state của hàm cha là có thể dùng giá trị của con được
  }

export default SignUp;
