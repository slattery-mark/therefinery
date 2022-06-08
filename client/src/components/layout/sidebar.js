import React from 'react';

import SearchForm from '../common/searchform';
import './sidebar.css';

/**
 * The sidebar menu component.
 * @param {Boolean} open the value which determines whether or not the menu is open 
 */
const SideBar = ({ open }) => {
    return (
        <div className={ open ? 'sidebar sidebar--open' : 'sidebar sidebar--closed' }>
            <SearchForm />
        </div>
    )
}

export default SideBar;