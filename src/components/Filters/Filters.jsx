import React from 'react';
import Genders from '../Filters/Category/Genders.jsx';
import Status from './Category/Status.jsx';

import '../Filters/Filter.scss'


const Filters = ({ setStatus, setGender, setPageNumber, status, gender }) => {
  let clear = () => {
    setStatus("");
    setPageNumber(1);
    setGender("");
  };
  return (
    <div className='col-3 filters-simpsons'>
      <div className="title-simpsons text-center fw-bold fs-4 mb-2">Filter</div>
      <div
      onClick={clear}
        style={{ cursor: "pointer" }}
        className="clear-filters-simpsons text-center text-primary text-decoration-underline mb-3"
      >
        Clear Filters
      </div>

      <div className="accordion accordion-simpsons" id="accordionExample">
       <Genders setGender={setGender} setPageNumber={setPageNumber} gender={gender}/>
       <Status setStatus={setStatus} setPageNumber={setPageNumber} status={status}/>
      </div>


    </div>
  );
}

export default Filters