import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './pages/ProductList'
import AddProduct from './pages/AddProduct'



class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ProductList} />
                <Route exact path='/add-product' component={AddProduct} />
                <Route exact path='/add-product/:id' component={AddProduct} />
                <Redirect from="/" to="/" />
            </Switch>
        );
    }
}

export default App;