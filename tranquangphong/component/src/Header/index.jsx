import React from 'react';
import './styles.css';

function Header() {
  const styleContainer = {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    backgroundColor: '#666'
  }

  const styleHeader = {
    paddingLeft: 16,
    color: '#FFF'
  }

  return (
    <div style={styleContainer}>
      <div style={styleHeader}>
        Brand Name
      </div>
    </div>
  );
}

export default Header;