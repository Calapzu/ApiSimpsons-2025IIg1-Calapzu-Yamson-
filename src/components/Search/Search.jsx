import React, { useState } from 'react'
import "../Search/Search.scss"

const Search = ({ setSearch }) => {
const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form
      className='d-flex justify-content-center gap-4 mb-5'
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder='Buscar por personaje...'
        className='input form-control w-50'
        onChange={handleInputChange}
      />
    </form>
  );
}

export default Search