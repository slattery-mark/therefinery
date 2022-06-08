import React, { useState } from 'react';

import SearchBox from './searchbox';
import GreenButton from './greenbutton';
import './searchform.css';

/**
 * The form on the sidebar containing 2 searchboxes and 1 green button.
 */
const SearchForm = () => {
    const [steamIDs, setSteamIDs] = useState({ firstID: "", secondID: "" })

    const submitHandler = e => {
        e.preventDefault();
        console.log(steamIDs)
    }

    return (
        <form className='searchform' onSubmit={submitHandler}>
            <SearchBox placeholder={"Enter Steam ID"} value={steamIDs.firstID} func={e => setSteamIDs({ ...steamIDs, firstID: e.target.value })} />
            <SearchBox placeholder={"Enter Second Steam ID (Optional)"} value={steamIDs.secondID} func={e => setSteamIDs({ ...steamIDs, secondID: e.target.value })} />
            <GreenButton func={null} text={"Recommend"} />
        </form>
    )
}

export default SearchForm;