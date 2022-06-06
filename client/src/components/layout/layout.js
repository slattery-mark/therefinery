import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';
import SideBar from './sidebar';
import Footer from './footer';
import './layout.css';

/**
 * The component that controls the high-level layout of the app.
 */
const Layout = () => {
    const [open, toggleMenu] = useState(true);
    const toggleMenuFunc = () => toggleMenu(!open);

    return (
        <div className='layout'>
            <Header toggleMenuFunc={toggleMenuFunc} open={open} />
            <SideBar open={open}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout