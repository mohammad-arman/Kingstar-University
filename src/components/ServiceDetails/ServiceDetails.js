import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./service.JSON')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div className="container py-5">
            <div className="services-heading text-center my-5">
                <h2 className="fw-bold heading">Services In Our University</h2>
                <p className="subheading">Check our main courses and coachings</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                   services.map(service=><Service key={service.id} service={service}></Service>) 
                }
            </div>
        </div>
    );
};

export default ServiceDetails;