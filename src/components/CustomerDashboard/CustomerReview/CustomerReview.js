import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

const CustomerReview = () => {
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
                                <div class="form-group">
                                    <input onBlur={handleBlur} name="name" type="text" class="form-control" placeholder="Your Name/ Company's Name"/>
                                </div>
                                <div class="form-group">
                                    <input onBlur={handleBlur} name="company" type="text" class="form-control" placeholder="Company name, Designation"/>
                                </div>
                                <div class="form-group">
                                    <textarea onBlur={handleBlur} name="review" class="form-control" rows="3" placeholder="Project description"></textarea>
                                </div>
                                <div class="form-group">
                                    <input onChange={handleFileChange} type="file" class="form-control" placeholder="Upload your picture"/>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="user-name col-md-2">
                            <p className="text-secondary">Name:{loggedInUser.name}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;