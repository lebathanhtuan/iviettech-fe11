import React from 'react';
import history from '../../util/history';

function Login(props) {
  return (
    <div>
      Login
      <button
        className="btn btn-primary"
        onClick={() => history.push('/')}
      >
        Đăng nhập
      </button>
    </div>
  );
}

export default Login;
