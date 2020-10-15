import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let [role, setRole] = useState("");
    let [userRole, setUserRole] = useState("");

    fetch('http://localhost:5000/getRole', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"user":loggedInUser.email}),
        })
        .then(res=> res.json())
        .then(data=> {
            const userRole = data[0].role;
            console.log(userRole);
            // if(userRole === "admin"){

            // }
            setRole(userRole);
            //console.log(role);
        })
        .catch(function (error) {
   
          });
    return (
        <div className="container pt-5">
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to="/home">
                    <img style={{width:"150px", height:"47px"}} src={require("../../../logos/logo.png")} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-3 active">
                            <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item mx-3">
                            {
                                (role ==="admin")?<Link class="nav-link" to= "/admin/dashboard">Dashboard</Link>:<Link  class="nav-link" to= "/user/dashboard">Dashboard</Link>
                            }
                            
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link" to="/home">Our Team</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link" to="/home">Contact Us</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link disabled" to="/home">{ loggedInUser.name? loggedInUser.name : loggedInUser.email}</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link to="/login"><button onClick={() => setLoggedInUser({})} className="btn btn-black">{loggedInUser.email?"Logout":"Login"}</button></Link>    
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar;