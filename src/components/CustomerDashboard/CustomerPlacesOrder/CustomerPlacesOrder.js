import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import { useParams } from 'react-router-dom';

const CustomerPlacesOrder = () => {
    const {serviceId, urlServiceTitle} = useParams();
   
    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <PlaceOrder serviceId={serviceId} urlServiceTitle={urlServiceTitle}></PlaceOrder>
                </div>
            </div>
        </div>
    );
};

export default CustomerPlacesOrder;