import React from 'react'

const Pagination = ({ pageNumber, setPageNumber }) => {

    let siguiente = () => {
        setPageNumber( (x) => x + 1);
        
    };
    let anterior = () => {
        if (pageNumber ===1) {
            return;
        }
        setPageNumber( (x) => x - 1);
    };

  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
        <button onClick={anterior} className="btn btn-primary">Anter</button>
        <button onClick={siguiente} className="btn btn-primary">Sigui</button>
    </div>
  );
}

export default Pagination;