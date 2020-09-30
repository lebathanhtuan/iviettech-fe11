import React, { useState } from 'react';
import './style.css'

function SignUp(props) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        gender: '',
        radios: '',
        approve: [],
    });
    console.log("SignUp -> formValue", formValue)
    const { setFinishFormValue } = props;
    const { checkValidate, errors } = props;

    const handleChangeValue = (e) => {
        const { name, value, checked } = e.target;
        let newValue = '';
        if (name === 'approve') {
            if (checked) {
                newValue = [
                    ...formValue.approve,
                    value,
                ]
            } else if (formValue.approve.indexOf(value) !== -1) {
                const approveArray = formValue.approve;
                approveArray.splice(formValue.approve.indexOf(value), 1);
                newValue = [...approveArray]
            }
        } else {
            newValue = value;
        }
        setFormValue({
            ...formValue,
            [name]: newValue
        });
    };

    return (
        <form className="mb-2">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        className={`form-control ${errors.email.length !== 0 ? 'border-danger' : ''}`}
                        id="email"
                        placeholder="Email"
                        onChange={(e) => handleChangeValue(e)} />
                    <div className="text-danger">{errors.email}</div>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        className={`form-control ${errors.password.length !== 0 ? 'border-danger' : ''}`}
                        id="password"
                        placeholder="Password"
                        onChange={(e) => handleChangeValue(e)} />
                    <div className="text-danger">{errors.password}</div>
                </div>
                <div className="form-group col-md-8">
                    <label htmlFor="address">Address</label>
                    <input
                        name="address"
                        type="text"
                        className={`form-control ${errors.address.length !== 0 ? 'border-danger' : ''}`}
                        id="address"
                        placeholder="Address"
                        onChange={(e) => handleChangeValue(e)} />
                    <div className="text-danger">{errors.address}</div>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="gender">Gender</label>
                    <select
                        name="gender"
                        id="gender"
                        className="form-control"
                        onChange={(e) => handleChangeValue(e)}>
                        <option value="male" >Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    name="phoneNumber"
                    type="text"
                    className={`form-control ${errors.phoneNumber.length > 0 ? 'border-danger' : ''}`}
                    id="phoneNumber"
                    placeholder="Phone Number"
                    onChange={(e) => handleChangeValue(e)} />
                <div className="text-danger">{errors.phoneNumber}</div>
            </div>
            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-md-2 pt-0">Radios</legend>
                    <div className="col-sm-4">
                        <div className="form-check">
                            <input className="form-check-input" onChange={(e) => handleChangeValue(e)} type="radio" name="radios" id="FirstRadio" defaultValue="FirstRadio" defaultChecked />
                            <label className="form-check-label" htmlFor="FirstRadio">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={(e) => handleChangeValue(e)} type="radio" name="radios" id="SecondRadio" defaultValue="SecondRadio" />
                            <label className="form-check-label" htmlFor="SecondRadio">
                                Second radio
                            </label>
                        </div>
                        <div className="form-check ">
                            <input className="form-check-input" onChange={(e) => handleChangeValue(e)} type="radio" name="radios" id="ThirdRadio" defaultValue="ThirdRadio" />
                            <label className="form-check-label" htmlFor="ThirdRadio">
                                Third radio
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div className="form-group row">
                <div className="col-sm-2">Checkbox</div>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" onChange={(e) => handleChangeValue(e)} type="checkbox" name="approve" id="approve" value="approve1" />
                        <label className="form-check-label" htmlFor="approve">
                            Đồng ý 1
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" onChange={(e) => handleChangeValue(e)} type="checkbox" name="approve" id="approve" value="approve2" />
                        <label className="form-check-label" htmlFor="approve">
                            Đồng ý 2
                        </label>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => checkValidate(formValue)}
            >Sign Up
            </button>
        </form>
    );
}

export default SignUp;
