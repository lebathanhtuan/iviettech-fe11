import React from 'react';
import history from '../history'

function Home() {
  return (
    <div>
      Home
      <button 
        className="btn btn-primary"
        onClick={() => history.push('/login')}
      >
        Log out
      </button>
    </div>
  );
}

export default Home;
