import React, { useState, useEffect } from 'react';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import './styles.css';

function List(props) {
  const [countNumber, setCountNumber] = useState(1);
  const [isMax, setIsMax] = useState(false);
  const [tabActive, setTabActive] = useState(1);

  useEffect(() => {
    console.log('Mới vào trang lần đầu tiên');
  }, []);

  useEffect(() => {
    console.log('Update isMax', isMax);
  }, [isMax]);

  return (
    <div className="list-container">
      <button className="btn btn-primary" onClick={() => setTabActive(1)}>Tab 1</button>
      <button className="btn btn-primary" onClick={() => setTabActive(2)}>Tab 2</button>
      {tabActive === 1
        ? <Tab1 />
        : <Tab2 />
      }
      <div
        className="btn btn-primary"
        onClick={() => {
          if (countNumber >= 10) {
            setIsMax(true);
          } else {
            setIsMax(false);
            setCountNumber(countNumber + 1);
          }
        }}
      >+</div>
      <div
        className="btn btn-primary"
        onClick={() => {
          setIsMax(false);
          setCountNumber(countNumber - 1)
        }}
      >-</div>
      <div>{countNumber}</div>
    </div>
  );
}

export default List;
