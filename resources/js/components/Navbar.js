import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Navbar extends Component {

	render(){
		return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="create-product" className="nav-link">Create Product</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="https://github.com/shaheer912" className="nav-link">shaheer912 Github</a>
                </li>
            </ul>
          </div>
        </nav>
			)
	}
}

export default Navbar;
