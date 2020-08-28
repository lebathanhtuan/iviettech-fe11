import React, { useEffect } from 'react';
import './styles.css';

function Tab1(props) {
  useEffect(() => {
    return () => {
      console.log('Rời khỏi tab 1')
    }
  }, []);

  return (
    <div className="list-container">
      Tab 1
    </div>
  );
}

export default Tab1;
