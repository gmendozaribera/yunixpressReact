import React, { Component } from "react";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Grid from "@material-ui/core/Grid";

class Agregar extends Component {
  render() {
    // const classes = useStyles();

    return (
      <Card>
        <CardBody>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <p>Hola titulo</p>
            </Grid>
            <Grid item xs={2}>
              <Button color="success">Agregar</Button>
            </Grid>
          </Grid>
        </CardBody>
      </Card>
    );
  }
}

export default Agregar;
