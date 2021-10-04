import React from 'react';

const Teacher = (props) => {
    const {name, proffesion, degree, thumb} = props.teacher;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={thumb} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p className="card-text">{degree}</p>
                    <h6>{proffesion}</h6>
                </div>
                </div>
        </div>
    );
};

export default Teacher;