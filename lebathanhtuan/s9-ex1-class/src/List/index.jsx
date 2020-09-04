import React, { useState, useEffect } from 'react';
import Tab1 from '../Tab1';
import SignUp from '../SignUp';
import './styles.css';

function List(props) {
  const [tabActive, setTabActive] = useState(1);
  const [formValue, setFormValue] = useState({});

  useEffect(() => {
    console.log('Mới vào trang lần đầu tiên');
  }, []);
  
  return (
    <div className="list-container">
      <button
        className={`btn ${tabActive === 1 && 'btn-primary'}`}
        onClick={() => setTabActive(1)}
      >
        Tab 1
      </button>
      <button
        className={`btn ${tabActive === 2 && 'btn-primary'}`}
        onClick={() => setTabActive(2)}
      >
        Tab 2
      </button>
      {tabActive === 1
        ? <Tab1 formValue={formValue} setFormValue={setFormValue} />
        : <SignUp setFormValue={setFormValue} />
      }
    </div>
  );
}

export default List;
