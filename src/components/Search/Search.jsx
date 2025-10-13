import React, { useState } from 'react'
import "../Search/Search.scss"

const Search = ({ setSearch, setPageNumber }) => {
    const handleSearch = (e) => {
        setPageNumber(1);              
        setSearch(e.target.value);      
    };

    return (
        <form
            className='d-flex justify-content-center gap-4 mb-5'
        >
            <input
                type="text"
                placeholder='Buscar por personaje...'
                className='input form-control w-50'
                onChange={handleSearch}
            />
        </form>
    );
}

export default Search