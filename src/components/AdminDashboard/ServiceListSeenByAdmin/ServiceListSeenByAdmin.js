import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; 
import ServiceListForAdmin from './ServiceListForAdmin';

const ServiceListSeenByAdmin = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-2 col-sm-2 col-xs-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-10 col-xs-10">
                <ServiceListForAdmin/>
            </div>
        </div>
    );
};

export default ServiceListSeenByAdmin;