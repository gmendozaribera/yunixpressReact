import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

// const useStyles = makeStyles(styles);
class Inicio extends Component {
  classes = makeStyles(styles);

  // ref to help us initialize PerfectScrollbar on windows devices
  mainPanel = () => React.createRef();
  // states and functions
  image = () => React.useState(bgImage);
  color = () => React.useState("blue");
  mobileOpen = () => React.useState(false);
  setMobileOpen = () => React.useState(false);
  handleDrawerToggle = () => {
    this.setMobileOpen(!this.mobileOpen);
  };
  getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", this.resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", this.resizeFunction);
    };
  }

  componentDidUpdate() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", this.resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", this.resizeFunction);
    };
  }
  render() {
    return (
      <div className={this.classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"YUNIEXPRESS"}
          logo={logo}
          image={this.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.mobileOpen}
          color={this.color}
        />
        <div className={this.classes.mainPanel} ref={this.mainPanel}>
          <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={this.classes.content}>
              <div className={this.classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={this.classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

export default Inicio;
