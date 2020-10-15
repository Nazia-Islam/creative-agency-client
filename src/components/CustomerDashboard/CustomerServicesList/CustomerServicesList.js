import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ServicesList from './ServicesList';

const CustomerServicesList = () => {
    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <ServicesList/>
                </div>
            </div>
        </div>
    );
};

export default CustomerServicesList;