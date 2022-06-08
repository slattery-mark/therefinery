import React from 'react';

import { ReactComponent as Burger } from './hamburger.svg';
import './hamburger.css';

/**
 * The Humburger Menu svg/button.
 * @param {Function} toggleMenuFunc the fuction used to toggle the hamburger menu display
 * @param {Boolean} open the value which determines whether or not the menu is open
 */
const Hamburger = ({ toggleMenuFunc, open }) => {
    return (
        <button className={ open ? 'hamburger hamburger--closed' : 'hamburger' } onClick={toggleMenuFunc} aria-label="Hamburger Menu">
            <Burger />
        </button>
    )
}

export default Hamburger;