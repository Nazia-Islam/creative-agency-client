import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import jwt_decode from "jwt-decode";

const titleStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "vertical"
};
const PlaceOrder = ({serviceId, urlServiceTitle}) => {
    let decodedToken = ''
    try{
        const token = localStorage.getItem('token');
        decodedToken = jwt_decode(token);
    }
    catch(error){
        
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] =useState(null);
    
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = e => {
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', decodedToken.email);
        formData.append('projectDescription', info.projectDescription);
        formData.append('serviceId', serviceId)
        formData.append('serviceTitle', urlServiceTitle)
        fetch('http://localhost:5000/orderService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
    };

    return (
        <div className="place-order py-5 px-4 col-md-10">
            <div className="row">
                <div className="col-md-10">
                    <h3>Order</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input onBlur={handleBlur} name="name" type="text" class="form-control" placeholder="Your Name/ Company's Name"/>
                        </div>
                        <p style={titleStyle}>{decodedToken.email}</p>
                        <p style={titleStyle}>{urlServiceTitle}</p>
                        <div class="form-group">
                            <textarea onBlur={handleBlur} name="projectDescription" class="form-control" rows="3" placeholder="Project description"></textarea>
                        </div>
                        <div class="form-group">
                            <input onChange={handleFileChange} type="file" class="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="user-name col-md-2">

                    <p className="text-secondary">{decodedToken.name}</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;