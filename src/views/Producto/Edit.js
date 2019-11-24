/* eslint-disable react/no-unescaped-entities */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={6} sm={12} md={8}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Editar Producto</h4>
              <p className={classes.cardCategoryWhite}>
                Modifica los campos necesarios de "Aqui el nombre de props"
              </p>
            </CardHeader>
            <CardBody>
              <form className={classes.container} noValidate autoComplete="off">
                <GridContainer>
                  <GridItem xs={8}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Nombre"
                      fullWidth
                      defaultValue="Computadora gammer"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </GridItem>
                  <GridItem xs={4}>
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      fullWidth
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={6}>
                    <TextField
                      id="outlined-number"
                      label="Stock"
                      type="number"
                      defaultValue="719"
                      fullWidth
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      margin="normal"
                      variant="outlined"
                    />
                  </GridItem>
                  <GridItem xs={6}>
                    <TextField
                      id="outlined-search"
                      label="Precio"
                      fullWidth
                      type="search"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <div>
                  <TextField
                    id="standard-full-width"
                    fullWidth
                    label="Descripcion"
                    multiline
                    rows="4"
                    defaultValue="La descripcion del producto"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <Button color="success">Aceptar</Button>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Imagenes</h4>
            </CardHeader>
            <CardBody>
              <GridContainer xs={12} sm={12} md={12}>
                <GridItem xs={4}>Imagen 1</GridItem>
                <GridItem xs={4}>Imagen 2</GridItem>
                <GridItem xs={4}>Imagen 3</GridItem>
              </GridContainer>
              <GridContainer xs={12} sm={12} md={12}>
                <GridItem xs={4}>Imagen 1</GridItem>
                <GridItem xs={4}>Imagen 2</GridItem>
                <GridItem xs={4}>Imagen 3</GridItem>
              </GridContainer>
              <GridContainer xs={12} sm={12} md={12}>
                <GridItem xs={4}>Imagen 1</GridItem>
                <GridItem xs={4}>Imagen 2</GridItem>
                <GridItem xs={4}>Imagen 3</GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
