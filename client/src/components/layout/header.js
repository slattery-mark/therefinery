import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../logo.svg';
import { ReactComponent as Hamburger } from '../common/hamburger.svg';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'><SiteLogo className='logo' /></Link>
            <Hamburger className='hamburger' />
        </header>
    )
}

export default Header;