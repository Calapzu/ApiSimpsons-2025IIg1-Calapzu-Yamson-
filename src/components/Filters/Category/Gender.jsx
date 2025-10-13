import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = ({ setGender, setPageNumber }) => {
    let genders = ["Female", "Male", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Genders
                </button>
            </h2>
            <div 
            id="collapseTwo" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
            >
               <div
                    className="accordion-body d-flex flex-wrap gap-3"
                >
                    {genders.map((item, index) => (
                        <FilterBtn
                            task={setGender}
                            setPageNumber={setPageNumber}
                            key={index}
                            name="gender"
                            index={index}
                            items={item}

                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Gender