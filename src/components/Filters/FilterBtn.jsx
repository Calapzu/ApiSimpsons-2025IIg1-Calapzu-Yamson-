import React from 'react'
import '../Filters/FilterBtn.scss'

const FilterBtn = ({ name, index, items, task, setPageNumber }) => {

    const handleClick = () => {
        if (typeof setPageNumber === "function") setPageNumber(1);
        if (typeof task === "function") task(items);
        else console.warn("⚠️ task no es una función en FilterBtn", task);
    };

    return (
        <div className="filter-btn-simpsons">
            <div className="form-check ">
                <input
                    type="radio"
                    className="form-check-input x d-none"
                    name={name}
                    id={`${name}-${index}`}
                    onClick={handleClick}
                />
                <label
                    className="btn-simpsons"
                    htmlFor={`${name}-${index}`}
                >
                    {items}
                </label>
                <br />
            </div>
        </div>
    )
}

export default FilterBtn