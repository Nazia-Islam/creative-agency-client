import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const serviceId = service._id;
    const urlServiceTitle = service.title;
    return (
        <div className="col-md-4 service-card">
            <Link  to={"/service/"+serviceId+"/"+urlServiceTitle}>
                <img className="w-25 mb-4" src={`data:image/png;base64,${service.image.img}`} alt=""/>
                <h3 className="text-center" style={{color:"black"}}>{service.title}</h3>
                <p className="text-center text-secondary">{service.serviceDescription}</p>
            </Link>
        </div>
    );
};

export default ServiceCard;