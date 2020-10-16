import React from 'react';

const serviceListCard = {
    display: 'flex',
    flexDirection: "column",
    alignItems: "left"
}
const ServiceListCard = ({name, service}) => {

    return (
        <div style={serviceListCard} className="col-md-6">
            <div className="row">
                <div className="col-8">
                    <img className="w-25 mb-4" src={`data:image/png;base64,${service.image.img}`} alt=""/>
                </div>
                <div className="col-4">
                    {(service.user_services.status === "On going") && <span className="badge badge-warning">{service.user_services.status}</span> }
                    {(service.user_services.status === "Pending") && <span className="badge badge-danger">{service.user_services.status}</span>}
                    {(service.user_services.status === "Done") && <span className="badge badge-success">{service.user_services.status}</span> }
                </div>
            </div>
            <h5 style={{color:"black"}}>{service.title}</h5>
            <p className="text-secondary">{service.serviceDescription}</p>
        </div>
    );
};

export default ServiceListCard;