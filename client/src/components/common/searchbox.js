import React from 'react';
import './searchbox.css';

const SearchBox = ({ placeholder }) => {
    return (
        <input type='text' className='searchbox' placeholder={ placeholder }></input>
    )
}

export default SearchBox