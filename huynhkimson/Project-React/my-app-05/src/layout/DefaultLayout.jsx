import React from 'react';
import { Route } from 'react-router-dom';
import './style.css';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';


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