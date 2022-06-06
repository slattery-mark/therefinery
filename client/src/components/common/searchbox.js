import React from 'react';
import './searchbox.css';

/**
 * An input which functions as a search box.
 * @param {String} placeholder the placeholder text to appear when the input is empty 
 */
const SearchBox = ({ placeholder }) => {
    return (
        <input type='text' className='searchbox' placeholder={ placeholder } />
    )
}

export default SearchBox