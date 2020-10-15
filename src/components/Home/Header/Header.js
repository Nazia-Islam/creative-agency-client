import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Home/Home.css';

const Header = () => {
    return (
        <div>
            <div style={{backgroundColor:"#FBD062"}}>
                <Navbar></Navbar>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mt-5 pt-5">
                            <h1 className="mt-2">Let’s Grow Your Brand To The Next Level</h1>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <button className="mt-4 btn btn-black">Hire us</button>
                        </div>
                        <div className="col-md-6">
                            <img style={{width:"100%"}} src={require("../../../logos/Frame.png")} alt=""/>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L1440,64L1440,320L0,320Z"></path></svg>    
            </div>
            <div className="container client-logo">
                <img src={require("../../../logos/slack.png")} alt=""/>
                <img src={require("../../../logos/google.png")} alt=""/>
                <img src={require("../../../logos/uber.png")} alt=""/>
                <img src={require("../../../logos/netflix.png")} alt=""/>
                <img src={require("../../../logos/airbnb.png")} alt=""/>
            </div>
        </div>
    );
};

export default Header;