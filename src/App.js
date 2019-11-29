import React, { Component } from "react";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

//Direcciones
import Admin from "layouts/Admin.js";
import Inicio from "layouts/Inicio.js";
import Login from "layouts/Login.js";
import Registrarse from "views/Registrarse/SignUp.js";
import CajonDeslizable from "./components/CajonDeslizable/CajonDeslizable.js";

class App extends Component {
  render() {
    const hist = createBrowserHistory();
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/inicio" component={Inicio} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registrarse} />
          <Route path="/cajonceslizable" component={CajonDeslizable} />
          {/* <Route path="/rtl" component={RTL} /> */}
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    );
  }
}

export default App;
