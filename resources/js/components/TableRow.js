import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import history from './history';

import Config from './Config';


class TableRow extends Component {

  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if( confirm("Are you sure you want to delete this product?") ) {
      let uri = Config.baseURL + `/api/products/${this.props.product.id}`;
      axios.delete(uri);
      history.push('/products');
    }
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.product.id}
        </td>
        <td>
          {this.props.product.title}
        </td>
        <td>
          {this.props.product.sku}
        </td>
        <td>
          {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.props.product.price)}
        </td>
        <td>
          {this.props.product.quantity}
        </td>
        <td>
          {this.props.product.description}
        </td>
        <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"edit-product/"+this.props.product.id} className="btn btn-primary">Edit</Link>
           <input type="submit" value="Delete" className="btn btn-danger"/>
          </form>
        </td>
      </tr>
    );

  }

}


export default TableRow;
