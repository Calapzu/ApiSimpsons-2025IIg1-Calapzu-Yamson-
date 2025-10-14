import React from "react";
import { Link } from "react-router-dom";
import '../Cards/Cards.scss'

const Cards = ({ page, results }) => {

    if (!results || results.length === 0) {
        return <h2 className="text-center">No se encontraron personajes</h2>
    }


    return (
        <div className="row">
            {results.map((x) => {
                const { id, name, portrait_path, occupation, age, status } = x;

                const imageUrl = id
                    ? `https://cdn.thesimpsonsapi.com/200/character/${id}.webp`
                    : "https://upload.wikimedia.org/wikipedia/en/0/0d/Homer_Simpson_2006.png";


                let badgeclassName = "bg-secondary";
                if (status === "Alive") {
                    badgeclassName = "bg-success";
                } else if (status === "Deceased") {
                    badgeclassName = "bg-danger";
                }


                return (
                    <Link
                        style={{ textDecoration: "none" }}
                        to={`${page}${id}`}
                        key={id}
                        className="col-lg-4 col-md-6 col-12 mb-4"
                    >

                        <div className="card simpson-card shadow-sm border-0 text-center">
                            <div className="p-2 simpson-header fs-4">
                                {name}
                            </div>

                            <img
                                src={imageUrl}
                                alt={name}
                                className="card-img-top img-simpson"
                            />

                            <div className="p-2 simpson-footer">
                                <div className="fs-5"><strong>Ocupacion:</strong> {occupation} </div>
                                <div className="fs-5"> <strong>Edad:</strong>  {age || "Sin edad"}</div>
                                <div className={`badge ${badgeclassName} fs-5`}>{status}</div>

                                {/*(() => {
                                    if (status === "Deceased") {
                                        return <div className="badge bg-danger fs-5">{status}</div>;
                                    } else if (status === "Alive") {
                                        return <div className=" badge bg-success fs-5">{status}</div>;
                                    } else {
                                        return <div className="badge bg-secondary fs-5">{status}</div>;
                                    }
                                })()*/}

                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    )



};

export default Cards;
