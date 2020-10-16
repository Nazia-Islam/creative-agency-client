import React, { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import ListTable from './ListTable';
import jwt_decode from "jwt-decode";

const ServiceListForAdmin = () => {
    let decodedToken = ''
    try{
        const token = localStorage.getItem('token');
        decodedToken = jwt_decode(token);
        console.log(decodedToken)
    }
    catch(error){
        
    }
    //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                        <div className="d-flex justify-content-between">
                            <h4>All Services</h4>
                            <p className="">{decodedToken.name}</p>
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
                </div>
            </div>
        </div>
    );
};

export default ServiceListForAdmin;