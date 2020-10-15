import React, { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import ListTable from './ListTable';

const ServiceListForAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceList, setServicesList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServicesList(data);
        })
    }, [])

    return (
        <div>
            <div className="place-order py-5">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <h4>Services List</h4>
                            <h5 className="">{loggedInUser.name}</h5>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    serviceList.map(service => <ListTable service={service}></ListTable>)
                                
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="user-name col-1">
                        <p className="text-secondary">Name:{loggedInUser.name}</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceListForAdmin;