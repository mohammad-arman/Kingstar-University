import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-content text-white">
                    <h1 className="fw-bold">Learn and Discover</h1>
                    <p className="fs-2">Ready to learn and have fun?Find a perfect course and join us today.</p>
                    <Link to="/about">
                        <button className="mt-2 btn btn btn-primary btn-lg banner-btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;