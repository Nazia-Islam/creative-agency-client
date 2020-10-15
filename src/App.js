import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CustomerPlacesOrder from './components/CustomerDashboard/CustomerPlacesOrder/CustomerPlacesOrder';
import AddServices from './components/AdminDashboard/AddServices/AddServices';
import AdminAddDervices from './components/AdminDashboard/AdminAddServices/AdminAddServices';
import PageNotFound from './components/PageNotFound/PageNotFound';
import CustomerServicesList from './components/CustomerDashboard/CustomerServicesList/CustomerServicesList';
import CustomerReview from './components/CustomerDashboard/CustomerReview/CustomerReview';
import ServiceListSeenByAdmin from './components/AdminDashboard/ServiceListSeenByAdmin/ServiceListSeenByAdmin';
import AddAsAdmin from './components/AdminDashboard/AddAsAdmin/AddAsAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/service/:serviceId/:urlServiceTitle">
            <CustomerPlacesOrder/>
          </PrivateRoute>
          <PrivateRoute path="/servicesList">
            <CustomerServicesList/>
          </PrivateRoute>
          <PrivateRoute path="/customerReview">
              <CustomerReview/>
          </PrivateRoute>
          <PrivateRoute path="/user/dashboard">
            <CustomerPlacesOrder/>
          </PrivateRoute>
          <PrivateRoute path="/admin/dashboard">
            <AdminAddDervices></AdminAddDervices>
          </PrivateRoute>
          <PrivateRoute path="/admin/addServices">
            <AdminAddDervices></AdminAddDervices>
          </PrivateRoute>
          <PrivateRoute path="/admin/servicesList">
            <ServiceListSeenByAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/admin/addAsAdmin">
            <AddAsAdmin/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/*">
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
