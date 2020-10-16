import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

const AddServices = () => {
    let decodedToken = ''
    try{
        const token = localStorage.getItem('token');
        decodedToken = jwt_decode(token);
    }
    catch(error){
        
    }
    //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] =useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        console.log(e.target.name, e.target.value);
        setInfo(newInfo);
    };

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('email', decodedToken.email);
        formData.append('serviceDescription', info.serviceDescription);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))

    };

    return (
        <div>
            <div className="place-order py-5 px-4 col-md-10">
            <div className="row">
                <div className="col-md-10">
                    <h3>Add Services</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label htmlFor="title">Services Title</label>
                            <input onBlur={handleBlur} name="title" type="text" class="form-control" placeholder="Service title"/>
                        </div>
                        <div class="form-group">
                        <label htmlFor="serviceDescription">Description</label>
                            <textarea onBlur={handleBlur} name="serviceDescription" class="form-control" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label htmlFor="icon">icon</label>
                            <input id="icon-upload" onChange={handleFileChange} name="icon" type="file" class="form-control" />
                        </div>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                </div>
                <div className="user-name col-md-2">
                    <p className="text-secondary">{decodedToken.name}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddServices;