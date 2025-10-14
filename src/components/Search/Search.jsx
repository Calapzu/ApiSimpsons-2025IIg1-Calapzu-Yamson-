import React, { useState } from 'react'
import "../Search/Search.scss"

const Search = ({ setSearch, setPageNumber }) => {
    const handleSearch = (e) => {
        setPageNumber(1);              
        setSearch(e.target.value);      
    };

    return (
        <form
            className='search-simpsons d-flex justify-content-center align-items-center flex-wrap gap-3 mb-5'
        >
            <input
                type="text"
                placeholder='Buscar por personaje...'
                className='input-simpsons'
                onChange={handleSearch}
            />
        </form>
    );
}

export default Search