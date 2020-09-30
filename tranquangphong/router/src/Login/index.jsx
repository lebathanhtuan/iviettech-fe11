import React from 'react';
import history from '../history';

function Login() {
  return (
    <div>
      Login
      <button 
        className="btn btn-primary"
        onClick={() => history.push('/')}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
