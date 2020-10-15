import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { useEffect } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allServicestohome')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    return (
        <div className="container pt-5 mt-5 mb-5 pb-5">
            <h2 className="text-center mb-5">Provide awesome <span className="text-green">services</span></h2>
            <div className="row">
               {
                   services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;