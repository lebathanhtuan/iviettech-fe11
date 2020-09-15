import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Sidebar from '../Main/Sidebar';
import Footer from '../Footer';

import './styles.css';

function DefaultLayout({ component: Component, ...props }) {
  return (
    <Route 
      {...props} 
      render={(routerProps) => (
        <>
          <Header />
          <div className="main">
            <Sidebar />
            <Component {...routerProps} />
          </div>
          <Footer />
        </>
      )} 
    />
  );
}

export default DefaultLayout;
