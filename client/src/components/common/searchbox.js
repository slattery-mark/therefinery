import React from 'react';
import './searchbox.css';

/**
 * An input which functions as a search box.
 * @param {String} placeholder  the placeholder text to appear when the input is empty 
 * @param {String} name the name of the input (for labels)
 * @param {String} value the initial value of the input
 * @param {String} func the function to execute onChange
 */
const SearchBox = ({ placeholder, value, name, func }) => {
    return (
        <div className='searchbox'>
            <label htmlFor={name} />
            <input type='text' name={name} value={value} onChange={func} placeholder={placeholder} />
        </div>
    )
}

export default SearchBox