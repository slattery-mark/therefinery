import React from 'react';
import SearchBox from '../common/searchbox';
import GreenButton from '../common/greenbutton';
import './sidebar.css';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <SearchBox placeholder={"Enter Steam ID"} />
            <SearchBox placeholder={"Enter Second Steam ID (Optional)"} />
            <GreenButton text={"Recommend"}/>
        </div>
    )
}

export default SideBar;