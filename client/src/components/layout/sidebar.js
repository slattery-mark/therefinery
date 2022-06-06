import React from 'react';

import SearchBox from '../common/searchbox';
import GreenButton from '../common/greenbutton';
import './sidebar.css';

const SideBar = ({ open }) => {
    return (
        <div className={ open ? 'sidebar open' : 'sidebar closed' }>
            <SearchBox placeholder={"Enter Steam ID"} />
            <SearchBox placeholder={"Enter Second Steam ID (Optional)"} />
            <GreenButton text={"Recommend"}/>
        </div>
    )
}

export default SideBar;