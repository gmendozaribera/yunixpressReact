import React, { Component } from "react";
// core components
import Button from "components/CustomButtons/Button.js";
import Grid from "@material-ui/core/Grid";

class Accion extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Button color="info">Info</Button>
        <Button color="warning">Editar</Button>
        <Button color="danger">Eliminar </Button>
      </Grid>
    );
  }
}

export default Accion;
