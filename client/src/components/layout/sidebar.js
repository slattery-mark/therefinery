import React from 'react';

import SearchBox from '../common/searchbox';
import GreenButton from '../common/greenbutton';
import './sidebar.css';

/**
 * The sidebar menu component.
 * @param {Boolean} open the value which determines whether or not the menu is open 
 */
const SideBar = ({ open }) => {
    return (
        <div className={ open ? 'sidebar open' : 'sidebar closed' }>
            <SearchBox placeholder={"Enter Steam ID"} />
            <SearchBox placeholder={"Enter Second Steam ID (Optional)"} />
            <GreenButton func={null} text={"Recommend"}/>
        </div>
    )
}

export default SideBar;