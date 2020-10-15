import React from 'react';

const serviceListCard = {
    display: 'flex',
    flexDirection: "column",
    alignItems: "left"
}
const ServiceListCard = ({name, service}) => {
    console.log(service);
    //const {status} = service.user_services.status;
    //console.log(status);

    return (
        <div style={serviceListCard} className="col-md-6">
            <div className="row">
                <div className="col-8">
                    <img className="w-25 mb-4" src={`data:image/png;base64,${service.image.img}`} alt=""/>
                </div>
                <div className="col-4">
                <p className="text-danger">pending</p>
                </div>
            </div>
            <h5 style={{color:"black"}}>{service.title}</h5>
            <p className="text-secondary">{service.serviceDescription}</p>
        </div>
    );
};

export default ServiceListCard;