import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

const CustomerReview = () => {
    let decodedToken = ''
    try{
        const token = localStorage.getItem('token');
        decodedToken = jwt_decode(token);
        console.log(decodedToken)
    }
    catch(error){
        
    }

    //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
        formData.append('name', info.name);
        formData.append('company', info.company)
        formData.append('review', info.review);
        formData.append('file', file);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))

    };

    return (
        <div>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                <div className="place-order py-5 px-4 col-md-10">
                    <div className="row">
                        <div className="col-md-10">
                            <h3>Review our Service</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input onBlur={handleBlur} name="name" type="text" className="form-control" placeholder="Your Name/ Company's Name"/>
                                </div>
                                <div className="form-group">
                                    <input onBlur={handleBlur} name="company" type="text" className="form-control" placeholder="Company name, Designation"/>
                                </div>
                                <div className="form-group">
                                    <textarea onBlur={handleBlur} name="review" className="form-control" rows="3" placeholder="Your Review"></textarea>
                                </div>
                                <div className="form-group">
                                    <input onChange={handleFileChange} type="file" className="form-control" placeholder="Upload your picture"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="user-name col-md-2">
                            <p className="text-secondary">{decodedToken.name}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;