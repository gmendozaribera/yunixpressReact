/* eslint-disable react/prop-types */
import React, { Component } from "react";
// core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//componentes
import Articulo from "./Articulo.js";

class Listado extends Component {
  state = {};
  mostrarLista = () => {
    const posts = this.props.post;
    if (posts.lengh === 0) return null;
    // console.log(posts);
    return (
      <React.Fragment>
        {Object.keys(posts).map(post => (
          <Articulo key={post} info={this.props.post[post]} />
        ))}
      </React.Fragment>
    );
  };
  render() {
    const classes2 = makeStyles(() => ({
      root: {
        flexGrow: 1
      }
    }));
    return (
      <div className={classes2.root}>
        <Grid container spacing={1}>
          {this.mostrarLista()}
        </Grid>
      </div>
    );
  }
}

export default Listado;
