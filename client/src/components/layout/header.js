import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../logo.svg';
import Hamburger from '../common/hamburger';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'><SiteLogo className='logo' /></Link>
            <Hamburger />
        </header>
    )
}

export default Header;