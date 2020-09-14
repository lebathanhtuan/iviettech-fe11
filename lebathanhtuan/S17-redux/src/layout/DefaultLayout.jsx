import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

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
