import React, { useEffect } from 'react';
import './styles.css';

function Tab2(props) {
  useEffect(() => {
    return () => {
      console.log('Rời khỏi tab 2')
    }
  }, []);

  return (
    <div className="list-container">
      Tab 2
    </div>
  );
}

export default Tab2;
