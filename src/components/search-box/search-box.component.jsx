import React from 'react';

import ReactSearchBox from 'react-search-box';

import './search-box.styles.css';

export const SearchBox = ({ placeHolder, handleChange }) => {
    return (
        <div className='search'>
        <ReactSearchBox  type='search' placeholder={placeHolder} onChange={handleChange}
        ></ReactSearchBox>
        </div>
        )
}