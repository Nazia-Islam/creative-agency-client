import React, { useContext } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faShoppingCart, faHome, faGripHorizontal, faShoppingBasket, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogout =() => {
        try {
            sessionStorage.clear();
            localStorage.clear();
        } catch (error) {
            console.log(error)
        }
       
    }
    return (
        <div>
            <div className="sidebar d-flex flex-column">
                <img className="top-logo" style={{width:"150px"}} src={require("../../../logos/logo.png")} alt=""/>
                <ul className="side-list-nav list-unstyled">
                    <li>
                        <Link to="/user/dashboard">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/placeOrder">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>Place Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/dashboard">
                            <FontAwesomeIcon icon={faShoppingBasket} /> <span>Srevice List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/customerReview">
                            <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/setting">
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home">
                            <FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={handleLogout}>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;