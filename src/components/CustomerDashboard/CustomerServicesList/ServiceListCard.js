import React from 'react';

const serviceListCard = {
    display: 'flex',
    flexDirection: "column",
    alignItems: "left"
}
const ServiceListCard = ({name, service}) => {
    return (
        // <div className="col-md-4 service-card">
        //     <img className="w-25 mb-4" src={`data:image/png;base64,${service.image.img}`} alt=""/>
        //     <h3 className="text-center" style={{color:"black"}}>{service.title}</h3>
        //     <p className="text-center text-secondary">{service.serviceDescription}</p>
        // </div>
        <div style={serviceListCard} className="col-md-4">
            <img className="w-25 mb-4" src={require('../../../images/icons/service1.png')} alt=""/>
            <h3 style={{color:"black"}}>{service.title}</h3>
            <p className="text-secondary">{service.projectDescription}</p>
        </div>
        //<h2>ww: {name}</h2>
    );
};

export default ServiceListCard;