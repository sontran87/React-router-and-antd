import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
export class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductList} />
          </Switch>
          <Switch>
            <Route exact path="/add-product" component={AddProduct} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
