import React from 'react';
import "./Service.css"

const Service = (props) => {
    const {name, description, price, img, courseduration} = props.service;
    return (
        <div>
            <div className="col">
                <div className="card h-100"> 
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p className="card-text description">{description.slice(0, 170)}</p>
                    <h5 className="text-danger">Price: ${price}</h5>
                    <h6>Course Duration: {courseduration}</h6>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;