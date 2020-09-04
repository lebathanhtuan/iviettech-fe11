import React, { useState, useEffect } from 'react';
import './styles.css';

function Tab1(props) {
  const [changeColor, setChangeColor] = useState(false);
  const { formValue, setFormValue } = props;

  useEffect(() => {
    if (formValue.email === 'ttt@gmail.com') {
      setChangeColor(true);
    }
  }, [formValue]);

  useEffect(() => {
    return () => {
      setFormValue({});
    }
  }, []);

  return (
    <div className={`list-container ${changeColor && 'text-danger'}`}>
      Email: {formValue.email}
    </div>
  );
}

export default Tab1;
