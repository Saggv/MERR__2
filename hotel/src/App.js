import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './Component/Home';
import Rooms from './Component/Rooms';
import Admin from './Component/Admin';
import Booking from './Component/Booking';
import Navigation from './Component/Navigation';
import LogSign from './Component/LogSign';

import {Provider} from "react-redux";
import Store from "./Store";
import Login from './Component/Login';
import Profile from './Component/Profile';
import AddRooom from './Component/Room/AddRooom';
import NotFound from './Component/NotFound';
function App() {
  return (
  <Provider store={Store}>
    <Router>
      <div className="App">
         <Navigation></Navigation>
          <Switch>
                <Route exact path="/room" component={Rooms}></Route>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/admin" component={Admin}></Route>
                <Route path="/booking" component={Booking}></Route>
                <Route path="/Login" component={Login}></Route>
                <Route path="/Signup/:isUser" component={LogSign}></Route>
                <Route path="/addrooms" component={AddRooom}></Route>
                <Route exact path="/"  component={Home}></Route>
                <Route component={NotFound} ></Route>
          </Switch>
      
      </div>
    </Router>
  </Provider>
  );
}

export default App;
