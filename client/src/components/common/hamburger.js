import React from 'react';

import { ReactComponent as Burger } from './hamburger.svg';
import './hamburger.css';

const Hamburger = ({ toggleMenuFunc, open }) => {
    return (
        <button className={ open ? 'hamburger close' : 'hamburger' } onClick={toggleMenuFunc}>
            <Burger />
        </button>
    )
}

export default Hamburger;