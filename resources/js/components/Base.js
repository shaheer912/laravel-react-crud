import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import history from './history';
import CreateProduct from './CreateProduct';
import Products from './Products';
import UpdateProduct from './UpdateProduct';

export default class Base extends Component {
    render() {
        return (
            <Router history={history}>
      			  <Route path="/" exact component={Home} />
              <Route path="/create-product" exact component={CreateProduct} />
		          <Route path="/products" exact component={Products} />
		          <Route path="/edit-product/:id" exact component={UpdateProduct} />
      			</Router>
        );
    }
}

if (document.getElementById('crud-app')) {
    ReactDOM.render(<Base />, document.getElementById('crud-app'));
}
