import React from 'react'
import FilterBtn from '../FilterBtn'

const Genders = ({ setGender, setPageNumber, gender }) => {
    const genders = ["Female", "Male", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id='headingOne'>
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                >
                    Genders
                </button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse"
                data-bs-parent="#accordionExample"
                aria-labelledby="headingTwo"
                
            >
                <div
                    className="accordion-body d-flex flex-wrap gap-3"
                >
                    {genders.map((item, index) => (
                        <FilterBtn
                            key={index}
                            name="gender"
                            index={index}
                            items={item}
                            task={setGender}
                            setPageNumber={setPageNumber}
                            activeFilter={gender}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Genders