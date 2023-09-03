import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink
                                    className="navbar-brand"
                                    to="/">
                                    Gajraj Technical</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link active" aria-current="page" to="/"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="menu_active nav-link"
                                            to="/Service">
                                            Services</NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="menu_active nav-link" to="/About">
                                            About</NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="menu_active nav-link" to="/Contact">
                                            Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="menu_active nav-link" to="/Weatherapp">
                                            Weather</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



export default Navbar;