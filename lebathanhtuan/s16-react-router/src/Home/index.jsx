import React from 'react';
import history from '../history';

function Home(props) {
  return (
    <div>
      Home
      <button
        className="btn btn-secondary"
        onClick={() => history.push('/login')}
      >
        Đăng xuất
      </button>
    </div>
  );
}

export default Home;
