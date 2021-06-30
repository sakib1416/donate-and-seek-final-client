import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import { createContext, useState } from 'react';
import GovernmentAid from './components/GovernmentAid/GovernmentAid';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Seeking from './components/Seeking/Seeking/Seeking';
import AddSeeking from './components/Seeking/AddSeeking/AddSeeking';
import Donations from './components/Donations/Donations/Donations';
import AddDonation from './components/Donations/AddDonation/AddDonation';
import UpdateDonation from './components/Donations/UpdateDonation/UpdateDonation';
import DonationDetails from './components/Donations/DonationDetails/DonationDetails';
import SeekingDetails from './components/Seeking/SeekingDetails/SeekingDetails';
import UpdateSeeking from './components/Seeking/UpdateSeeking/UpdateSeeking';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/donation/update/:id">
            <UpdateDonation></UpdateDonation>
          </PrivateRoute>
          <PrivateRoute path="/seeking/update/:id">
            <UpdateSeeking></UpdateSeeking>
          </PrivateRoute>
          <Route path="/donation/:id">
            <DonationDetails></DonationDetails>
          </Route>
          <Route path="/seeking/:id">
            <SeekingDetails></SeekingDetails>
          </Route>
          <Route path="/seeking">
            <Seeking></Seeking>
          </Route>
          <Route path="/donations">
            <Donations></Donations>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/addSeeking">
            <AddSeeking></AddSeeking>
          </PrivateRoute>
          <PrivateRoute path="/addDonation">
            <AddDonation></AddDonation>
          </PrivateRoute>
          <Route path="/aids">
            <GovernmentAid></GovernmentAid>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
