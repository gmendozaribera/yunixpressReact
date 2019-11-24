import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  function makeBrand() {
    var name;
    props.routes.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}

          <Card>
            <CardBody>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <Button
                    color="transparent"
                    href="#"
                    className={classes.title}
                  >
                    {makeBrand()}
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button color="success">Agregar</Button>
                </Grid>
              </Grid>
            </CardBody>
          </Card>
        </div>
        {/* Nose para que es */}
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
        {/* fin del nose para es */}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
