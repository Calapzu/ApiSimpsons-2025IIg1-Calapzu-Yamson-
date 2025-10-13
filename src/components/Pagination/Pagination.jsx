import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

import '../Pagination/Pagination.scss'

const Pagination = ({ pages = 1, pageNumber = 1, setPageNumber, hasMore = true }) => {
    if (!hasMore || pages <= 1) return null;

    const forcePageIndex = Math.max(0, Math.min(pages - 1, pageNumber - 1));

    return (
        <ReactPaginate
            className='pagination-simpsons justify-content-center gap-4 my-4'
            forcePage={forcePageIndex}
            nextLabel="Sigui →"
            previousLabel="← Anter"
            nextClassName='btn-simpsons next'
            previousClassName='btn-simpsons prev'
            pageClassName='page-item-simpsons'
            pageLinkClassName='page-link-simpsons'
            activeClassName='active-simpsons'
            pageCount={pages}
            onPageChange={(data) => {
                const selected = data.selected + 1;
                if (selected !== pageNumber) setPageNumber(selected);
            }}
        />
    );
}

export default Pagination;