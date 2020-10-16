import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

const AddAsAdmin = () => {
    let decodedToken = ''
    try{
        const token = localStorage.getItem('token');
        decodedToken = jwt_decode(token);
    }
    catch(error){
        
    }
    //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        console.log(e.target.name, e.target.value);
        setInfo(newInfo);
    };

    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))

    };
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-10">
                <div className="place-order py-5 px-4 col-md-10">
                    <div className="row">
                        <div className="col-md-10">
                            <h3>Add as Admin</h3>
                            <h5 className="ml-auto">{decodedToken.name}</h5>
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input onBlur={handleBlur} name="email" type="email" class="form-control" placeholder="email address"/>
                                </div>
                                <button type="submit" class="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAsAdmin;