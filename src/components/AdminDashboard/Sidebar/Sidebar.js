import React, { useContext } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faPlus, faUserPlus, faHome, faGripHorizontal, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="sidebar d-flex flex-column">
                <img className="top-logo" style={{width:"150px"}} src={require("../../../logos/logo.png")} alt=""/>
                <ul className="side-list-nav list-unstyled">
                    <li>
                        <Link to="/admin/dashboard">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/servicesList">
                            <FontAwesomeIcon icon={faShoppingBasket} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/addAsAdmin">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/setting">
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home">
                            <FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={() => setLoggedInUser({})}>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;