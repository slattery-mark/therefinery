import React from 'react';
import { ReactComponent as SiteLogo } from '../../logo.svg'
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            < SiteLogo />
        </header>
    )
}

export default Header;