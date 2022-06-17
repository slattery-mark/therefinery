import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from './searchbox';
import GreenButton from './greenbutton';
import './searchform.css';

/**
 * The form on the sidebar containing 2 searchboxes and 1 green button.
 */
const SearchForm = () => {
    const [steamIds, setSteamIds] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    const submitHandler = e => {
        e.preventDefault();

        let search;
        if (!steamIds.steamId1) 
            search = undefined;
        else if (!steamIds.steamId2)
            search = { steamId1: steamIds.steamId1 };
        else
            search = {
                steamId1: steamIds.steamId1,
                steamId2: steamIds.steamId2
            };
        
        setSearchParams(search, { replace: true });
    }

    return (
        <form className='searchform' onSubmit={submitHandler}>
            <SearchBox placeholder={"Enter Steam ID"} value={steamIds.steamId1} func={e => setSteamIds({ ...steamIds, steamId1: e.target.value })} />
            <SearchBox placeholder={"Enter Another Steam ID (Optional)"} value={steamIds.steamId2} func={e => setSteamIds({ ...steamIds, steamId2: e.target.value })} />
            <GreenButton func={null} text={"Recommend"} />
        </form>
    )
}

export default SearchForm;