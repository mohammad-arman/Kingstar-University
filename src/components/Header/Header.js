import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">
                    <img src="https://i.ibb.co/7R2jH6x/graduate-university-pngrepo-com.png" alt="" width="40"/>
                    <span className="ms-2 logo fw-bold text-dark">Kingstar University</span> 
                </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link active fw-bold text-dark" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link fw-bold text-dark" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link fw-bold text-dark" to="/teachers">Teachers</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link fw-bold text-dark" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link fw-bold text-dark" to="/contact">Contact Us</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    </div>
    );
};
export default Header;