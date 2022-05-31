import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../logo.svg'
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'><SiteLogo /></Link>
        </header>
    )
}

export default Header;