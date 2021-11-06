import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";

import LandingPage from "./pages/LandingPage/LandingPage";
import Transfer from "./pages/Transfer/Transfer";
import SignupPage from "./pages/SignupPage/SignupPage";
import FixedTerm from "./pages/FixedTerm/FixedTerm";
import Profile from "./pages/Profile/Profile";
import Charge from "./pages/Charge/Charge";

function App() {
  return (
        <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/transfer" component={Transfer}/>
        <Route exact path="/home/charge" component={Charge}/>
        <Route exact path="/user/signUp"  component={SignupPage}/>  
        <Route exact path="/fixedTerm" component={FixedTerm}/>
        <Route exact path="/user/profile"  component={Profile}/>
       </Switch>
    </Router>    

  );
}

export default App;
