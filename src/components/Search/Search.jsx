import React from 'react'
import "../Search/Search.scss"

const Search = ({ setSearch }) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input type="text" placeholder='Buscar por personaje' className='input'/>
        <button className='btn btn-primary fs-5'>Buscar</button>
    </form>
  )
}

export default Search