import React from 'react'
import FilterBtn from '../FilterBtn';

const Status = ({ setStatus, setPageNumber }) => {
    let status = ["Alive", "Deceased", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id='headingOne'>
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                >
                    Status
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div
                    className="accordion-body d-flex flex-wrap gap-3"
                >
                    {status.map((item, index) => (
                        <FilterBtn
                            key={index}
                            name="status"
                            index={index}
                            items={item}
                            task={setStatus}
                            setPageNumber={setPageNumber}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Status;