import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import ServiceListCard from './ServiceListCard';
import { useState } from 'react';
import jwt_decode from "jwt-decode";

const ServicesList = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    let decodedToken = ''
    try{
        const token = localStorage.getItem('token');
        decodedToken = jwt_decode(token);
    }
    catch(error){
        
    }
    useEffect(() => {
        fetch('http://localhost:5000/ownServices?email='+decodedToken.email)
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, []);

    return (
        <div className="place-order py-5 px-4 col-md-10">
            <div className="row">
                <div className="col-md-10">
                    <h3>Services you are enjoying</h3>
                    <div className="row">
                        {
                            services.map(service => <ServiceListCard name={decodedToken.name} service={service}></ServiceListCard>)
                        }
                    </div>  
                </div>
                <div className="user-name col-md-2">
                    <p className="text-secondary">{decodedToken.name}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesList;