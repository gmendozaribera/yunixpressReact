import React, { Component } from "react";
//hacer rutas
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mostrar from "./Mostrar.js";
import Listado from "./Listado.js";

import axios from "axios";
class Producto extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    this.obtenerPost();
  }

  obtenerPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      // console.log(res);
      this.setState({
        post: res.data
      });
    });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              <Switch>
                <Route
                  exact
                  patch="/admin/Producto/"
                  render={() => {
                    return <Listado post={this.state.post} />;
                  }}
                />
                <Route
                  exact
                  patch="/admin/Producto/:postId"
                  render={props => {
                    return console.log("hola");
                  }}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Producto;
