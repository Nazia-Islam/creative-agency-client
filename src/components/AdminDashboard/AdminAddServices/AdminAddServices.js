import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; 
import AddServices from '../AddServices/AddServices';

const AdminAddDervices = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <AddServices></AddServices>
            </div>
        </div>
    );
};

export default AdminAddDervices;