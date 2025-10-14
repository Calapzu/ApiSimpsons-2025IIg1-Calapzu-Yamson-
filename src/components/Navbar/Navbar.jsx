import React from "react";
import { NavLink, Link } from 'react-router-dom';

import '../Navbar/Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-simpsons mb-5">
            <div className="container-fluid">
                <Link to="/" className="fs-3 chewy navbar-brand text-simpsons"> Los Simpsons</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <i className="fa-solid fa-bars open"></i>
                    <i className="fa-solid fa-x close"></i>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav fs-5">
                        <NavLink
                            
                            to="/"
                            end
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Character
                        </NavLink>
                        <NavLink
                            to="/episodes"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Episodes
                        </NavLink>
                        <NavLink
                            to="/location"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                        >
                            Location
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
