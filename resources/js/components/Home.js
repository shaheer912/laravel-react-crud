import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

class Home extends Component {

  render(){

    return (
      <div className="container">
        <Navbar />
        <br/>
        <main role="main">
          <div class="jumbotron">
            <div class="container">
              <h1 class="display-3">Welcome!</h1>
              <p>Laravel/React Product CRUD - Zepcom.</p>
            </div>
          </div>
        </main>
      </div>
    )

  }

}

export default Home;
