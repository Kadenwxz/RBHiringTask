import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/common.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./view/homepage";
import RegisterPage from "./view/registerPage";
import IssuerSignUpPage from "./view/registerPage/IssuerSignUpPage";
import InvestorSignUpPage from "./view/registerPage/InvestorSignUpPage";
import IssuerLoginPage from "./view/registerPage/IssuerLoginPage";
import InvestorLoginPage from "./view/registerPage/InvestorLoginPage";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/visitor-register" component={RegisterPage} />
          <Route path="/issuer-sign-up" component={IssuerSignUpPage} />
          <Route path="/investor-sign-up" component={InvestorSignUpPage} />
          <Route path="/investor-log-in" component={InvestorLoginPage} />
          <Route path="/issuer-log-in" component={IssuerLoginPage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
