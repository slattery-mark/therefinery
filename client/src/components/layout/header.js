import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SiteLogo } from '../../logo.svg';
import Hamburger from '../common/hamburger';
import './header.css';

/**
 * The header component.
 * @param {Function} toggleMenuFunc the fuction used to toggle the hamburger menu display
 * @param {Boolean} open the value which determines whether or not the menu is open
 */
const Header = ({ toggleMenuFunc, open }) => {
    return (
        <header className='header'>
            <Link to='/'><SiteLogo className='logo' /></Link>
            <Hamburger toggleMenuFunc={toggleMenuFunc} open={open} />
        </header>
    )
}

export default Header;