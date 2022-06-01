import React from 'react';
import { ReactComponent as Burger } from './hamburger.svg';
import './hamburger.css';

const Hamburger = () => {
    return (
        <div className='hamburger'>
            <Burger />
        </div>
    )
}

export default Hamburger;