import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ pages, pageNumber, setPageNumber }) => {

    

    console.log(pages)
    
    return (
        <ReactPaginate
        pageCount={pages} 
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        />
    );
}

export default Pagination;