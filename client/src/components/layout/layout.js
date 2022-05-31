import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import SideBar from './sidebar';
import Footer from './footer';
import './layout.css';

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <SideBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout