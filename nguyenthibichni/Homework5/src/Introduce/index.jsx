import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css'
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function Introduce(){
    return(
        <div className="content">
          <h3 className="mb-3 mt-5 text-center info">INFORMATION</h3>
          <div>
              <p className="title">What is Lorem Ipsum?</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <button type="button" class="btn btn-light">Read more...</button>
        </div>
    )
}
export default Introduce;
